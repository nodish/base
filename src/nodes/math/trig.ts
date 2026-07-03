import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

export const sine: NodeSpec = {
  typeId: "sine",
  displayName: "Sine",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "trigonometry"],
  execute: (inputs) => {
    return { result: Math.sin(inputs.value as number) };
  },
};

export const cosine: NodeSpec = {
  typeId: "cosine",
  displayName: "Cosine",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "trigonometry"],
  execute: (inputs) => {
    return { result: Math.cos(inputs.value as number) };
  },
};

export const tangent: NodeSpec = {
  typeId: "tangent",
  displayName: "Tangent",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "trigonometry"],
  execute: (inputs) => {
    return { result: Math.tan(inputs.value as number) };
  },
};

export const cotangent: NodeSpec = {
  typeId: "cotangent",
  displayName: "Cotangent",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "trigonometry"],
  execute: (inputs) => {
    return { result: 1 / Math.tan(inputs.value as number) };
  },
};
export const secant: NodeSpec = {
  typeId: "secant",
  displayName: "Secant",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "trigonometry"],
  execute: (inputs) => {
    return { result: 1 / Math.cos(inputs.value as number) };
  },
};
export const cosecant: NodeSpec = {
  typeId: "cosecant",
  displayName: "Cosecant",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "trigonometry"],
  execute: (inputs) => {
    return { result: 1 / Math.sin(inputs.value as number) };
  },
};

export const trigMathNodes: NodeSpecRegistry = {
  [sine.typeId]: sine,
  [cosine.typeId]: cosine,
  [tangent.typeId]: tangent,
  [cotangent.typeId]: cotangent,
  [secant.typeId]: secant,
  [cosecant.typeId]: cosecant,
};
