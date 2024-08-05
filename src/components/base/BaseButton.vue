<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'

import { ButtonTypes } from '@/components/base/types'

interface IProps {
  type: ButtonTypes
  disabled: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  disabled: false
})

const mapTypesClasses = {
  [ButtonTypes.PRIMARY]: 'primary-action-btn',
  [ButtonTypes.SECONDARY]: 'primary-action-btn'
}
const btnClass = computed(() => {
  return mapTypesClasses[props.type]
})
</script>

<template>
  <button :class="btnClass" :disabled="disabled" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<style scoped>
button {
  min-width: 220px;
  padding: 17px 24px;
  border: none;
  border-radius: 10px;

  text-transform: uppercase;
  font-weight: 800;
  font-size: 16px;
  line-height: 19.2px;
}

.primary-action-btn {
  background-color: var(--yellow);
  color: var(--white);
}

.secondary-action-btn {
  background-color: var(--light-blue);
  color: var(--white);
}
.secondary-action-btn:disabled {
  background-color: var(--grey);
}
</style>
