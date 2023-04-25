<script setup>
import { onMounted, reactive, ref, computed } from 'vue'
// import ParagraphView from './components/ParagraphView.vue'

// const numeroDeIteraciones = new Array(100).fill(0)

const name = ref('Brian')
const correo = ref('')

const state = reactive({
  url: '',
  catInput: ''
})

const catImage = computed(() => `${CAT_API}/${state.url}`)
// const uppercaseName = computed(() => name.value.toUpperCase())
const catInputEndpoint = computed(() => `cat/says/${state.catInput}?size=50&color=red&json=true`)

const CAT_API = 'https://cataas.com'
// const CAT_RANDOM_IMG_ENDPOINT = 'cat/says/hello?size=50&color=red&json=true'

onMounted(() => {
  // fetchCatHandler()
})

const fetchCatHandler = () => {
  fetch(`${CAT_API}/${catInputEndpoint.value}`)
    .then((res) => res.json())
    .then((data) => {
      state.url = data.url
    })
}
</script>

<template>
  <div>
    <h1>Random Cat App</h1>

    <img :src="catImage" alt="imagen del gatito" />
    <p>{{ state.url }}</p>

    <!-- <input v-model="correo" type="text" />
    <p>{{ correo }}</p>

    <input v-model="name" type="text" />
    <p>{{ uppercaseName }}</p> -->

    <input v-model="state.catInput" type="text" />
    <p>{{ state.catInput }}</p>
    <button @click="fetchCatHandler">Fetch for a cat</button>
    <!-- <ParagraphView
      v-for="(_value, index) of numeroDeIteraciones"
      :key="index"
      name="Julito"
      :age="23"
    /> -->
  </div>
</template>

<style scoped></style>
