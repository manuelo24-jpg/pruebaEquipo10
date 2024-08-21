<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import DatosHeroeFormulario from "./components/DatosHeroeFormulario.vue";
import FormularioHeroe from "./components/FomularioHeroe.vue";

const heroes = [
  { nombre: "Batman", liga: "liga2", peso: 85, raza: "humano" },
  { nombre: "Superman", liga: "liga2", peso: 95, raza: "kryptoniano" },
  { nombre: "Superman", liga: "liga2", peso: 95, raza: "kryptoniano" },
  { nombre: "Superman", liga: "liga2", peso: 95, raza: "kryptoniano" },
  { nombre: "Superman", liga: "liga2", peso: 95, raza: "kryptoniano" },
  { nombre: "Superman", liga: "liga2", peso: 95, raza: "kryptoniano" },
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
