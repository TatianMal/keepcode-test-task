<script setup lang="ts">
import StudentInfo from '@/components/student/StudentInfo.vue'
import StudentDocumentList from '@/components/student/StudentDocumentList.vue'
</script>

<template>
  <div class="user-students">
    <StudentInfo />
    <StudentDocumentList />
  </div>
</template>

<style scoped>
.user-students {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 90px 0;
}
</style>
