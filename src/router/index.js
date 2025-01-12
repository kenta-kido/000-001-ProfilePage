import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/portfolio', component: PortfolioPage }
];

const router = createRouter({
  history: createWebHashHistory(), // hash モードを使用
  routes,
});

export default router;
