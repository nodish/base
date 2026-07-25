import {
  ANY_TYPE,
  isAnyValue,
  type AnyValue,
  type NodeSpec,
  type NodeSpecRegistry,
} from "@nodish/core";

function requireAnyValue(value: unknown, port: string): AnyValue {
  if (!isAnyValue(value)) {
    throw new Error(`Select: ${port} must be connected`);
  }
  return value;
}

export const select: NodeSpec = {
  typeId: "select",
  displayName: "Select",
  inputs: {
    condition: { type: "boolean" },
    ifTrue: { type: ANY_TYPE },
    ifFalse: { type: ANY_TYPE },
  },
  outputs: { result: { type: ANY_TYPE } },
  group: ["logic", "select"],
  execute: (inputs) => {
    const ifTrue = requireAnyValue(inputs.ifTrue, "ifTrue");
    const ifFalse = requireAnyValue(inputs.ifFalse, "ifFalse");
    if (ifTrue.type !== ifFalse.type) {
      throw new Error(
        `Select: ifTrue and ifFalse must have the same type (got "${ifTrue.type}" and "${ifFalse.type}")`,
      );
    }
    return { result: inputs.condition ? ifTrue : ifFalse };
  },
};

export const selectNodes: NodeSpecRegistry = {
  [select.typeId]: select,
};
