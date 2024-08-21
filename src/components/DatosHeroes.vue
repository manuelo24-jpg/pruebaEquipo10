<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps(["heroes"]);
const emit = defineEmits(["deleteHeroe", "editHeroe"]);

const deleteHero = (hero) => {
  if (confirm(`¿Estás seguro de que deseas borrar a ${hero.nombre}?`)) {
    emit("deleteHeroe", hero);
  }
};

const editHero = (hero) => {
  emit("editHeroe", hero);
};
</script>

<template>
  <ul>
    <li v-for="hero in heroes" :key="hero.id">
      {{ hero.nombre }} - {{ hero.liga }} - {{ hero.peso }} - {{ hero.raza }}
      <button @click="editHero(hero)">Editar</button>
      <button @click="deleteHero(hero)">Borrar</button>
    </li>
  </ul>
</template>
