<script setup lang="ts">
import { defineEmits, ref } from 'vue'

import IconPlus from '@/components/icons/IconPlus.vue'

import { DocumentExtension } from '@/api/models/DocumentExtension'
import { StudentDocumentType } from '@/api/models/StudentDocumentType'

const getNewDocument = () => {
  const res = new FormData()
  res.set('name', 'Документ каст') // name + number
  res.set('type', StudentDocumentType.CONTRACT)
  res.set('dateStart', '14.07.2024')
  res.set('dateEnd', '14.07.2025')
  res.set('ext', DocumentExtension.PDF)
  return res
}

interface IEmits {
  (event: 'onNewDocument', body: any): void
}
defineEmits<IEmits>()
</script>

<template>
  <article class="student-document-create">
    <form action="" class="student-document-create__form">
      <fieldset class="radio-set">
        <legend class="visually-hidden">Тип документа:</legend>
        <span class="radio-legend" aria-hidden="true"
          >Тип документа:&nbsp;<span class="required-field">*</span></span
        >
        <div class="radio-container">
          <label class="radio-label">
            <input class="radio" type="radio" name="browser" value="ie" id="ie" />
            <span class="radio-title">Договор</span>
          </label>
          <label class="radio-label">
            <input class="radio" type="radio" name="browser" value="opera" id="opera" />
            <span class="radio-title">Справка</span>
          </label>
          <label class="radio-label">
            <input class="radio" type="radio" name="browser" value="firefox" id="firefox" />
            <span class="radio-title">Другое</span>
          </label>
        </div>
      </fieldset>
      <div>
        <label for="name">Название документа&nbsp;<span class="required-field">*</span></label>
        <input type="text" name="name" id="name" required class="input" />
      </div>
      <div>
        <label for="number">Номер</label>
        <input type="text" name="number" id="number" required class="input" />
      </div>
      <fieldset class="date-set">
        <legend class="visually-hidden">Действует с:</legend>
        <span class="date-legend" aria-hidden="true">
          Действует с:&nbsp;<span class="required-field">*</span>
        </span>
        <div>
          <label for="name">Не выбрано</label>
          <input type="date" name="name" id="name" />
        </div>
        <span class="date-legend" aria-hidden="true">по:</span>
        <div>
          <label for="name">Не выбрано</label>
          <input type="date" name="name" id="name" />
        </div>
      </fieldset>

      <div>
        <label for="name">
          <input type="checkbox" name="name" id="name" class="checkbox" />
          <span class="checkbox-title">Оповещать об окончании</span>
        </label>
        <label for="name">
          <input type="checkbox" name="name" id="name" class="checkbox" />
          <span class="checkbox-title">Создавать задачу при окончании</span>
        </label>
      </div>

      <div class="file-load">
        <IconPlus />
        <div>Загрузить файл</div>
        <div>Выберите файл или перетащите его сюда</div>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
      </div>
    </form>
    <footer class="student-document-create__actions">
      <button class="primary-action-btn" @click="$emit('onNewDocument', getNewDocument())">
        Добавить документ
      </button>
      <button class="secondary-action-btn">отмена</button>
    </footer>
  </article>
</template>

<style scoped>
.student-document-create {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.student-document-create__actions {
  display: flex;
  flex-direction: row;
  gap: 28px;
}

.student-document-create__form {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.required-field {
  color: var(--color-required);
}

fieldset {
  border: none;
  margin: 0;
  padding: 0;
}
.visually-hidden {
  position: absolute;
  margin: -1px;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  width: 1px;
  height: 1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
}

.radio-set {
  display: flex;
  flex-direction: row;
  gap: 0 16px;
}

.input-title,
.radio-legend,
.date-legend {
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
}

.radio-container {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.radio-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.radio {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 0;
}

.radio-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  border: 1px solid var(--grey);
  border-radius: 50%;
}

.radio:checked + .radio-title::before {
  background: radial-gradient(
    circle,
    var(--blue) 0%,
    var(--blue) 40%,
    transparent 50%,
    transparent 100%
  );
}

.input {
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--grey);
  padding: 10px 15px;
  background-color: transparent;
  color: var(--dark-blue);
  font-family: inherit;
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 400;

  transition: 0.4s;
}

.input:focus {
  border: none;
  border-bottom: 1px solid var(--dark-blue);

  outline: none;
}

.checkbox-title {
  display: inline-block;
}
.checkbox {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 0;
}

.checkbox-title::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid var(--grey);
}

input[type='checkbox']:checked + .checkbox-title::before {
  transform: scale(1);
  background: radial-gradient(
    circle,
    var(--blue) 0%,
    var(--blue) 40%,
    transparent 50%,
    transparent 100%
  );
}

.file-load {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: var(--light-grey);
}
</style>
