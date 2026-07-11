import type { NodePack } from "@nodish/core";
import {
  registerComponentWidget,
  registerTypeWidget,
} from "@nodish/core";
import { number } from "./types/number";
import { boolean, BOOLEAN_WIDGET_ID } from "./types/boolean/boolean";
import Boolean from "./types/boolean/boolean.vue";
import { vector, VECTOR_WIDGET_ID } from "./types/vector/vector";
import Vector from "./types/vector/vector.vue";
import { string, STRING_DROPDOWN_WIDGET_ID } from "./types/string";
import StringDropdown from "./types/string/dropdown.vue";
import { choice } from "./types/choice";
import { basicMathNodes } from "./nodes/math/basic";
import { trigMathNodes } from "./nodes/math/trig";
import { mathUtilNodes } from "./nodes/math/util";
import { compareNodes } from "./nodes/compare/basic";
import { mathCompareNodes } from "./nodes/math/compare";
import { textBasicNodes } from "./nodes/text/basic";
import { textCompareNodes } from "./nodes/text/compare";
import { textSliceNodes } from "./nodes/text/slice";
import { booleanBasicNodes } from "./nodes/boolean/basic";
import { vectorIoNodes } from "./nodes/vector/io";
import { vectorBasicNodes } from "./nodes/vector/basic";
import { convertNodes } from "./nodes/convert/basic";
import { selectNodes } from "./nodes/logic/select";

function registerWidgets(
  regComponent: typeof registerComponentWidget,
  regType: typeof registerTypeWidget,
) {
  regComponent(BOOLEAN_WIDGET_ID, Boolean);
  regComponent(VECTOR_WIDGET_ID, Vector);
  regComponent(STRING_DROPDOWN_WIDGET_ID, StringDropdown);
  regType("string", "dropdown", StringDropdown);
}

registerWidgets(registerComponentWidget, registerTypeWidget);

export const pack: NodePack = {
  id: "@nodish/base",
  nodeTypes: {
    ...basicMathNodes,
    ...trigMathNodes,
    ...mathUtilNodes,
    ...compareNodes,
    ...mathCompareNodes,
    ...textBasicNodes,
    ...textCompareNodes,
    ...textSliceNodes,
    ...booleanBasicNodes,
    ...vectorIoNodes,
    ...vectorBasicNodes,
    ...convertNodes,
    ...selectNodes,
  },
  types: {
    number: number,
    boolean: boolean,
    string: string,
    choice: choice,
    vector: vector,
  },
  setup({ registerComponentWidget, registerTypeWidget }) {
    registerWidgets(registerComponentWidget, registerTypeWidget);
  },
};
