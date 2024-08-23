<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";

const props = defineProps(["nuevoHeroe"]);
const emit = defineEmits(["update:nuevoHeroe", "agregarHeroe"]);
const router = useRouter();
const route = useRoute();

const nombre = ref(props.nuevoHeroe.nombre);
const liga = ref(props.nuevoHeroe.liga);
const peso = ref(props.nuevoHeroe.peso);
const raza = ref(props.nuevoHeroe.raza);

watch(
  () => props.nuevoHeroe,
  (newHeroe) => {
    nombre.value = newHeroe.nombre;
    liga.value = newHeroe.liga;
    peso.value = newHeroe.peso;
    raza.value = newHeroe.raza;
  },
  { immediate: true }
);

watch([nombre, liga, peso, raza], ([newNombre, newLiga, newPeso, newRaza]) => {
  emit("update:nuevoHeroe", {
    id: props.nuevoHeroe.id,
    nombre: newNombre,
    liga: newLiga,
    peso: newPeso,
    raza: newRaza,
  });
});

const agregarHeroe = () => {
  if (
    props.nuevoHeroe.id &&
    !window.confirm("¿Estás seguro de que quieres actualizar este héroe?")
  ) {
    return;
  }
  emit("agregarHeroe", {
    id: props.nuevoHeroe.id,
    nombre: nombre.value,
    liga: liga.value,
    peso: peso.value,
    raza: raza.value,
  });
  router.push("/");
};

const resetForm = () => {
  nombre.value = "";
  liga.value = "";
  peso.value = 0;
  raza.value = "";
};
</script>

<template>
  <form @submit.prevent="agregarHeroe">
    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="liga" placeholder="Liga" />
    <input v-model="peso" type="number" placeholder="Peso" />
    <input v-model="raza" placeholder="Raza" />
    <button type="submit">
      {{ props.nuevoHeroe.id ? "Actualizar" : "Guardar" }}
    </button>
    <button type="button" @click="resetForm">Resetear</button>
  </form>
</template>
