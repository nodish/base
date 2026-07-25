import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export const stringEquals: NodeSpec = {
  typeId: "stringEquals",
  displayName: "Equals",
  inputs: {
    a: { type: "string" },
    b: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["compare"],
  execute: (inputs) => ({
    result: asString(inputs.a) === asString(inputs.b),
  }),
};

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
  [stringEquals.typeId]: stringEquals,
  [contains.typeId]: contains,
  [startsWith.typeId]: startsWith,
};
