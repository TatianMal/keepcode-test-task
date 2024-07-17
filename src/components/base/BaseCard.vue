<script setup lang="ts"></script>

<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  background-color: var(--white);
  padding: 20px;
  border-radius: 10px;

  box-shadow: 0 4px 5px var(--color-shadow);
}
</style>
