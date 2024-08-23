<template>
  <div class="modal" @click.self="cerrarModal">
    <div class="modal-content">
      <span class="close" @click="cerrarModal">&times;</span>
      <h2>Detalles del Héroe</h2>
      <ul>
        <li><strong>Nombre:</strong> {{ heroe.nombre }}</li>
        <li><strong>Liga:</strong> {{ heroe.liga }}</li>
        <li><strong>Peso:</strong> {{ heroe.peso }} kg</li>
        <li><strong>Raza:</strong> {{ heroe.raza }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const heroe = ref({});

onMounted(() => {
  const id = route.params.id;
  const heroes = JSON.parse(localStorage.getItem("heroes"));
  heroe.value = heroes.find((h) => h.id === parseInt(id));
});

const cerrarModal = () => {
  router.push("/");
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 1.5em;
}
</style>
