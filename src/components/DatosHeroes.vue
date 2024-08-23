<script setup>
import { defineEmits, defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["heroes"]);
const emit = defineEmits(["deleteHeroe", "editHeroe"]);
const router = useRouter();

const deleteHero = (hero) => {
  if (confirm(`¿Estás seguro de que deseas borrar a ${hero.nombre}?`)) {
    emit("deleteHeroe", hero);
  }
};

const editHero = (hero) => {
  emit("editHeroe", hero);
};

const viewDetails = (hero) => {
  router.push(`/ver-detalles/${hero.id}`);
};
</script>

<template>
  <ul>
    <li v-for="hero in heroes" :key="hero.id">
      {{ hero.nombre }} - {{ hero.liga }} - {{ hero.peso }} - {{ hero.raza }}
      <button @click="editHero(hero)">Editar</button>
      <button @click="deleteHero(hero)">Borrar</button>
      <button @click="viewDetails(hero)">Ver Detalles</button>
    </li>
  </ul>
</template>
