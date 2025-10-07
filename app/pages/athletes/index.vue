<template>
  <div>
    <div class="b-athletes">
      <div class="athletes">
        <table>
          <thead>
          <tr>
            <th>ФОТО</th>
            <th>ФИО</th>
            <th>ГОРОД</th>
            <th>
              <NuxtImg class="table-medal" src="/images/gold.png" alt="Золото"/>
            </th>
            <th>
              <NuxtImg class="table-medal" src="/images/silver.png" alt="Серебро"/>
            </th>
            <th>
              <NuxtImg class="table-medal" src="/images/bronze.png" alt="Бронза"/>
            </th>
            <th>ИТОГО</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="athlete in athletesData">
            <td class="photo-td">
              <div class="athlete-photo"></div>
            </td>
            <td>{{ athlete.name }}</td>
            <td>{{ athlete.city }}</td>
            <td>{{ athlete.gold }}</td>
            <td>{{ athlete.silver }}</td>
            <td>{{ athlete.bronze }}</td>
            <td>{{ athlete.total }}</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
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
                  <NuxtImg class="table-medal" src="/images/gold.png" alt="Золото"/>
                </div>
                <p>{{ athlete.gold }}</p>
              </div>
              <div>
                <div>
                  <NuxtImg class="table-medal" src="/images/silver.png" alt="Серебро"/>
                </div>
                <p>{{ athlete.silver }}</p>
              </div>
              <div>
                <div>
                  <NuxtImg class="table-medal" src="/images/bronze.png" alt="Бронза"/>
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
