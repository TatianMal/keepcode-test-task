<script setup lang="ts">
import { defineEmits, ref } from 'vue'

import BaseInput from '@/components/base/BaseInput.vue'
import BaseRadioGroup from '@/components/base/BaseRadioGroup.vue'
import BaseFileLoad from '@/components/base/BaseFileLoad.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCalendar from '@/components/base/BaseCalendar.vue'

import { type RadioOption } from '@/components/base/types'
import { ButtonTypes } from '@/components/base/types'

import { DocumentExtension } from '@/api/models/DocumentExtension'
import { StudentDocumentType } from '@/api/models/StudentDocumentType'

const type = ref<string>(StudentDocumentType.CONTRACT)
const name = ref('')
const number = ref('')
const shouldNotifyEnd = ref(false)
const shouldCreateTaskEnd = ref(false)
const file = ref<File>()
const dateStart = ref<string>()
const dateEnd = ref<string>()

const getAPIDate = (date: Date) => {
  const day = date.getDate()
  const month = date.getMonth()
  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${date.getFullYear()}`
}

const getNewDocument = () => {
  const res = new FormData()
  res.set('name', `${name.value} ${number.value}`)
  res.set('type', type.value)
  res.set('ext', DocumentExtension.PDF)

  if (dateStart.value) {
    const dateStartFormatted = getAPIDate(new Date(dateStart.value))
    res.set('dateStart', dateStartFormatted)
  }
  if (dateEnd.value) {
    const dateEndFormatted = getAPIDate(new Date(dateEnd.value))
    res.set('dateEnd', dateEndFormatted)
  }
  return res
}

const radioOptions: RadioOption[] = [
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

interface IEmits {
  (event: 'onNewDocument', body: any): void
  (event: 'cancelCreatingDocument'): void
}
defineEmits<IEmits>()
</script>

<template>
  <article class="student-document-create">
    <form action="" class="student-document-create__form">
      <BaseRadioGroup
        v-model="type"
        :options="radioOptions"
        placeholder="Тип документа:"
        name="type"
        required
      >
      </BaseRadioGroup>
      <BaseInput v-model="name" title="Название документа" name="name" required> </BaseInput>
      <BaseInput v-model="number" title="Номер" name="number"> </BaseInput>

      <fieldset class="date-set">
        <legend class="visually-hidden">Действует с:</legend>
        <span class="date-legend">
          <span class="required-field">Действует с:</span>
        </span>
        <BaseCalendar v-model="dateStart" name="dateStart"></BaseCalendar>
        <span class="date-legend">по:</span>
        <BaseCalendar v-model="dateEnd" name="dateEnd"></BaseCalendar>
      </fieldset>

      <div class="settings">
        <BaseCheckbox v-model="shouldNotifyEnd" label="Оповещать об окончании" name="notifEnd" />
        <BaseCheckbox
          v-model="shouldCreateTaskEnd"
          label="Создавать задачу при окончании"
          name="createTaskEnd"
        />
      </div>
      <BaseFileLoad @fileUpload="($event) => (file = $event)" />
    </form>
    <footer class="student-document-create__actions">
      <BaseButton :type="ButtonTypes.PRIMARY" @onClick="$emit('onNewDocument', getNewDocument())">
        Добавить документ
      </BaseButton>
      <BaseButton :type="ButtonTypes.SECONDARY" @onClick="$emit('cancelCreatingDocument')"
        >отмена</BaseButton
      >
    </footer>
  </article>
</template>

<style scoped>
.student-document-create {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px 0;
  justify-content: space-between;
}

.student-document-create__actions {
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 28px;
}

.student-document-create__form {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.date-legend {
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
}

.date-set {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
