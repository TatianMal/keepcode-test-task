<script setup lang="ts">
import { defineEmits } from 'vue'

import StudentDocument from '@/components/student/StudentDocument.vue'

interface IEmits {
  (event: 'createNewDoc'): void
}
defineEmits<IEmits>()
</script>

<template>
  <article class="document-info">
    <section class="document-info__actions">
      <section class="filter-list">
        <div class="filter">Тип документа Не выбрано Договор Справка Анкета</div>
        <div class="filter">Статус Не выбрано Заключен Расторгнут</div>
        <div class="filter">Сортировать по Дате Типу документа</div>
      </section>
      <button class="primary-action-btn" @click="$emit('createNewDoc')">добавить документ</button>
    </section>
    <section class="doc-list">
      <StudentDocument class="doc-list__item" />
      <StudentDocument class="doc-list__item" />
      <StudentDocument class="doc-list__item" />
      <StudentDocument class="doc-list__item" />
      <StudentDocument class="doc-list__item" />
    </section>
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
