<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FormularioHeroe from "./components/FormularioHeroe.vue";
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

const router = useRouter();
</script>

<template>
  <div class="contenedor">
    <!-- Enlaces de navegación -->
    <nav>
      <router-link to="/">Ver Héroes</router-link> |
      <router-link to="/agregar-heroe">Agregar Héroe</router-link>
    </nav>

    <!-- Renderizado de la vista seleccionada -->
    <router-view
      :nuevoHeroe="nuevoHeroe"
      :heroes="heroes"
      @agregarHeroe="agregarHeroe"
      @deleteHeroe="deleteHeroe"
      @editHeroe="editHeroe"
    />
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-active {
  font-weight: bold;
  color: #35495e;
}
</style>
