<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'

interface IProps {
  label: string
  name: string
  required?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  required: false
})
const model = defineModel()

const labelClasses = computed(() => {
  const res = ['checkbox-title']
  if (props.required) {
    res.push('required-field')
  }
  return res
})
</script>

<template>
  <label class="checkbox">
    <input type="checkbox" v-model="model" :name="name" class="checkbox-input" />
    <span :class="labelClasses">{{ label }}</span>
  </label>
</template>

<style scoped>
.checkbox {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox-title {
  padding-left: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
}

.checkbox-input {
  appearance: none;
  position: relative;
  box-sizing: border-box;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  background: var(--white);
  border: 1px solid var(--grey);
  transition: background-color 0.2;
}

.checkbox-input::after {
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;
  box-sizing: border-box;
  background-image: url('@/assets/img/checkbox.svg');
  background-repeat: no-repeat;
  overflow: hidden;
}

.checkbox-input:checked {
  background-color: var(--blue);
  border: none;
}

.checkbox-input:checked::after {
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  top: 4px;
  left: 3px;
  background-size: 13px;
}

.checkbox-input:disabled {
  background: var(--color-disabled);
}

.checkbox-input:disabled::after {
  filter: grayscale(100%);
}
</style>
