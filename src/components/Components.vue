<template>
  <div>
    <h1>{{ value }}</h1>
  </div>
</template>

<script lang="ts">
import { useTest } from "./hooks";
export default {
  setup() {
    const { value } = useTest();
    return {
      value,
    };
  },
};
</script>

<style>
</style>