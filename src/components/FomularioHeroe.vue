<script setup>
import { ref } from "vue";
const nombre= ref("Aquí va el nombre del héroe");
const liga= ref("liga2");
const peso= ref(85);
const raza= ref("humano");
</script>

<template>
    <form>
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