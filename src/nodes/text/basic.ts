import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

/** Parse `/pattern/flags` or a plain pattern string into a RegExp. */
function parseRegex(pattern: string, defaultFlags = ""): RegExp {
  const slashForm = pattern.match(/^\/(.+)\/([gimsuy]*)$/);
  if (slashForm) {
    return new RegExp(slashForm[1]!, slashForm[2] || defaultFlags);
  }
  return new RegExp(pattern, defaultFlags);
}

const replaceModeOptions = ["First", "All", "Regex"] as const;
type ReplaceMode = (typeof replaceModeOptions)[number];

export const concatenate: NodeSpec = {
  typeId: "concatenate",
  displayName: "Concatenate",
  inputs: {
    a: { type: "string" },
    b: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return { result: asString(inputs.a) + asString(inputs.b) };
  },
};

export const length: NodeSpec = {
  typeId: "length",
  displayName: "Length",
  inputs: {
    value: { type: "string" },
  },
  outputs: { result: { type: "number" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return { result: asString(inputs.value).length };
  },
};

export const trim: NodeSpec = {
  typeId: "trim",
  displayName: "Trim",
  inputs: {
    value: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return { result: asString(inputs.value).trim() };
  },
};

export const toLowerCase: NodeSpec = {
  typeId: "toLowerCase",
  displayName: "To Lower Case",
  inputs: {
    value: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return { result: asString(inputs.value).toLowerCase() };
  },
};

export const toUpperCase: NodeSpec = {
  typeId: "toUpperCase",
  displayName: "To Upper Case",
  inputs: {
    value: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return { result: asString(inputs.value).toUpperCase() };
  },
};

export const replace: NodeSpec = {
  typeId: "replace",
  displayName: "Replace",
  inputs: {
    mode: {
      type: "choice",
      userOnly: true,
      defaultValue: "All",
      customProps: { options: [...replaceModeOptions] },
    },
    value: { type: "string" },
    search: { type: "string" },
    replacement: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    const mode = inputs.mode as ReplaceMode;
    const value = asString(inputs.value);
    const search = asString(inputs.search);
    const replacement = asString(inputs.replacement);
    switch (mode) {
      case "First":
        return { result: search ? value.replace(search, replacement) : value };
      case "All":
        return {
          result: search ? value.split(search).join(replacement) : value,
        };
      case "Regex":
        if (!search) return { result: value };
        try {
          return {
            result: value.replace(parseRegex(search, "g"), replacement),
          };
        } catch {
          return { result: value };
        }
    }
  },
};

export const regexMatch: NodeSpec = {
  typeId: "regexMatch",
  displayName: "Regex Match",
  inputs: {
    value: { type: "string" },
    regex: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["text", "search"],
  execute: (inputs) => {
    const value = asString(inputs.value);
    const pattern = asString(inputs.regex);
    if (!pattern) return { result: false };
    try {
      return { result: parseRegex(pattern).test(value) };
    } catch {
      return { result: false };
    }
  },
};

export const textBasicNodes: NodeSpecRegistry = {
  [concatenate.typeId]: concatenate,
  [length.typeId]: length,
  [trim.typeId]: trim,
  [toUpperCase.typeId]: toUpperCase,
  [toLowerCase.typeId]: toLowerCase,
  [replace.typeId]: replace,
  [regexMatch.typeId]: regexMatch,
};
