import type { NodePack } from "@nodish/core";
import { number } from "./types/number";
import { boolean, BOOLEAN_WIDGET_ID } from "./types/boolean/boolean";
import Boolean from "./types/boolean/boolean.vue";
import { basicMathNodes } from "./nodes/math/basic";
import { trigMathNodes } from "./nodes/math/trig";
import { string } from "./types/string";
import { mathCompareNodes } from "./nodes/math/compare";
import { textBasicNodes } from "./nodes/text/basic";
import { textCompareNodes } from "./nodes/text/compare";
import { booleanBasicNodes } from "./nodes/boolean/basic";
import { regexNodes } from "./nodes/text/regex";

export const pack: NodePack = {
  id: "@nodish/base",
  nodeTypes: {
    ...basicMathNodes,
    ...trigMathNodes,
    ...mathCompareNodes,
    ...textBasicNodes,
    ...textCompareNodes,
    ...booleanBasicNodes,
    ...regexNodes,
  },
  types: {
    number: number,
    boolean: boolean,
    string: string,
  },
  setup({ registerComponentWidget }) {
    registerComponentWidget(BOOLEAN_WIDGET_ID, Boolean);
  },
};
