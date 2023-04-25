<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: String,
  age: Number
})
</script>

<template>
  <div>Hola {{ props.name }}, tengo {{ props.age }} años</div>
</template>

<style scoped></style>
