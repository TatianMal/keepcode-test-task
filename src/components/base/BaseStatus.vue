<script setup lang="ts">
import { defineProps } from 'vue'

interface IProps {
  success?: boolean
}
defineProps<IProps>()
</script>

<template>
  <div :class="['base-status', { success: success }]"><slot /></div>
</template>

<style scoped>
.base-status {
  display: block;
}

.base-status::before {
  content: '';
  display: inline-block;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  background-color: var(--orange);
}
.base-status.success::before {
  background-color: var(--green);
}
</style>
