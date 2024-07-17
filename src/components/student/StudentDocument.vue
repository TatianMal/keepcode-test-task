<script setup lang="ts">
import { defineProps, computed } from 'vue'

import BaseCard from '@/components/base/BaseCard.vue'
import BaseStatus from '@/components/base/BaseStatus.vue'

import IconPrinter from '@/components/icons/IconPrinter.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconBin from '@/components/icons/IconBin.vue'

import IconFileDoc from '@/components/icons/file/IconFileDoc.vue'
import IconFileJpg from '@/components/icons/file/IconFileJpg.vue'
import IconFilePdf from '@/components/icons/file/IconFilePdf.vue'
import IconFileXls from '@/components/icons/file/IconFileXls.vue'

import type { StudentDocument } from '@/api/models/StudentDocument'
import { DocumentExtension } from '@/api/models/DocumentExtension'
import { StudentDocumentStatus } from '@/api/models/StudentDocumentStatus'

interface IProps {
  document: StudentDocument
}
const props = defineProps<IProps>()

const mapExtToComponent = {
  [DocumentExtension.DOC]: IconFileDoc,
  [DocumentExtension.JPG]: IconFileJpg,
  [DocumentExtension.PDF]: IconFilePdf,
  [DocumentExtension.XLS]: IconFileXls
}
const fileComponent = computed(() => {
  return mapExtToComponent[props.document.ext]
})

const dates = computed(() => {
  return props.document.dateEnd
    ? `${props.document.dateStart} - ${props.document.dateEnd}`
    : props.document.dateStart
})

const mapStatuses = {
  [StudentDocumentStatus.CONCLUDED]: {
    label: 'Заключен',
    isSuccess: true
  },
  [StudentDocumentStatus.TERMINATED]: {
    label: 'Расторгнут',
    isSuccess: false
  }
}
const currentStatus = computed(() => {
  return props.document.status ? mapStatuses[props.document.status] : null
})
</script>

<template>
  <BaseCard class="student-document-wrapper">
    <section class="student-document">
      <h2 class="student-document__name">{{ document.name }}</h2>
      <div>
        <BaseStatus
          v-if="document.status"
          :success="currentStatus?.isSuccess"
          class="student-document__status"
          >{{ currentStatus?.label }}</BaseStatus
        >
      </div>
      <div class="student-document__dates">{{ dates }}</div>
      <div class="student-document__actions">
        <IconPrinter />
        <IconEdit />
        <IconBin />
      </div>
    </section>

    <div class="doc-type">
      <component :is="fileComponent" />
    </div>
  </BaseCard>
</template>

<style scoped>
.student-document-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.student-document {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(1fr, min-content) minmax(1fr, min-content) minmax(1fr, min-content) 1fr;
  gap: 4px;
}

.student-document__name {
  grid-row: 1/2;
}
.student-document__status {
  grid-row: 2/3;

  font-size: 18px;
  line-height: 21.6px;
}
.student-document__dates {
  grid-row: 3/4;
  font-size: 18px;
  line-height: 21.6px;
  color: var(--color-text-secondary);
}
.student-document__actions {
  grid-row: 4/5;
  display: flex;
  flex-direction: row;
  gap: 0 30px;

  color: var(--dark-grey);
}

.doc-type {
  background-color: var(--light-grey);
  border-radius: 10px;
  padding: 30px;
}
</style>
