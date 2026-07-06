import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";

const scalarTypes = ["number", "string"] as const;

export const compareModeOptions = [
  "Greater",
  "Equal or Greater",
  "Equal",
  "Lesser or Equal",
  "Lesser",
  "In Between",
] as const;

type CompareMode = (typeof compareModeOptions)[number];

function compareScalars(
  mode: CompareMode,
  a: number | string,
  b: number | string,
  value: number | string,
): boolean {
  switch (mode) {
    case "Greater":
      return a > b;
    case "Equal or Greater":
      return a > b || a === b;
    case "Equal":
      return a === b;
    case "Lesser or Equal":
      return a < b || a === b;
    case "Lesser":
      return a < b;
    case "In Between": {
      const lo = a < b ? a : b;
      const hi = a < b ? b : a;
      return value >= lo && value <= hi;
    }
  }
}

export const compare: NodeSpec = {
  typeId: "compare",
  displayName: "Compare",
  group: ["compare"],
  inputs: {
    mode: {
      type: "choice",
      userOnly: true,
      defaultValue: "Equal",
      customProps: { options: [...compareModeOptions] },
    },
    a: { type: "number", types: [...scalarTypes] },
    b: { type: "number", types: [...scalarTypes] },
    value: {
      type: "number",
      types: [...scalarTypes],
      description: "Used for In Between mode",
    },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    const mode = inputs.mode as CompareMode;
    const a = inputs.a as number | string;
    const b = inputs.b as number | string;
    const value = inputs.value as number | string;
    return { result: compareScalars(mode, a, b, value) };
  },
};

export const notEquals: NodeSpec = {
  typeId: "notEquals",
  displayName: "Not Equals",
  group: ["compare"],
  inputs: {
    a: { type: "number", types: [...scalarTypes] },
    b: { type: "number", types: [...scalarTypes] },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    return { result: inputs.a !== inputs.b };
  },
};

export const compareNodes: NodeSpecRegistry = {
  [compare.typeId]: compare,
  [notEquals.typeId]: notEquals,
};
