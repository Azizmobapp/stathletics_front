<template>
<div class="client">
  <section class="b-header">
    <header class="header">
      <NuxtLink  class="header-link-logo" :to="{name: 'index'}">
        <img class="logo-min" src="/images/logo-min.png" alt="Статико-Силовая атлетика" />
      </NuxtLink>
      <NuxtLink exact-active-class="active-link" class="header-link" :to="{name: 'events'}">Мероприятия</NuxtLink>
      <NuxtLink exact-active-class="active-link" class="header-link" :to="{name: 'athletes'}">Зал славы</NuxtLink>
      <NuxtLink exact-active-class="active-link" class="header-link" :to="{name: 'rates'}">Рейтинг</NuxtLink>
      <NuxtLink exact-active-class="active-link" class="header-link" :to="{name: 'elements'}">Таблица элементов</NuxtLink>
    </header>
  </section>
  <section class="b-article">
    <article class="article">
      <slot/>
    </article>
  </section>
  <section class="b-footer">
    <footer class="footer">

    </footer>
  </section>
</div>
</template>
<script setup lang="ts">

</script>
<style scoped>

</style>