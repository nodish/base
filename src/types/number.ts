import { defineType } from "@nodish/core";

export const number = defineType({
  id: "number",
  label: "Number",
  color: "#7dd3fc",
  validate: (value) => typeof value === "number" && !Number.isNaN(value),
  defaultValue: 0,
  widget: { kind: "number" },
});

export type NumberType = number;
