import { defineType } from "@nodish/core";

export const STRING_DROPDOWN_WIDGET_ID = "string-dropdown";

export const string = defineType({
  id: "string",
  label: "String",
  color: "#f472b6",
  validate: (value) => typeof value === "string",
  defaultValue: "",
  accepts: (from) => from === "string" || from === "choice",
  widgets: {
    default: { kind: "text", rows: 1 },
    dropdown: { kind: "custom", componentId: STRING_DROPDOWN_WIDGET_ID },
  },
});

export type StringType = string;
