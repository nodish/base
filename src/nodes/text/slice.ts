import type { NodeSpec, NodeSpecRegistry } from "@nodish/core";

export const endsWith: NodeSpec = {
  typeId: "endsWith",
  displayName: "Ends With",
  inputs: {
    value: { type: "string" },
    suffix: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).endsWith(inputs.suffix as string),
    };
  },
};

export const indexOf: NodeSpec = {
  typeId: "indexOf",
  displayName: "Index Of",
  inputs: {
    value: { type: "string" },
    search: { type: "string" },
  },
  outputs: { result: { type: "number" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).indexOf(inputs.search as string),
    };
  },
};

export const substring: NodeSpec = {
  typeId: "substring",
  displayName: "Substring",
  inputs: {
    value: { type: "string" },
    start: { type: "number" },
    end: { type: "number" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "slice"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).slice(
        inputs.start as number,
        inputs.end as number,
      ),
    };
  },
};

export const left: NodeSpec = {
  typeId: "left",
  displayName: "Left",
  inputs: {
    value: { type: "string" },
    count: { type: "number" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "slice"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).slice(0, inputs.count as number),
    };
  },
};

export const right: NodeSpec = {
  typeId: "right",
  displayName: "Right",
  inputs: {
    value: { type: "string" },
    count: { type: "number" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "slice"],
  execute: (inputs) => {
    const value = inputs.value as string;
    const count = inputs.count as number;
    return { result: value.slice(Math.max(0, value.length - count)) };
  },
};

export const padStart: NodeSpec = {
  typeId: "padStart",
  displayName: "Pad Start",
  inputs: {
    value: { type: "string" },
    length: { type: "number" },
    fill: { type: "string", defaultValue: " " },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).padStart(
        inputs.length as number,
        inputs.fill as string,
      ),
    };
  },
};

export const padEnd: NodeSpec = {
  typeId: "padEnd",
  displayName: "Pad End",
  inputs: {
    value: { type: "string" },
    length: { type: "number" },
    fill: { type: "string", defaultValue: " " },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).padEnd(
        inputs.length as number,
        inputs.fill as string,
      ),
    };
  },
};

export const repeat: NodeSpec = {
  typeId: "repeat",
  displayName: "Repeat",
  inputs: {
    value: { type: "string" },
    count: { type: "number" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return {
      result: (inputs.value as string).repeat(inputs.count as number),
    };
  },
};

export const reverse: NodeSpec = {
  typeId: "reverse",
  displayName: "Reverse",
  inputs: {
    value: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    return {
      result: [...(inputs.value as string)].reverse().join(""),
    };
  },
};

export const isEmpty: NodeSpec = {
  typeId: "isEmpty",
  displayName: "Is Empty",
  inputs: {
    value: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["text", "compare"],
  execute: (inputs) => {
    return { result: (inputs.value as string).length === 0 };
  },
};

export const isBlank: NodeSpec = {
  typeId: "isBlank",
  displayName: "Is Blank",
  inputs: {
    value: { type: "string" },
  },
  outputs: { result: { type: "boolean" } },
  group: ["text", "compare"],
  execute: (inputs) => {
    return { result: (inputs.value as string).trim().length === 0 };
  },
};

export const replaceAll: NodeSpec = {
  typeId: "replaceAll",
  displayName: "Replace All",
  inputs: {
    value: { type: "string" },
    search: { type: "string" },
    replacement: { type: "string" },
  },
  outputs: { result: { type: "string" } },
  group: ["text", "basic"],
  execute: (inputs) => {
    const value = inputs.value as string;
    const search = inputs.search as string;
    const replacement = inputs.replacement as string;
    return { result: value.split(search).join(replacement) };
  },
};

export const textSliceNodes: NodeSpecRegistry = {
  [endsWith.typeId]: endsWith,
  [indexOf.typeId]: indexOf,
  [substring.typeId]: substring,
  [left.typeId]: left,
  [right.typeId]: right,
  [padStart.typeId]: padStart,
  [padEnd.typeId]: padEnd,
  [repeat.typeId]: repeat,
  [reverse.typeId]: reverse,
  [isEmpty.typeId]: isEmpty,
  [isBlank.typeId]: isBlank,
  [replaceAll.typeId]: replaceAll,
};
