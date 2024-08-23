import { createRouter, createWebHistory } from 'vue-router';
import DatosHeroes from './components/DatosHeroes.vue';
import FormularioHeroe from './components/FormularioHeroe.vue';
import DetalleHeroeModal from './components/DetalleHeroeModal.vue';

const routes = [
  { path: '/', component: DatosHeroes },
  { path: '/agregar-heroe', component: FormularioHeroe },
  { path: '/editar-heroe/:id', component: FormularioHeroe, props: true },
  { path: '/ver-detalles/:id', component: DetalleHeroeModal, props: true, meta: { modal: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
