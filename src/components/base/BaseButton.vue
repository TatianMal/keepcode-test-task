<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, computed } from 'vue'

import { ButtonTypes } from '@/components/base/types'

interface IProps {
  type: ButtonTypes
  disabled?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  disabled: false
})

const mapTypesClasses = {
  [ButtonTypes.PRIMARY]: 'primary-action-btn',
  [ButtonTypes.SECONDARY]: 'secondary-action-btn'
}
const btnClass = computed(() => {
  return mapTypesClasses[props.type]
})

interface IEmits {
  (event: 'onClick', value: Event): void
}
defineEmits<IEmits>()
</script>

<template>
  <button :class="btnClass" :disabled="disabled" @click.stop="$emit('onClick', $event)">
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

  cursor: pointer;
}

.primary-action-btn {
  background-color: var(--yellow);
  color: var(--white);
}

.secondary-action-btn {
  background-color: var(--dark-grey);
  color: var(--white);
}
.secondary-action-btn:disabled {
  background-color: var(--color-disabled);
}
</style>
