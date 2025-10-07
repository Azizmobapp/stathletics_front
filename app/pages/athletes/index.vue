<template>
  <div>
    <div class="b-athletes">
      <div class="athletes athletes-card-list">
        <div v-for="athlete in athletesData" class="athlete-card">
          <div class="photo-div">
            <div class="athlete-photo"></div>
          </div>
          <div>
            <div class="athlete-card-info">
              <h3>{{ athlete.name }}</h3>
              <p>Город: {{ athlete.city }}</p>
            </div>
            <div class="athlete-card-medals">
              <div>
                <div>
                  <img class="table-medal" src="/images/gold.png" alt="Золото"/>
                </div>
                <p>{{ athlete.gold }}</p>
              </div>
              <div>
                <div>
                  <img class="table-medal" src="/images/silver.png" alt="Серебро"/>
                </div>
                <p>{{ athlete.silver }}</p>
              </div>
              <div>
                <div>
                  <img class="table-medal" src="/images/bronze.png" alt="Бронза"/>
                </div>
                <p>{{ athlete.bronze }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>


const {$apiFetch} = useNuxtApp()
const {data: athletesData} = await $apiFetch('/athletes')
definePageMeta({
  layout: 'client'
})
</script>
<style scoped>

</style>
