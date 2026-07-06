import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";

const valueTypes = ["number", "string", "boolean", "vector"] as const;

export const select: NodeSpec = {
  typeId: "select",
  displayName: "Select",
  inputs: {
    condition: { type: "boolean" },
    ifTrue: { type: "number", types: [...valueTypes] },
    ifFalse: { type: "number", types: [...valueTypes] },
  },
  outputs: {
    result: { type: "number", types: [...valueTypes] },
  },
  group: ["logic", "select"],
  execute: (inputs) => {
    return {
      result: inputs.condition ? inputs.ifTrue : inputs.ifFalse,
    };
  },
};

export const selectNodes: NodeSpecRegistry = {
  [select.typeId]: select,
};
