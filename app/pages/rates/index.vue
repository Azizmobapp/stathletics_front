<template>
  <div>
    <div class="b-section">
      <div class="section">
        <table>
          <thead>
            <tr>
              <th>Место</th>
              <th>ФИО</th>
              <th>Город</th>
              <th>
                <img class="table-medal" src="/images/gold.png" alt="Золото"/>
              </th>
              <th>
                <img class="table-medal" src="/images/silver.png" alt="Серебро"/>
              </th>
              <th>
                <img class="table-medal" src="/images/bronze.png" alt="Бронза"/>
              </th>
              <th>
                <img class="table-medal" src="/images/record.png" alt="Рекорд"/>
              </th>
              <th>Рейтинг</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="(athlete, index) in athletesData">
            <td>{{ index + 1 }}</td>
            <td>{{ athlete.name }}</td>
            <td>{{ athlete.city }}</td>
            <td>{{ athlete.gold }}</td>
            <td>{{ athlete.silver }}</td>
            <td>{{ athlete.bronze }}</td>
            <td>{{ athlete.record }}</td>
            <td>{{ athlete.rate }}</td>
          </tr>
          </tbody>
        </table>
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
