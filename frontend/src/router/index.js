import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path:"/:pathMatch(.*)*",
        name:"not-found",
        component: PageNotFound

    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router