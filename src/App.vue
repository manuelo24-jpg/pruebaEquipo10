<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import DatosHeroeFormulario from "./components/DatosHeroeFormulario.vue";
import FormularioHeroe from "./components/FomularioHeroe.vue";
import DatosHeroes from "./components/DatosHeroes.vue";

const heroes = [
  { nombre: "Batman", liga: "liga2", peso: 85, raza: "humano" },
  { nombre: "Superman", liga: "liga2", peso: 95, raza: "kryptoniano" },
  { nombre: "Mujer Maravilla", liga: "liga3", peso: 60, raza: "humana" },
  { nombre: "Flash", liga: "liga1", peso: 67, raza: "humano" },
  { nombre: "Linterna", liga: "liga2", peso: 79, raza: "Mandaloriano" },
  { nombre: "Americaman", liga: "liga11", peso: 95, raza: "Estadounidense" },
];
</script>

<template>
  <div>
    <h1>Insercción Héroe</h1>
   <FormularioHeroe/>
  </div>
  <div>
    <h1>Héroe insertado</h1>
   
      <DatosHeroeFormulario/>
 
  </div>
  <DatosHeroes :heroes="heroes" />
</template>

<style scoped>
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
