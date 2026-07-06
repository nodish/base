import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

export const contains: NodeSpec = {
  typeId: "contains",
  displayName: "Contains",
  inputs: {
    a: { type: "string" },
    b: { type: "string" },
  },
  group: ["text", "compare"],
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    return { result: (inputs.a as string).includes(inputs.b as string) };
  },
};

export const startsWith: NodeSpec = {
  typeId: "startsWith",
  displayName: "Starts With",
  inputs: {
    value: { type: "string" },
    prefix: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).startsWith(inputs.prefix as string),
    };
  },
};

export const textCompareNodes: NodeSpecRegistry = {
  [contains.typeId]: contains,
  [startsWith.typeId]: startsWith,
};
