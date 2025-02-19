<script setup lang="ts">
import { onBeforeMount, ref, type Ref, computed } from 'vue'

import BaseModal from '@/components/base/BaseModal.vue'

import StudentDocument from '@/components/student/StudentDocument.vue'
import StudentDocumentCreate from '@/components/student/StudentDocumentCreate.vue'
import BaseButton from '@/components/base/BaseButton.vue'

import { ButtonTypes } from '@/components/base/types'
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
  closeModal()
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
const closeModal = () => {
  modal.value?.close()
}
</script>

<template>
  <article class="document-info">
    <section class="document-info__actions">
      <section class="filter-list">
        <div class="filter">
          <span class="filter-label">Тип документа</span>
          <v-select
            v-model="filters.type"
            :reduce="reducer"
            :options="docTypes"
            label="label"
            placeholder="Не выбрано"
          ></v-select>
        </div>
        <div class="filter">
          <span class="filter-label">Статус</span>
          <v-select
            v-model="filters.status"
            :reduce="reducer"
            :options="docStatuses"
            label="label"
            placeholder="Не выбрано"
          ></v-select>
        </div>
        <div class="filter">
          <span class="filter-label">Сортировать по</span>
          <v-select :value="filters.sort" label="label" :options="sortOptions" disabled></v-select>
        </div>
      </section>
      <BaseButton :type="ButtonTypes.PRIMARY" @click="showModal">добавить документ</BaseButton>
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
        <StudentDocumentCreate
          @onNewDocument="createAndAddDocument($event)"
          @cancelCreatingDocument="closeModal"
        />
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

.filter-label {
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  color: var(--color-text-secondary);
}

.doc-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fit, max-content);
  gap: 28px;
}
</style>
