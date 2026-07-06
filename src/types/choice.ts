import { defineType } from "@nodish/core";
import { STRING_DROPDOWN_WIDGET_ID } from "./string";

export const choice = defineType({
  id: "choice",
  label: "Choice",
  color: "#f472b6",
  validate: (value) => typeof value === "string",
  defaultValue: "",
  widget: { kind: "custom", componentId: STRING_DROPDOWN_WIDGET_ID },
  accepts: (from) => from === "string" || from === "choice",
});

export type ChoiceType = string;
