import { ANY_TYPE, unwrapAny, type NodeSpec } from "@nodish/core";

export function valuesEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((v, i) => valuesEqual(v, b[i]));
  }
  return false;
}

export const equals: NodeSpec = {
  typeId: "equals",
  displayName: "Equals",
  group: ["compare"],
  inputs: {
    a: { type: ANY_TYPE },
    b: { type: ANY_TYPE },
  },
  outputs: { result: { type: "boolean" } },
  execute: (inputs) => {
    const a = unwrapAny(inputs.a);
    const b = unwrapAny(inputs.b);
    if (!a || !b) {
      return { result: Object.is(inputs.a, inputs.b) };
    }
    if (a.type !== b.type) {
      return { result: false };
    }
    return { result: valuesEqual(a.contents, b.contents) };
  },
};
