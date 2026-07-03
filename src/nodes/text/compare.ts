import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

export const equals: NodeSpec = {
  typeId: "equals",
  displayName: "Equals",
  inputs: {
    a: { type: "string" },
    b: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    return { result: inputs.a === inputs.b };
  },
};

export const greaterThan: NodeSpec = {
  typeId: "greaterThan",
  displayName: "Greater Than",
  inputs: {
    a: { type: "string" },
    b: { type: "string" },
    orEqual: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    return {
      result: inputs.a > inputs.b || (inputs.orEqual && inputs.a === inputs.b),
    };
  },
};

export const lessThan: NodeSpec = {
  typeId: "lessThan",
  displayName: "Less Than",
  inputs: {
    a: { type: "string" },
    b: { type: "string" },
    orEqual: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    return {
      result: inputs.a < inputs.b || (inputs.orEqual && inputs.a === inputs.b),
    };
  },
};

export const contains: NodeSpec = {
  typeId: "contains",
  displayName: "Contains",
  inputs: {
    a: { type: "string" },
    b: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    return { result: (inputs.a as string).includes(inputs.b as string) };
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
    return { result: (inputs.value as string).toLowerCase() };
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
  [equals.typeId]: equals,
  [greaterThan.typeId]: greaterThan,
  [lessThan.typeId]: lessThan,
  [contains.typeId]: contains,
  [toLowerCase.typeId]: toLowerCase,
  [startsWith.typeId]: startsWith,
};
