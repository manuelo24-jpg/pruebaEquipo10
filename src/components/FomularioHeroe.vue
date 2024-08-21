<script setup>
import { ref, watch } from "vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  nuevoHeroe: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:nuevoHeroe", "agregarHeroe"]);

const nombre = ref(props.nuevoHeroe.nombre);
const liga = ref(props.nuevoHeroe.liga);
const peso = ref(props.nuevoHeroe.peso);
const raza = ref(props.nuevoHeroe.raza);

watch([nombre, liga, peso, raza], ([newNombre, newLiga, newPeso, newRaza]) => {
  emit("update:nuevoHeroe", {
    nombre: newNombre,
    liga: newLiga,
    peso: newPeso,
    raza: newRaza,
  });
});
</script>

<template>
  <form @submit.prevent="emit('agregarHeroe')">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" v-model="nombre" />
    <label for="liga">Liga:</label>
    <input type="text" id="liga" v-model="liga" />
    <label for="peso">Peso:</label>
    <input type="number" id="peso" v-model="peso" />
    <label for="raza">Raza:</label>
    <input type="text" id="raza" v-model="raza" />
    <button type="submit">Enviar</button>
  </form>
</template>
