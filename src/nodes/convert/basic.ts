import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";

const toStringTypes = ["number", "boolean"] as const;
const toBooleanTypes = ["string", "number"] as const;

export const toString: NodeSpec = {
  typeId: "toString",
  displayName: "To String",
  inputs: {
    value: { type: "number", types: [...toStringTypes] },
  },
  outputs: { result: { type: "string" } },
  group: ["convert"],
  execute: (inputs) => {
    return { result: String(inputs.value) };
  },
};

export const toBoolean: NodeSpec = {
  typeId: "toBoolean",
  displayName: "To Boolean",
  inputs: {
    value: { type: "string", types: [...toBooleanTypes] },
  },
  outputs: { result: { type: "boolean" } },
  group: ["convert"],
  execute: (inputs) => {
    const value = inputs.value;
    if (typeof value === "number") {
      return { result: value !== 0 };
    }
    const s = (value as string).trim().toLowerCase();
    return { result: s === "true" || s === "1" };
  },
};

export const stringToNumber: NodeSpec = {
  typeId: "stringToNumber",
  displayName: "String To Number",
  inputs: {
    value: { type: "string" },
  },
  outputs: { result: { type: "number" } },
  group: ["convert"],
  execute: (inputs) => {
    return { result: Number(inputs.value as string) };
  },
};

export const convertNodes: NodeSpecRegistry = {
  [toString.typeId]: toString,
  [toBoolean.typeId]: toBoolean,
  [stringToNumber.typeId]: stringToNumber,
};
