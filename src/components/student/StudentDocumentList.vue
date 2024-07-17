<script setup lang="ts">
import { defineEmits, onBeforeMount, ref, type Ref, computed } from 'vue'

import BaseModal from '@/components/base/BaseModal.vue'

import StudentDocument from '@/components/student/StudentDocument.vue'
import StudentDocumentCreate from '@/components/student/StudentDocumentCreate.vue'

import type { StudentDocument as StudentDocumentModel } from '@/api/models/StudentDocument'
import { useStudentDocuments } from '@/components/student/composables'
import { StudentDocumentStatus } from '@/api/models/StudentDocumentStatus'
import { StudentDocumentType } from '@/api/models/StudentDocumentType'

const { getDocuments, createDocument } = useStudentDocuments()
const documents = ref<Array<StudentDocumentModel>>([])

onBeforeMount(async () => {
  try {
    documents.value = await getDocuments()
  } catch (error) {
    console.error(error)
  }
})

const createAndAddDocument = async (body: any) => {
  try {
    const newDoc = await createDocument(body)
    documents.value.push(newDoc)
  } catch (error) {
    console.error(error)
  }
}

const docTypes = [
  {
    label: 'Договор',
    value: StudentDocumentType.CONTRACT
  },
  {
    label: 'Справка',
    value: StudentDocumentType.ENQUIRY
  },
  {
    label: 'Другое',
    value: StudentDocumentType.OTHER
  }
]

const docStatuses = [
  {
    label: 'Заключен',
    value: StudentDocumentStatus.CONCLUDED
  },
  {
    label: 'Расторгнут',
    value: StudentDocumentStatus.TERMINATED
  }
]

const sortOptions = [{ value: 'date', label: 'Дате' }]

const filters: Ref<Record<string, string | undefined>> = ref({
  type: undefined,
  status: undefined,
  sort: sortOptions[0].value
})

const reducer = (type: (typeof sortOptions)[0]) => type.value

const filteredDocuments = computed<Array<StudentDocumentModel>>(() => {
  if (documents.value.length === 0) {
    return []
  }
  let res = [...documents.value]
  if (filters.value.type) {
    res = res.filter((doc) => doc.type === filters.value.type)
  }
  if (filters.value.status) {
    res = res.filter((doc) => doc.status === filters.value.status)
  }
  return res
})

const modal = ref<InstanceType<typeof BaseModal>>()
const showModal = () => {
  modal.value?.show()
}
</script>

<template>
  <article class="document-info">
    <section class="document-info__actions">
      <section class="filter-list">
        <div class="filter">
          Тип документа
          <v-select
            v-model="filters.type"
            label="label"
            :reduce="reducer"
            placeholder="Не выбрано"
            :options="docTypes"
          ></v-select>
        </div>
        <div class="filter">
          Статус
          <v-select
            v-model="filters.status"
            label="label"
            placeholder="Не выбрано"
            :options="docStatuses"
          ></v-select>
        </div>
        <div class="filter">
          Сортировать по
          <v-select :value="filters.sort" label="label" :options="sortOptions" disabled></v-select>
        </div>
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

.filter {
  display: flex;
  flex-direction: column;
  width: 100px;
}

.doc-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fit, max-content);
  gap: 28px;
}
</style>
