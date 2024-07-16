<script setup lang="ts">
import IconSettings from '@/components/icons/IconSettings.vue'
import IconLogOut from '@/components/icons/IconLogOut.vue'
</script>

<template>
  <header class="app-header">
    <nav class="breadcrumps">
      <div class="breadcrumps__item">Главная</div>
      <div class="breadcrumps__item">Ученики</div>
      <div class="breadcrumps__item">Документы</div>
    </nav>
    <div class="header-controls">
      <div class="user">
        <img src="@/assets/img/avatar_user.png" alt="user avatar" />
        <span class="username">Name_user</span>
      </div>
      <div class="actions">
        <IconSettings class="settings" />
        <IconLogOut class="logout" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 90px;
  background-color: var(--white);
}

.breadcrumps {
  display: flex;
  flex-direction: row;
  gap: 0 4px;
  color: var(--color-text-primary);
}
.breadcrumps__item {
  cursor: pointer;
}
.breadcrumps__item:last-child {
  color: var(--dark-grey);
}
.breadcrumps__item:not(.breadcrumps__item:last-child)::after {
  content: '/';
  color: currentColor;
  margin-left: 4px;
}

.header-controls {
  display: flex;
  flex-direction: row;
  gap: 0 52px;
  align-items: center;
}

.actions {
  display: flex;
  flex-direction: row;
  gap: 0 24px;
}

.username {
  margin-left: 10px;
  vertical-align: center;
}
</style>
