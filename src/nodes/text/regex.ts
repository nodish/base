import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

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
    return {
      result: (inputs.value as string).match(inputs.regex as string) !== null,
    };
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
    return {
      result: (inputs.value as string).replace(
        inputs.regex as string,
        inputs.replacement as string,
      ),
    };
  },
};

export const regexNodes: NodeSpecRegistry = {
  [regexMatch.typeId]: regexMatch,
  [regexReplace.typeId]: regexReplace,
};
