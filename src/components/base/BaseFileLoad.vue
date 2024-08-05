<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
</script>

<template>
  <div class="file-load">
    <IconPlus />
    <div>Загрузить файл</div>
    <div>Выберите файл или перетащите его сюда</div>
  </div>
</template>

<style scoped>
.file-load {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: var(--light-grey);
  border: 1px solid var(--grey);
  box-shadow: 0px 4px 5px 0px var(--color-shadow);
}
</style>
