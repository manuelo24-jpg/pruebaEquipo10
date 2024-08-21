<script setup>
import { ref } from "vue";
import FormularioHeroe from "./components/FomularioHeroe.vue";
import DatosHeroeFormulario from "./components/DatosHeroeFormulario.vue";
import DatosHeroes from "./components/DatosHeroes.vue";

const heroes = ref([
  { nombre: "Batman", liga: "liga2", peso: 85, raza: "humano" },
  { nombre: "Superman", liga: "liga2", peso: 95, raza: "kryptoniano" },
  { nombre: "Mujer Maravilla", liga: "liga3", peso: 60, raza: "humana" },
  { nombre: "Flash", liga: "liga1", peso: 67, raza: "humano" },
  { nombre: "Linterna", liga: "liga2", peso: 79, raza: "Mandaloriano" },
  { nombre: "Americaman", liga: "liga11", peso: 95, raza: "Estadounidense" },
]);

const nuevoHeroe = ref({
  nombre: "",
  liga: "",
  peso: 0,
  raza: "",
});

const agregarHeroe = () => {
  heroes.value.push({ ...nuevoHeroe.value });
  nuevoHeroe.value = { nombre: "", liga: "", peso: 0, raza: "" };
};
</script>

<template>
  <div class="contenedor">
    <div class="formularioInsercion">
      <h1>Insercción Héroe</h1>
      <FormularioHeroe
        v-model:nuevoHeroe="nuevoHeroe"
        @agregarHeroe="agregarHeroe"
      />
    </div>
    <div class="heroeInsertado">
      <h1>Héroe insertado</h1>
      <DatosHeroeFormulario v-bind="nuevoHeroe" />
    </div>
    <div>
      <DatosHeroes :heroes="heroes" />
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.formularioInsercion,
.heroeInsertado {
  margin-top: 1rem;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
