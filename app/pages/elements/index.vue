<template>
  <div>
    <div class="b-section">
      <div class="section">
        <div class="elements-nav">
          <a @click.prevent="section = 1" :class="section === 1 ? 'element-nav-active' : ''" href="#">Первая группа</a>
          <a @click.prevent="section = 2" :class="section === 2 ? 'element-nav-active' : ''" href="#">Вторая группа</a>
          <a @click.prevent="section = 3" :class="section === 3 ? 'element-nav-active' : ''" href="#">Третья группа</a>
          <a @click.prevent="section = 4" :class="section === 4 ? 'element-nav-active' : ''" href="#">Четвёртая
            группа</a>
          <a @click.prevent="section = 5" :class="section === 5 ? 'element-nav-active' : ''" href="#">Пятая группа</a>
        </div>
        <transition name="fade" mode="out-in">
          <div class="elements-list" :key="section">
            <div v-for="group in elementsData" class="elements-group">
              <div v-for="element in group" :key="element.id" class="elements-item">
                <div class="elements-item-title">{{ element.title }}</div>
                <div class="elements-item-point">{{ element.point }}</div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script setup>


const {$apiFetch} = useNuxtApp()
const section = ref(1);

const {data: elementsData} = await $apiFetch('/elements', {
  method: 'GET',
  query: { section_idx: section},
})


definePageMeta({
  layout: 'client'
})

// const run = async () => {
//  const res = await useFetch('http://127.0.0.1:8000/api/elements',  {
//    query: {
//      section_idx: 1
//    }
//  })
//   console.log(res);
// }
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

</style>
