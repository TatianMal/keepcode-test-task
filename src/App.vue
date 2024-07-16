<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import UserStudents from '@/components/pages/UserStudents.vue'
</script>

<template>
  <AppHeader class="header" />
  <AppNavigation class="navigation" />
  <main class="content">
    <UserStudents />
  </main>
</template>

<style>
#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 138px 1fr;
  grid-template-rows: 72px 1fr;
}

.header {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.navigation {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.content {
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  display: flex;
  padding: 26px 90px;
}
</style>
