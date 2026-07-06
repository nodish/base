import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";
import { assertSameLength, vectorLength } from "./shared";

export const vectorAdd: NodeSpec = {
  typeId: "vectorAdd",
  displayName: "Add",
  inputs: {
    a: { type: "vector", connectionOnly: true },
    b: { type: "vector", connectionOnly: true },
  },
  outputs: { result: { type: "vector" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const a = inputs.a as number[];
    const b = inputs.b as number[];
    assertSameLength(a, b, "Add");
    return { result: a.map((v, i) => v + b[i]!) };
  },
};

export const vectorSubtract: NodeSpec = {
  typeId: "vectorSubtract",
  displayName: "Subtract",
  inputs: {
    a: { type: "vector", connectionOnly: true },
    b: { type: "vector", connectionOnly: true },
  },
  outputs: { result: { type: "vector" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const a = inputs.a as number[];
    const b = inputs.b as number[];
    assertSameLength(a, b, "Subtract");
    return { result: a.map((v, i) => v - b[i]!) };
  },
};

export const vectorScale: NodeSpec = {
  typeId: "vectorScale",
  displayName: "Scale",
  inputs: {
    vector: { type: "vector", connectionOnly: true },
    scalar: { type: "number", connectionOnly: true },
  },
  outputs: { result: { type: "vector" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const vector = inputs.vector as number[];
    const scalar = inputs.scalar as number;
    return { result: vector.map((v) => v * scalar) };
  },
};

export const vectorDot: NodeSpec = {
  typeId: "vectorDot",
  displayName: "Dot",
  inputs: {
    a: { type: "vector", connectionOnly: true },
    b: { type: "vector", connectionOnly: true },
  },
  outputs: { result: { type: "number" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const a = inputs.a as number[];
    const b = inputs.b as number[];
    assertSameLength(a, b, "Dot");
    return { result: a.reduce((sum, v, i) => sum + v * b[i]!, 0) };
  },
};

export const vectorLengthNode: NodeSpec = {
  typeId: "vectorLength",
  displayName: "Length",
  inputs: {
    vector: { type: "vector", connectionOnly: true },
  },
  outputs: { result: { type: "number" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    return { result: vectorLength(inputs.vector as number[]) };
  },
};

export const vectorNormalize: NodeSpec = {
  typeId: "vectorNormalize",
  displayName: "Normalize",
  inputs: {
    vector: { type: "vector", connectionOnly: true },
  },
  outputs: { result: { type: "vector" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const vector = inputs.vector as number[];
    const length = vectorLength(vector);
    if (length === 0) return { result: vector.map(() => 0) };
    return { result: vector.map((v) => v / length) };
  },
};

export const vectorDistance: NodeSpec = {
  typeId: "vectorDistance",
  displayName: "Distance",
  inputs: {
    a: { type: "vector", connectionOnly: true },
    b: { type: "vector", connectionOnly: true },
  },
  outputs: { result: { type: "number" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const a = inputs.a as number[];
    const b = inputs.b as number[];
    assertSameLength(a, b, "Distance");
    return { result: vectorLength(a.map((v, i) => v - b[i]!)) };
  },
};

export const vectorLerp: NodeSpec = {
  typeId: "vectorLerp",
  displayName: "Lerp",
  inputs: {
    a: { type: "vector", connectionOnly: true },
    b: { type: "vector", connectionOnly: true },
    t: { type: "number" },
  },
  outputs: { result: { type: "vector" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const a = inputs.a as number[];
    const b = inputs.b as number[];
    const t = inputs.t as number;
    assertSameLength(a, b, "Lerp");
    return { result: a.map((v, i) => v + (b[i]! - v) * t) };
  },
};

export const vectorCross: NodeSpec = {
  typeId: "vectorCross",
  displayName: "Cross",
  description: "3D cross product (both inputs must have length 3)",
  inputs: {
    a: { type: "vector", connectionOnly: true },
    b: { type: "vector", connectionOnly: true },
  },
  outputs: { result: { type: "vector" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const a = inputs.a as number[];
    const b = inputs.b as number[];
    if (a.length !== 3 || b.length !== 3) {
      throw new Error("Cross: both vectors must have length 3");
    }
    return {
      result: [
        a[1]! * b[2]! - a[2]! * b[1]!,
        a[2]! * b[0]! - a[0]! * b[2]!,
        a[0]! * b[1]! - a[1]! * b[0]!,
      ],
    };
  },
};

export const vectorNegate: NodeSpec = {
  typeId: "vectorNegate",
  displayName: "Negate",
  inputs: {
    vector: { type: "vector", connectionOnly: true },
  },
  outputs: { result: { type: "vector" } },
  group: ["vector", "basic"],
  execute: (inputs) => {
    const vector = inputs.vector as number[];
    return { result: vector.map((v) => -v) };
  },
};

export const vectorBasicNodes: NodeSpecRegistry = {
  [vectorAdd.typeId]: vectorAdd,
  [vectorSubtract.typeId]: vectorSubtract,
  [vectorScale.typeId]: vectorScale,
  [vectorDot.typeId]: vectorDot,
  [vectorLengthNode.typeId]: vectorLengthNode,
  [vectorNormalize.typeId]: vectorNormalize,
  [vectorDistance.typeId]: vectorDistance,
  [vectorLerp.typeId]: vectorLerp,
  [vectorCross.typeId]: vectorCross,
  [vectorNegate.typeId]: vectorNegate,
};
