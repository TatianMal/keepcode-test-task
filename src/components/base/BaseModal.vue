<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref, defineExpose } from 'vue'

import IconDelete from '@/components/icons/IconDelete.vue'

// interface IProps {
//   opened?: boolean,
// }
// withDefaults(defineProps<IProps>(), {
//   opened: false
// })

const visible = ref(false)

const dialog = ref<HTMLDialogElement>()
const showModal = () => {
  dialog.value?.showModal()
  visible.value = true
}
const closeModal = () => {
  dialog.value?.close()
  visible.value = false
}

interface IEmits {
  (event: 'closeDialog'): void
}
defineEmits<IEmits>()

defineExpose({
  show: showModal,
  close: closeModal
})
</script>

<template>
  <dialog ref="dialog" aria-label="Создание документа" class="base-modal" @close="visible = false">
    <section class="base-modal__header">
      <h1 class="title"><slot name="title" /></h1>
      <IconDelete @click="closeModal" />
    </section>
    <div v-if="visible" class="base-modal__content-wrapper">
      <slot name="content" />
    </div>
  </dialog>
</template>

<style scoped>
.base-modal {
  position: fixed;
  height: 900px;
  width: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  padding: 30px;
  background-color: var(--white);
  color: var(--color-text-primary);
  text-align: center;
  border-radius: 10px;
}

.base-modal::backdrop {
  background-color: var(--dark-blue);
  opacity: 50%;
}

.base-modal__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;
}

.base-modal__content-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
