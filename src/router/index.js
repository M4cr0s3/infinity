import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import {useUserStore} from "@/stores/user";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register.vue'),
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: {
            auth: false
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/mentors',
        name: 'mentors',
        component: () => import('@/views/Mentors.vue'),
    },
    {
        path: '/courses',
        name: 'courses',
        component: () => import('@/views/Courses.vue'),
    },
    {
        path: '/course/:id',
        name: 'course',
        component: () => import('@/views/Course.vue'),
        props: true
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/Test.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error',
        component: () => import('@/views/Error.vue')
    }
];


export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()


    if (!to.meta.auth && userStore.token && (to.name === 'login' || to.name === 'register')) {
        return next({name: 'profile'});
    } else if (to.meta.auth && !userStore.token) {
        return next({name: 'login'});
    }

    next()
})