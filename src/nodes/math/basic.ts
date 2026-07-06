import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";
export const add: NodeSpec = {
  typeId: "add",
  displayName: "Add",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    return { result: (inputs.a as number) + (inputs.b as number) };
  },
};

export const subtract: NodeSpec = {
  typeId: "subtract",
  displayName: "Subtract",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    return { result: (inputs.a as number) - (inputs.b as number) };
  },
};

export const multiply: NodeSpec = {
  typeId: "multiply",
  displayName: "Multiply",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    return { result: (inputs.a as number) * (inputs.b as number) };
  },
};

export const divide: NodeSpec = {
  typeId: "divide",
  displayName: "Divide",
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    return { result: (inputs.a as number) / (inputs.b as number) };
  },
};

export const power: NodeSpec = {
  typeId: "power",
  displayName: "Power",
  inputs: {
    base: { type: "number" },
    exponent: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    return {
      result: Math.pow(inputs.base as number, inputs.exponent as number),
    };
  },
};

export const roundingModeOptions = ["Ceil", "Floor", "Round"] as const;

type RoundingMode = (typeof roundingModeOptions)[number];

export const rounding: NodeSpec = {
  typeId: "rounding",
  displayName: "Rounding",
  inputs: {
    mode: {
      type: "choice",
      userOnly: true,
      defaultValue: "Round",
      customProps: { options: [...roundingModeOptions] },
    },
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic", "rounding"],
  execute: (inputs) => {
    const value = inputs.value as number;
    const mode = inputs.mode as RoundingMode;
    switch (mode) {
      case "Ceil":
        return { result: Math.ceil(value) };
      case "Floor":
        return { result: Math.floor(value) };
      case "Round":
        return { result: Math.round(value) };
    }
  },
};

export const absolute: NodeSpec = {
  typeId: "absolute",
  displayName: "Absolute value",
  inputs: {
    value: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    return { result: Math.abs(inputs.value as number) };
  },
};

export const modulo: NodeSpec = {
  typeId: "modulo",
  displayName: "Modulo",
  inputs: {
    value: { type: "number" },
    modulus: { type: "number" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    return { result: (inputs.value as number) % (inputs.modulus as number) };
  },
};

export const mapping: NodeSpec = {
  typeId: "mapping",
  displayName: "Mapping",
  inputs: {
    value: { type: "number" },
    inputMin: { type: "number" },
    inputMax: { type: "number" },
    outputMin: { type: "number" },
    outputMax: { type: "number" },
    clamp: { type: "boolean" },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    let input = inputs.value as number;
    let inputMin = inputs.inputMin as number;
    let inputMax = inputs.inputMax as number;
    let outputMin = inputs.outputMin as number;
    let outputMax = inputs.outputMax as number;
    if (inputs.clamp) {
      input = Math.max(inputMin, Math.min(input, inputMax));
    }
    return {
      result:
        ((input - inputMin) * (outputMax - outputMin) + outputMin) /
        (inputMax - inputMin),
    };
  },
};

export const constant: NodeSpec = {
  typeId: "constant",
  displayName: "Constant",
  inputs: {
    value: {
      type: "choice",
      userOnly: true,
      defaultValue: "pi",
      customProps: { options: ["pi", "e"] },
    },
  },
  outputs: { result: { type: "number" } },
  group: ["math", "basic"],
  execute: (inputs) => {
    return { result: { pi: Math.PI, e: Math.E }[inputs.value as string] };
  },
};

export const basicMathNodes: NodeSpecRegistry = {
  [add.typeId]: add,
  [subtract.typeId]: subtract,
  [multiply.typeId]: multiply,
  [divide.typeId]: divide,
  [power.typeId]: power,
  [rounding.typeId]: rounding,
  [absolute.typeId]: absolute,
  [mapping.typeId]: mapping,
  [constant.typeId]: constant,
};
