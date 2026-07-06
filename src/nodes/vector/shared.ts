import type { IOSpec } from "@nodish/core";

export const MAX_VECTOR_DIMENSION = 16;
export const DEFAULT_VECTOR_DIMENSION = 3;

export function componentName(index: number): string {
  return `v${index + 1}`;
}

export function clampDimension(value: unknown): number {
  const n = Math.floor(Number(value));
  if (Number.isNaN(n)) return DEFAULT_VECTOR_DIMENSION;
  return Math.max(1, Math.min(MAX_VECTOR_DIMENSION, n));
}

export function assertSameLength(
  a: number[],
  b: number[],
  label: string,
): void {
  if (a.length !== b.length) {
    throw new Error(`${label}: vectors must have the same length`);
  }
}

export function vectorLength(v: number[]): number {
  return Math.hypot(...v);
}

export function buildComponentInputs(dimension: number): IOSpec {
  const inputs: IOSpec = {
    dimension: {
      type: "number",
      userOnly: true,
      defaultValue: DEFAULT_VECTOR_DIMENSION,
    },
  };
  for (let i = 0; i < dimension; i++) {
    inputs[componentName(i)] = { type: "number", defaultValue: 0 };
  }
  return inputs;
}

export function buildComponentOutputs(dimension: number): IOSpec {
  const outputs: IOSpec = {};
  for (let i = 0; i < dimension; i++) {
    outputs[componentName(i)] = { type: "number" };
  }
  return outputs;
}

export function readComponents(
  inputs: Record<string, unknown>,
  dimension: number,
): number[] {
  const components: number[] = [];
  for (let i = 0; i < dimension; i++) {
    components.push((inputs[componentName(i)] as number) ?? 0);
  }
  return components;
}

export function writeComponents(
  vector: number[],
  dimension: number,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (let i = 0; i < dimension; i++) {
    result[componentName(i)] = vector[i] ?? 0;
  }
  return result;
}
