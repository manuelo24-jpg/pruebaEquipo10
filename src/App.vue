<script setup>
import { ref } from "vue";
import FormularioHeroe from "./components/FormularioHeroe.vue";
import DatosHeroeFormulario from "./components/DatosHeroeFormulario.vue";
import DatosHeroes from "./components/DatosHeroes.vue";

const nuevoHeroe = ref({
  id: null,
  nombre: "",
  liga: "",
  peso: 0,
  raza: "",
});

const heroes = ref([
  { id: 1, nombre: "Superman", liga: "DC", peso: 100, raza: "Kryptonian" },
  { id: 2, nombre: "Batman", liga: "DC", peso: 95, raza: "Human" },
  { id: 3, nombre: "Spiderman", liga: "Marvel", peso: 75, raza: "Human" },
]);

const agregarHeroe = (heroe) => {
  if (heroe.id) {
    const index = heroes.value.findIndex((h) => h.id === heroe.id);
    if (index !== -1) {
      if (
        window.confirm("¿Estás seguro de que quieres actualizar este héroe?")
      ) {
        heroes.value[index] = { ...heroe };
      }
    }
  } else {
    heroes.value.push({ ...heroe, id: Date.now() });
  }
  resetNuevoHeroe();
};

const resetNuevoHeroe = () => {
  nuevoHeroe.value = {
    id: null,
    nombre: "",
    liga: "",
    peso: 0,
    raza: "",
  };
};

const deleteHeroe = (heroe) => {
  heroes.value = heroes.value.filter((h) => h.id !== heroe.id);
};

const editHeroe = (heroe) => {
  nuevoHeroe.value = { ...heroe };
};
</script>

<template>
  <div class="contenedor">
    <div class="formularioInsercion">
      <h1>Insercción Héroe</h1>
      <FormularioHeroe
        v-model:nuevoHeroe="nuevoHeroe"
        @agregarHeroe="agregarHeroe"
        @deleteHeroe="deleteHeroe"
        @editHeroe="editHeroe"
      />
    </div>
    <div class="heroeInsertado">
      <h1>Héroe insertado</h1>
      <DatosHeroeFormulario v-bind="nuevoHeroe" />
    </div>
    <div class="listaHeroes">
      <h1>Lista de Héroes</h1>
      <DatosHeroes
        :heroes="heroes"
        @deleteHeroe="deleteHeroe"
        @editHeroe="editHeroe"
      />
    </div>
  </div>
</template>
