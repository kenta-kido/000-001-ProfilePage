import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import BarcodePage from '@/views/BarcodePage.vue';
// import ContactPage from '@/views/ContactPage.vue';


const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/portfolio', name: 'Portfolio', component: PortfolioPage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/barcode', name: 'Barcode', component: BarcodePage },
    // { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHashHistory(), // hash モードを使用
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
  
        return window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    return { x: 0, y: 0 };
  }
});

export default router;
