<template>
  <div>
    <div class="b-champions">
      <div class="champions">
        <table>
          <thead>
            <tr>
              <th>ФОТО</th>
              <th>АТЛЕТ</th>
              <th>ГОРОД</th>
              <th>
                <NuxtImg class="table-medal" src="/images/gold.png" alt="Золото" />
              </th>
              <th>
                <NuxtImg class="table-medal" src="/images/silver.png" alt="Серебро" />
              </th>
              <th>
                <NuxtImg class="table-medal" src="/images/bronze.png" alt="Бронза" />
              </th>
              <th>ИТОГО</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="photo-td"><div class="champion-photo"></div></td>
              <td>ИВАН ИВАНОВ ИВАНЫЧ</td>
              <td>БЕЛГОРОД</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  layout: 'client'
})
</script>
<style scoped>

</style>