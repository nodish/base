import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";
import {
  buildComponentInputs,
  buildComponentOutputs,
  clampDimension,
  DEFAULT_VECTOR_DIMENSION,
  readComponents,
  writeComponents,
} from "./shared";

export const makeVector: NodeSpec = {
  typeId: "makeVector",
  displayName: "Make Vector",
  inputs: {
    dimension: {
      type: "number",
      userOnly: true,
      defaultValue: DEFAULT_VECTOR_DIMENSION,
    },
  },
  outputs: { vector: { type: "vector" } },
  group: ["vector", "io"],
  resolvePorts: (params) => ({
    inputs: buildComponentInputs(clampDimension(params.dimension)),
    outputs: { vector: { type: "vector" } },
  }),
  execute: (inputs) => {
    const dimension = clampDimension(inputs.dimension);
    return { vector: readComponents(inputs, dimension) };
  },
};

export const breakVector: NodeSpec = {
  typeId: "breakVector",
  displayName: "Break Vector",
  inputs: {
    vector: { type: "vector", connectionOnly: true },
    dimension: {
      type: "number",
      userOnly: true,
      defaultValue: DEFAULT_VECTOR_DIMENSION,
    },
  },
  outputs: {},
  group: ["vector", "io"],
  resolvePorts: (params) => ({
    inputs: {
      vector: { type: "vector" },
      dimension: {
        type: "number",
        userOnly: true,
        defaultValue: DEFAULT_VECTOR_DIMENSION,
      },
    },
    outputs: buildComponentOutputs(clampDimension(params.dimension)),
  }),
  execute: (inputs) => {
    const dimension = clampDimension(inputs.dimension);
    const vector = inputs.vector as number[];
    return writeComponents(vector, dimension);
  },
};

export const vectorIoNodes: NodeSpecRegistry = {
  [makeVector.typeId]: makeVector,
  [breakVector.typeId]: breakVector,
};
