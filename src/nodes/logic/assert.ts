import type { NodeSpec, NodeSpecRegistry, PortTypeDefinition } from "@nodish/core";
import { number } from "../../types/number";
import { boolean } from "../../types/boolean/boolean";
import { string } from "../../types/string";
import { vector } from "../../types/vector/vector";
import { choice } from "../../types/choice";

const assertInputTypes = ["number", "string", "boolean", "vector", "choice"] as const;

function makeAssert(typeDef: PortTypeDefinition): NodeSpec {
  const label = typeDef.label;
  const typeId = `assert${label.replace(/\s+/g, "")}`;
  return {
    typeId,
    displayName: `Assert ${label}`,
    inputs: {
      value: { type: typeDef.id, types: [...assertInputTypes] },
    },
    outputs: { result: { type: typeDef.id } },
    group: ["logic", "assert"],
    execute: (inputs) => {
      const value = inputs.value;
      if (!typeDef.validate(value)) {
        throw new Error(`Expected ${label}`);
      }
      return { result: value };
    },
  };
}

const assertNumber = makeAssert(number);
const assertString = makeAssert(string);
const assertBoolean = makeAssert(boolean);
const assertVector = makeAssert(vector);
const assertChoice = makeAssert(choice);

export const assertNodes: NodeSpecRegistry = {
  [assertNumber.typeId]: assertNumber,
  [assertString.typeId]: assertString,
  [assertBoolean.typeId]: assertBoolean,
  [assertVector.typeId]: assertVector,
  [assertChoice.typeId]: assertChoice,
};
