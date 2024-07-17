<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'
import BaseInfoItem from '@/components/base/BaseInfoItem.vue'

import IconEdit from '@/components/icons/IconEdit.vue'
import IconBin from '@/components/icons/IconBin.vue'

import BaseStatus from '@/components/base/BaseStatus.vue'
</script>

<template>
  <BaseCard>
    <article class="user-info">
      <div class="general-info">
        <img src="@/assets/img/avatar_student.png" alt="av" class="general-info__avatar" />
        <h1 class="general-info__name">Абрамова Екатерина</h1>
        <img src="@/assets/img/gender_female.svg" class="general-info__gender" />
        <div class="general-info-social">
          <div class="general-info-social__icons">
            <img src="@/assets/img/icon_telegram.svg" width="25px" alt="icon telegram" />
            <img src="@/assets/img/icon_whatsapp.svg" width="25px" alt="icon whatsapp" />
            <img src="@/assets/img/icon_viber.svg" width="25px" alt="icon viber" />
          </div>
          <a href="#">Комментарии</a>
        </div>
      </div>
      <BaseInfoItem class="status">
        <template #label>Статус</template>
        <template #value>
          <BaseStatus :success="true">Активен</BaseStatus>
        </template>
      </BaseInfoItem>
      <div class="personal-info">
        <BaseInfoItem>
          <template #label>Телефон</template>
          <template #value>8-900-000-00-00</template>
        </BaseInfoItem>
        <BaseInfoItem>
          <template #label>Телефон родителей</template>
          <template #value>8-900-000-00-00</template>
        </BaseInfoItem>
        <BaseInfoItem>
          <template #label>Дата рождения</template>
          <template #value>25.04.2004 (17 лет)</template>
        </BaseInfoItem>
        <BaseInfoItem>
          <template #label>Адрес</template>
          <template #value>г. Краснодар, ул. Советская 24, кв. 208</template>
        </BaseInfoItem>
      </div>
      <div class="actions">
        <IconEdit />
        <IconBin />
      </div>
    </article>
  </BaseCard>
</template>

<style scoped>
.user-info {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.general-info {
  display: grid;
  grid-template-columns: 112px 1fr 12px;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
}

.general-info__avatar {
  grid-column: 1/2;
  grid-row: 1/3;
}
.general-info__name {
  grid-column: 2/3;
  grid-row: 1/2;
}
.general-info__gender {
  grid-column: 3/4;
  grid-row: 1/3;
  align-self: start;
  justify-self: center;
}
.general-info-social {
  grid-column: 2/4;
  grid-row: 2/3;

  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;

  font-size: 18px;
  line-height: 21.6px;
}
.general-info-social__icons {
  display: flex;
  flex-direction: row;
  gap: 0 10px;
}

.status {
  align-self: end;
}

.personal-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 21px 144px;
}

.actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: var(--dark-grey);
}
</style>
