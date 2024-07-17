<script setup lang="ts">
import { ref } from 'vue'

import BaseModal from '@/components/base/BaseModal.vue'
import IconDelete from '@/components/icons/IconDelete.vue'

import StudentInfo from '@/components/student/StudentInfo.vue'
import StudentDocumentList from '@/components/student/StudentDocumentList.vue'
import StudentDocumentCreate from '@/components/student/StudentDocumentCreate.vue'

const modal = ref<InstanceType<typeof BaseModal>>()

const showModal = () => {
  modal.value?.show()
}
</script>

<template>
  <div class="user-students">
    <StudentInfo />
    <StudentDocumentList @createNewDoc="showModal" />

    <BaseModal ref="modal">
      <template #title>Добавить документ</template>
      <template #content>
        <StudentDocumentCreate />
      </template>
    </BaseModal>
  </div>
</template>

<style scoped>
.user-students {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 90px 0;
}
</style>
