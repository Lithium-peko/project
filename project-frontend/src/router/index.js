import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('/src/views/WelcomeView.vue'),
            children: [
                {
                    path: '',
                    name: 'welcome-login',
                    component: () => import('/src/views/welcome/LoginPage.vue')
                }
            ]
        }
    ]
})

export default router
