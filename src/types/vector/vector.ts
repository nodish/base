import { defineType } from "@nodish/core";

export const VECTOR_WIDGET_ID = "vector";

export const vector = defineType({
  id: "vector",
  label: "Vector",
  color: "#c4b5fd",
  validate: (value) =>
    Array.isArray(value) &&
    value.every((n) => typeof n === "number" && !Number.isNaN(n)),
  defaultValue: [],
  widget: { kind: "custom", componentId: VECTOR_WIDGET_ID },
  format: (value) => {
    if (!Array.isArray(value)) return "[]";
    return `[${value.join(", ")}]`;
  },
});

export type VectorType = number[];
