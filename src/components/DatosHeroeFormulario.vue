<template>
    <div class="hero-details">
      <h2>Detalles del Héroe</h2>
      <ul>
        <li><strong>Nombre:</strong> {{ nombre }}</li>
        <li><strong>Liga:</strong> {{ liga }}</li>
        <li><strong>Peso:</strong> {{ peso }} kg</li>
        <li><strong>Raza:</strong> {{ raza }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nombre: {
        type: String,
        required: true
      },
      liga: {
        type: String,
        required: true
      },
      peso: {
        type: Number,
        required: true
      },
      raza: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .hero-details {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px 0;
    background-color: #f9f9f9;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  strong {
    color: #333;
  }
  </style>
  