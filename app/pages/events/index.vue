<template>
  <div>
    <div v-for="(event, index) in eventsData" class="b-event-item">
      <div v-if="index % 2 === 0" class="event-item">
        <div class="b-event-meta">
          <div>
            <h3 class="event-title">
              {{ event.title }}
            </h3>
          </div>
        </div>
        <div class="b-event-date">
          <p :class="event.is_future ? 'first' : ''">{{ event.year }}</p>
        </div>
        <div class="b-event-image">
          <NuxtImg :src="event.image_url" :alt="event.title" />
        </div>
      </div>
      <div v-else class="event-item">
        <div class="b-event-image">
          <NuxtImg :src="event.image_url" :alt="event.title" />
        </div>
        <div class="b-event-date">
          <p :class="event.is_future ? 'first' : ''">{{ event.year }}</p>
        </div>
        <div class="b-event-meta">
          <div>
            <h3 class="event-title">
              {{ event.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import {useFetch} from "nuxt/app";
const config = useRuntimeConfig()
const {data: eventsData} = useFetch(`${config.public.apiBase}/events`)

definePageMeta({
  layout: 'client'
})
</script>
<style scoped>

</style>