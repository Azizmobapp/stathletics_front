<template>
  <NuxtLayout>
      <NuxtPage>

      </NuxtPage>
  </NuxtLayout>
</template>
<script setup lang="ts">
</script>

<style>

.layout-enter-active,
.layout-leave-active,
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
  transform: translateY(0px);
  filter: blur(0rem);
}

.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(20px);
}
</style>