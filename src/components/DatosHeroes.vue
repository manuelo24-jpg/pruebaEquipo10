<script setup>
import { defineProps } from "vue";

const props = defineProps({
  heroes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul>
    <li v-for="(hero, index) in heroes" :key="index">
      Nombre: {{ hero.nombre }}, Liga: {{ hero.liga }}, Peso: {{ hero.peso }},
      Raza: {{ hero.raza }}
    </li>
  </ul>
</template>
