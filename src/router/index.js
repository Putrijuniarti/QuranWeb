import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Ayat from '../views/Ayat.vue'
import Surah from "@/views/Surah.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/ayat:id',
            name: 'ayat',
            component: Ayat
        },
        {
            path: '/surah',
            name: 'surah',
            component: Surah
        }
    ]
})

export default router