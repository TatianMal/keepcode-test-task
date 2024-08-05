<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface IProps {
  name: string
  required?: boolean
}
withDefaults(defineProps<IProps>(), {
  required: false
})
const model = defineModel()
</script>

<template>
  <div>
    <!-- <label for="dateStart">Не выбрано</label> -->
    <input v-model="model" type="date" :name="name" />
  </div>
</template>

<style scoped></style>
