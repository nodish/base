import { defineType } from "@nodish/core";

export const string = defineType({
  id: "string",
  label: "String",
  color: "#f472b6",
  validate: (value) => typeof value === "string",
  defaultValue: "",
  widget: { kind: "text", rows: 3 },
});

export type StringType = string;
