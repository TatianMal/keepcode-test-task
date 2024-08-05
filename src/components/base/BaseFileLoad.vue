<script setup lang="ts">
import { defineEmits, ref } from 'vue'

import IconPlus from '@/components/icons/IconPlus.vue'

const fileUploaded = ref<File | null>()

const accept = ['.jpg', '.doc', '.pdf', '.xml'].join(',')

const emitFile = (ev: Event) => {
  const target = ev.target as HTMLInputElement
  if (target && target.files) {
    emit('fileUpload', target.files[0])
  }
}
interface IEmits {
  (event: 'fileUpload', file: File): void
}
const emit = defineEmits<IEmits>()
</script>

<template>
  <div class="file-load">
    <IconPlus class="file-load__icon" />
    <div>Загрузить файл</div>
    <div class="file-load__action">
      <label class="file-load-manual">
        <span class="file-load-manual__title">Выберите файл</span>
        <input
          ref="fileUploaded"
          type="file"
          name="file_name"
          :accept="accept"
          class="file-load-manual__input"
          @change="emitFile"
        />
      </label>
      <span> или перетащите его сюда</span>
    </div>
  </div>
</template>

<style scoped>
.file-load {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 0;
  padding: 25px;
  background-color: var(--light-grey);
  border: 1px solid var(--grey);
  border-radius: 10px;
  box-shadow: 0px 4px 5px 0px var(--color-shadow);
  color: var(--dark-blue);

  font-size: 18px;
  line-height: 21.6px;
  font-weight: 400;
}

.file-load__icon {
  margin-bottom: 10px;
}

.file-load__action {
  color: var(--dark-grey);
}

.file-load-manual {
  text-decoration: underline;
}

.file-load-manual:active {
  color: var(--dark-blue);
}

@media (hover: hover) {
  .file-load-manual:hover {
    color: var(--blue);
  }
}
.file-load-manual__input {
  display: none;
}
</style>
