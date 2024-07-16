<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'

import IconPrinter from '@/components/icons/IconPrinter.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconBin from '@/components/icons/IconBin.vue'

import IconFileDoc from '@/components/icons/file/IconFileDoc.vue'
import IconFileJpg from '@/components/icons/file/IconFileJpg.vue'
import IconFilePdf from '@/components/icons/file/IconFilePdf.vue'
import IconFileXls from '@/components/icons/file/IconFileXls.vue'
</script>

<template>
  <BaseCard class="student-document-wrapper">
    <section class="student-document">
      <h2 class="student-document__name">Договор №001</h2>
      <div class="student-document__status">Заключен</div>
      <!-- // component -->
      <div class="student-document__dates">04.07.2021 - 04.07.2022</div>
      <!-- // time?? -->
      <div class="student-document__actions">
        <IconPrinter />
        <IconEdit />
        <IconBin />
      </div>
    </section>

    <div class="doc-type">
      <IconFilePdf />
    </div>
  </BaseCard>
</template>

<style scoped>
.student-document-wrapper {
  max-width: 378px;

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
}
.student-document__dates {
  grid-row: 3/4;
}
.student-document__actions {
  grid-row: 4/5;
}

.doc-type {
  background-color: var(--light-grey);
  border-radius: 10px;
  padding: 30px;
}
</style>
