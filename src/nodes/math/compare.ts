import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

export const equals: NodeSpec = {
  typeId: "equals",
  displayName: "Equals",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
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
    a: { type: "number" },
    b: { type: "number" },
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
    a: { type: "number" },
    b: { type: "number" },
    orEqual: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    return {
      result: inputs.a < inputs.b || (inputs.orEqual && inputs.a === inputs.b),
    };
  },
};

export const mathCompareNodes: NodeSpecRegistry = {
  [equals.typeId]: equals,
  [greaterThan.typeId]: greaterThan,
  [lessThan.typeId]: lessThan,
};
