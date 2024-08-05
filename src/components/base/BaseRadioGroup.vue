<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'

import { type RadioOption } from '@/components/base/types'

interface IProps {
  options: RadioOption[]
  title?: string
  name: string
  placeholder: string
  required: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  required: false
})

const labelClasses = computed(() => {
  const res = ['radio-legend']
  if (props.required) {
    res.push('required-field')
  }
  return res
})
const model = defineModel()
</script>

<template>
  <fieldset class="radio-set">
    <legend class="visually-hidden">{{ placeholder }}</legend>
    <span :class="labelClasses">
      {{ placeholder }}
    </span>
    <div class="radio-container">
      <label v-for="item in options" :key="item.value" class="radio-label">
        <input v-model="model" class="radio" type="radio" :name="name" :value="item.value" />
        <span class="radio-title">{{ item.label }}</span>
      </label>
    </div>
  </fieldset>
</template>

<style scoped>
.radio-set {
  display: flex;
  flex-direction: row;
  gap: 0 16px;
}

.radio-legend {
  display: inline-block !important;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
}

.radio-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.radio-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.radio {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 0;
}

.radio-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  border: 1px solid var(--grey);
  border-radius: 50%;
  transition: background-color 0.3;
}

.radio:checked + .radio-title::before {
  background: radial-gradient(
    circle,
    var(--blue) 0%,
    var(--blue) 40%,
    transparent 50%,
    transparent 100%
  );
}
</style>
