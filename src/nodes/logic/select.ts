import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";

const selectTypes = ["number", "string", "boolean", "vector", "choice"] as const;

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function makeSelect(type: (typeof selectTypes)[number]): NodeSpec {
  const label = capitalize(type);
  return {
    typeId: `select${label}`,
    displayName: `Select ${label}`,
    inputs: {
      condition: { type: "boolean" },
      ifTrue: { type },
      ifFalse: { type },
    },
    outputs: { result: { type } },
    group: ["logic", "select"],
    execute: (inputs) => ({
      result: inputs.condition ? inputs.ifTrue : inputs.ifFalse,
    }),
  };
}

const selectNumber = makeSelect("number");
const selectString = makeSelect("string");
const selectBoolean = makeSelect("boolean");
const selectVector = makeSelect("vector");
const selectChoice = makeSelect("choice");

export const selectNodes: NodeSpecRegistry = {
  [selectNumber.typeId]: selectNumber,
  [selectString.typeId]: selectString,
  [selectBoolean.typeId]: selectBoolean,
  [selectVector.typeId]: selectVector,
  [selectChoice.typeId]: selectChoice,
};
