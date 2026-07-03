import { defineType } from "@nodish/core";
export const BOOLEAN_WIDGET_ID = "boolean";
export const boolean = defineType({
  id: "boolean",
  label: "Boolean",
  color: "#86efac",
  validate: (value) => typeof value === "boolean",
  defaultValue: false,
  widget: { kind: "custom", componentId: BOOLEAN_WIDGET_ID },
  coerce: (value) => value === true,
  format: (value) => (value === true ? "true" : "false"),
});
