import type { NodeSpecRegistry, NodeSpec } from "@nodish/core";

export const approximatelyEquals: NodeSpec = {
  typeId: "approximatelyEquals",
  displayName: "Approximately Equals",
  group: ["math", "compare"],
  inputs: {
    a: { type: "number" },
    b: { type: "number" },
    epsilon: { type: "number", defaultValue: 0.0001 },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    const a = inputs.a as number;
    const b = inputs.b as number;
    const epsilon = inputs.epsilon as number;
    return { result: Math.abs(a - b) <= epsilon };
  },
};

export const mathCompareNodes: NodeSpecRegistry = {
  [approximatelyEquals.typeId]: approximatelyEquals,
};
