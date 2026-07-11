import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

/** Parse `/pattern/flags` or a plain pattern string into a RegExp. */
export function parseRegex(pattern: string, defaultFlags = ""): RegExp {
  const slashForm = pattern.match(/^\/(.+)\/([gimsuy]*)$/);
  if (slashForm) {
    return new RegExp(slashForm[1]!, slashForm[2] || defaultFlags);
  }
  return new RegExp(pattern, defaultFlags);
}

export const regexMatch: NodeSpec = {
  typeId: "regexMatch",
  displayName: "Regex Match",
  inputs: {
    value: { type: "string" },
    regex: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["text", "regex"],
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

export const regexReplace: NodeSpec = {
  typeId: "regexReplace",
  displayName: "Regex Replace",
  inputs: {
    value: { type: "string" },
    regex: { type: "string" },
    replacement: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "regex"],
  execute: (inputs) => {
    const value = asString(inputs.value);
    const pattern = asString(inputs.regex);
    const replacement = asString(inputs.replacement);
    if (!pattern) return { result: value };
    try {
      const regexp = parseRegex(pattern, "g");
      return { result: value.replace(regexp, replacement) };
    } catch {
      return { result: value };
    }
  },
};

export const regexNodes: NodeSpecRegistry = {
  [regexMatch.typeId]: regexMatch,
  [regexReplace.typeId]: regexReplace,
};
