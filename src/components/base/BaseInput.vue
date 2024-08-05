<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'

interface IProps {
  title: string
  placeholder?: string
  name: string
  required?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  required: false,
  placeholder: ''
})
const model = defineModel()

const labelClasses = computed(() => {
  const res = ['form__label']
  if (props.required) {
    res.push('required-field')
  }
  return res
})
</script>

<template>
  <label class="form__item">
    <input class="form__field" v-model="model" :name="name" :placeholder="placeholder" />
    <span :class="labelClasses">{{ title }}</span>
  </label>
</template>

<style scoped>
.form__item {
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 16px;
}

.form__field {
  width: 100%;
  padding: 10px 0;

  -webkit-appearance: none;
  appearance: none;

  border: 0;
  border-bottom: 1px solid var(--grey);
  outline: 0;
  color: var(--color-text-primary);
  background: transparent;
  transition: border-color 0.2s;

  font-size: 18px;
  line-height: 21.6px;
  font-weight: 400;
  color: var(--color-text-primary);
}

.form__field::placeholder {
  opacity: 0;
  transition: opacity 0.3s;
}

.form__field:focus-within::placeholder,
.form__field:focus::placeholder {
  opacity: 1;
}

.form__field:focus-visible,
.form__field:focus {
  border-color: var(--blue);
  outline: none;
}

.form__field:not(:placeholder-shown) + .form__label,
.form__field:focus-visible + .form__label,
.form__field:focus + .form__label {
  transform: translate(0, -20px);
  font-size: 14px;
  cursor: pointer;
}

.form__label {
  position: absolute;
  bottom: 12px;
  font-weight: inherit;
  font-size: inherit;
  color: var(--dark-grey);
  transition: all 0.3s;
}
</style>
