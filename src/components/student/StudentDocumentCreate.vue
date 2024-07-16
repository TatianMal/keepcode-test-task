<script setup lang="ts"></script>

<template>
  <article>
    <form action="">
      <div>
        <fieldset>
          <legend>Выберите прожарку</legend>
          <label>
            <input type="radio" name="level" />
            Rare
          </label>
          <label>
            <input type="radio" name="level" checked />
            Medium
          </label>
          <label>
            <input type="radio" name="level" />
            Well Done
          </label>
        </fieldset>
      </div>
      <div>
        <label for="name">Введите имя:</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label for="name">Введите имя:</label>
        <input type="text" name="name" id="name" required />
      </div>
    </form>
    <footer>
      // in slots?? and create modal create doc?
      <button></button>
      <button></button>
    </footer>
  </article>
</template>

<style scoped></style>
