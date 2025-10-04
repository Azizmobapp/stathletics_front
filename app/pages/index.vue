<template>
 <div class="main fullscreen-bg">
  <section class="b-main-article">
    <article class="main-article">
      <div class="main-links">
        <div>
          <NuxtLink :to="{name: 'events'}">Мероприятия</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{name: 'champions'}">Чемпионы</NuxtLink>
        </div>
        <div>
          <a href="#">Таблица элементов</a>
        </div>
        <div>
          <a href="#">Разряды</a>
        </div>
      </div>
      <div class="b-logo">
        <NuxtImg src="/images/main-logo.png" alt="Онлайн Рекорды 2026" />
        <h1 class="main-title">
          СТАТИКО-СИЛОВАЯ АТЛЕТИКА
        </h1>
      </div>
    </article>
  </section>
 </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main'
})
</script>

<style scoped>

</style>