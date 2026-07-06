<script setup lang="ts">
import type { Port, PortTypeDefinition } from "@nodish/core";
import { computed } from "vue";

const props = defineProps<{
  port: Port;
  typeDef?: PortTypeDefinition;
  placeholder: string;
}>();

const display = computed(() => {
  const value = props.port.value;
  if (!Array.isArray(value)) return "[]";
  return `[${value.join(", ")}]`;
});
</script>

<template>
  <span class="vector" :title="display">{{ display }}</span>
</template>

<style scoped>
.vector {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-variant-numeric: tabular-nums;
  color: #c4b5fd;
}
</style>
