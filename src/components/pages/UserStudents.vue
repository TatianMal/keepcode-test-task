<script setup lang="ts">
import StudentInfo from '@/components/student/StudentInfo.vue'
import StudentDocumentList from '@/components/student/StudentDocumentList.vue'
import StudentDocumentCreate from '@/components/student/StudentDocumentCreate.vue'
</script>

<template>
  <div class="user-students">
    <StudentInfo />
    <StudentDocumentList />
    <!-- <div class="wrapper">
        // modal
        <article>
          <header>
            <div></div>
            <div></div>
          </header>
          <StudentDocumentCreate />
        </article>
      </div> -->
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
