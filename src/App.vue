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
    <div class="listaHeroes">
      <h1>Lista de Héroes</h1>
      <DatosHeroes :heroes="heroes" />
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
}

.formularioInsercion,
.heroeInsertado,
.listaHeroes {
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .contenedor {
    flex-direction: row;
    justify-content: space-around;
  }

  .formularioInsercion,
  .heroeInsertado,
  .listaHeroes {
    max-width: 300px;
  }
}
</style>
