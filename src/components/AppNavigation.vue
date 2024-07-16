<script setup lang="ts">
import IconHome from '@/components/icons/IconHome.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconBoy from '@/components/icons/IconBoy.vue'
import IconTeacher from '@/components/icons/IconTeacher.vue'
import IconLesson from '@/components/icons/IconLesson.vue'
import IconEmployee from '@/components/icons/IconEmployee.vue'
</script>

<template>
  <aside class="app-navigation">
    <img src="@/assets/img/logo_dark.svg" alt="logo" class="main-logo" />
    <nav class="main-menu">
      <ul class="main-menu-list">
        <li>
          <a href="#" class="main-menu__item"><IconHome /> Главная</a>
        </li>
        <li>
          <a href="#" class="main-menu__item"> <IconCalendar />Расписание</a>
        </li>
        <li>
          <a href="#" class="main-menu__item active"> <IconBoy />Ученики</a>
        </li>
        <li>
          <a href="#" class="main-menu__item"> <IconTeacher />Преподаватели</a>
        </li>
        <li>
          <a href="#" class="main-menu__item"> <IconLesson />Занятия</a>
        </li>
        <li>
          <a href="#" class="main-menu__item"> <IconEmployee />Группы</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.app-navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px 0;

  padding: 15px 0;

  background-color: var(--blue);
  color: var(--white);
}

.main-logo {
  width: 95px;
}

.main-menu {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.main-menu-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.main-menu__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  height: 96px;

  color: var(--white);
  text-decoration: none;
  font-size: 18px;
  line-height: 21.6px;
}

.main-menu__item.active {
  background-color: var(--light-blue);
}
</style>
