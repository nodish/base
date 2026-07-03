import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

export const not: NodeSpec = {
  typeId: "not",
  displayName: "Not",
  inputs: {
    value: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["boolean", "basic"],
  execute: (inputs) => {
    return { result: !inputs.value };
  },
};

export const or: NodeSpec = {
  typeId: "or",
  displayName: "Or",
  inputs: {
    a: { type: "boolean" },
    b: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["boolean", "basic"],
  execute: (inputs) => {
    return { result: inputs.a || inputs.b };
  },
};

export const and: NodeSpec = {
  typeId: "and",
  displayName: "And",
  inputs: {
    a: { type: "boolean" },
    b: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["boolean", "basic"],
  execute: (inputs) => {
    return { result: inputs.a && inputs.b };
  },
};

export const xor: NodeSpec = {
  typeId: "xor",
  displayName: "Xor",
  inputs: {
    a: { type: "boolean" },
    b: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["boolean", "basic"],
  execute: (inputs) => {
    return { result: inputs.a !== inputs.b };
  },
};

export const nand: NodeSpec = {
  typeId: "nand",
  displayName: "Nand",
  inputs: {
    a: { type: "boolean" },
    b: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["boolean", "basic"],
  execute: (inputs) => {
    return { result: !(inputs.a && inputs.b) };
  },
};

export const nor: NodeSpec = {
  typeId: "nor",
  displayName: "Nor",
  inputs: {
    a: { type: "boolean" },
    b: { type: "boolean" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["boolean", "basic"],
  execute: (inputs) => {
    return { result: !(inputs.a || inputs.b) };
  },
};

export const booleanBasicNodes: NodeSpecRegistry = {
  [not.typeId]: not,
  [or.typeId]: or,
  [and.typeId]: and,
  [xor.typeId]: xor,
  [nand.typeId]: nand,
  [nor.typeId]: nor,
};
