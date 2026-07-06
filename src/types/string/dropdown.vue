<script setup lang="ts">
import type { Port, PortTypeDefinition } from "@nodish/core";
import { computed } from "vue";

const props = defineProps<{
  port: Port;
  typeDef?: PortTypeDefinition;
  placeholder: string;
}>();

const emit = defineEmits<{
  "update:value": [value: unknown];
  commit: [];
}>();

function parseOptions(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((item): item is string => typeof item === "string");
}

const options = computed(() => parseOptions(props.port.customProps?.options));

const selected = computed(() => {
  const value = props.port.value;
  if (typeof value === "string") return value;
  return options.value[0] ?? "";
});

const displayOptions = computed(() => {
  const opts = options.value;
  const value = selected.value;
  if (value && !opts.includes(value)) {
    return [value, ...opts];
  }
  return opts;
});

const emptyTitle =
  "No options configured (set customProps.options on this port)";

function onChange(ev: Event) {
  emit("update:value", (ev.target as HTMLSelectElement).value);
  emit("commit");
}
</script>

<template>
  <select
    class="dropdown"
    :title="options.length === 0 ? emptyTitle : port.name"
    :disabled="options.length === 0"
    :value="selected"
    @pointerdown.stop
    @change="onChange"
  >
    <option v-if="options.length === 0" value="" disabled>No options</option>
    <option v-for="option in displayOptions" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<style scoped>
.dropdown {
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0 4px;
  height: 20px;
  border: 1px solid #3a3f4b;
  border-radius: 3px;
  background: #1e2128;
  color: #ffffff;
  font: inherit;
  cursor: pointer;
}
.dropdown:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
