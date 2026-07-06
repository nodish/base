import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";

export const min: NodeSpec = {
  typeId: "min",
  displayName: "Min",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    return { result: Math.min(inputs.a as number, inputs.b as number) };
  },
};

export const max: NodeSpec = {
  typeId: "max",
  displayName: "Max",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    return { result: Math.max(inputs.a as number, inputs.b as number) };
  },
};

export const clamp: NodeSpec = {
  typeId: "clamp",
  displayName: "Clamp",
  inputs: {
    value: { type: "number" },
    min: { type: "number" },
    max: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    const value = inputs.value as number;
    const minVal = inputs.min as number;
    const maxVal = inputs.max as number;
    return { result: Math.max(minVal, Math.min(value, maxVal)) };
  },
};

export const sqrt: NodeSpec = {
  typeId: "sqrt",
  displayName: "Square Root",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    return { result: Math.sqrt(inputs.value as number) };
  },
};

export const negate: NodeSpec = {
  typeId: "negate",
  displayName: "Negate",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    return { result: -(inputs.value as number) };
  },
};

export const sign: NodeSpec = {
  typeId: "sign",
  displayName: "Sign",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    return { result: Math.sign(inputs.value as number) };
  },
};

export const lerp: NodeSpec = {
  typeId: "lerp",
  displayName: "Lerp",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
    t: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    const a = inputs.a as number;
    const b = inputs.b as number;
    const t = inputs.t as number;
    return { result: a + (b - a) * t };
  },
};

export const inverseLerp: NodeSpec = {
  typeId: "inverseLerp",
  displayName: "Inverse Lerp",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    const a = inputs.a as number;
    const b = inputs.b as number;
    const value = inputs.value as number;
    return { result: (value - a) / (b - a) };
  },
};

export const smoothstep: NodeSpec = {
  typeId: "smoothstep",
  displayName: "Smoothstep",
  inputs: {
    edge0: { type: "number" },
    edge1: { type: "number" },
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    const edge0 = inputs.edge0 as number;
    const edge1 = inputs.edge1 as number;
    const value = inputs.value as number;
    const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
    return { result: t * t * (3 - 2 * t) };
  },
};

export const random: NodeSpec = {
  typeId: "random",
  displayName: "Random",
  inputs: {
    min: { type: "number", defaultValue: 0 },
    max: { type: "number", defaultValue: 1 },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "util"],
  execute: (inputs) => {
    const min = inputs.min as number;
    const max = inputs.max as number;
    return { result: min + Math.random() * (max - min) };
  },
};

export const pi: NodeSpec = {
  typeId: "pi",
  displayName: "Pi",
  inputs: {},
  outputs: { result: { type: "number" } },
  group: ["math", "util", "constants"],
  execute: () => {
    return { result: Math.PI };
  },
};

export const e: NodeSpec = {
  typeId: "e",
  displayName: "E",
  inputs: {},
  outputs: { result: { type: "number" } },
  group: ["math", "util", "constants"],
  execute: () => {
    return { result: Math.E };
  },
};

export const mathUtilNodes: NodeSpecRegistry = {
  [min.typeId]: min,
  [max.typeId]: max,
  [clamp.typeId]: clamp,
  [sqrt.typeId]: sqrt,
  [negate.typeId]: negate,
  [sign.typeId]: sign,
  [lerp.typeId]: lerp,
  [inverseLerp.typeId]: inverseLerp,
  [smoothstep.typeId]: smoothstep,
  [random.typeId]: random,
  [pi.typeId]: pi,
  [e.typeId]: e,
};
