<script setup lang="ts"></script>

<template>
  <div class="base-info-item">
    <div class="base-info-item__label"><slot name="label"></slot></div>
    <div class="base-info-item__value"><slot name="value"></slot></div>
  </div>
</template>

<style scoped>
.base-info-item {
  display: flex;
  flex-direction: column;
  gap: 2px 0;
}

.base-info-item__label {
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  color: var(--color-text-secondary);
}

.base-info-item__value {
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  color: var(--color-text-primary);
}
</style>
