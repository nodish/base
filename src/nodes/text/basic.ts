import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

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
    return { result: (inputs.a as string) + (inputs.b as string) };
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
    return { result: (inputs.value as string).length };
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
    return { result: (inputs.value as string).trim() };
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
    return { result: (inputs.value as string).toUpperCase() };
  },
};

export const simpleReplace: NodeSpec = {
  typeId: "simpleReplace",
  displayName: "Simple Replace",
  inputs: {
    value: { type: "string" },
    old: { type: "string" },
    new: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).replace(
        inputs.old as string,
        inputs.new as string,
      ),
    };
  },
};

export const textBasicNodes: NodeSpecRegistry = {
  [concatenate.typeId]: concatenate,
  [length.typeId]: length,
  [trim.typeId]: trim,
  [toUpperCase.typeId]: toUpperCase,
  [simpleReplace.typeId]: simpleReplace,
};
