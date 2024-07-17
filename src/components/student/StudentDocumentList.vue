<script setup lang="ts">
import { defineEmits, onBeforeMount, ref } from 'vue'

import BaseModal from '@/components/base/BaseModal.vue'

import StudentDocument from '@/components/student/StudentDocument.vue'
import StudentDocumentCreate from '@/components/student/StudentDocumentCreate.vue'

import type { StudentDocument as StudentDocumentModel } from '@/api/models/StudentDocument'
import { useStudentDocuments } from '@/components/student/composables'

const { getDocuments, createDocument } = useStudentDocuments()
const documents = ref<Array<StudentDocumentModel>>([])
// отдельный ref для ускорения разработки - computed?
const filteredDocuments = ref<Array<StudentDocumentModel>>([])
onBeforeMount(async () => {
  try {
    documents.value = await getDocuments()
    filteredDocuments.value = [...documents.value]
  } catch (error) {
    console.error(error)
  }
})

const createAndAddDocument = async (body: any) => {
  try {
    const newDoc = await createDocument(body)
    documents.value.push(newDoc)
    filteredDocuments.value = [...documents.value]
  } catch (error) {
    console.error(error)
  }
}

const modal = ref<InstanceType<typeof BaseModal>>()
const showModal = () => {
  modal.value?.show()
}
</script>

<template>
  <article class="document-info">
    <section class="document-info__actions">
      <section class="filter-list">
        <div class="filter">Тип документа Не выбрано Договор Справка Анкета</div>
        <div class="filter">Статус Не выбрано Заключен Расторгнут</div>
        <div class="filter">Сортировать по Дате Типу документа</div>
      </section>
      <button class="primary-action-btn" @click="showModal">добавить документ</button>
    </section>
    <section class="doc-list">
      <StudentDocument
        v-for="doc in filteredDocuments"
        :key="doc.id"
        :document="doc"
        class="doc-list__item"
      />
    </section>
    <BaseModal ref="modal">
      <template #title>Добавить документ</template>
      <template #content>
        <StudentDocumentCreate @onNewDocument="createAndAddDocument($event)" />
      </template>
    </BaseModal>
  </article>
</template>

<style scoped>
.document-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.document-info__actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.filter-list {
  display: flex;
  flex-direction: row;
  gap: 164px;
}

.doc-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fit, max-content);
  gap: 28px;
}
</style>
