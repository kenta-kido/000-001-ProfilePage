import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';


const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/portfolio', name: 'Portfolio', component: PortfolioPage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHashHistory(), // hash モードを使用
  routes,
});

export default router;
