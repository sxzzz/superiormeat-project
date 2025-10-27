import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/views/products/index.vue'
import Home from '@/views/home/index.vue'
import NewsDetail from '@/views/newsDetail/index.vue'
import Special from '@/views/special/index.vue'
import Store from '@/views/location/index.vue'
import Contact from '@/views/contact/index.vue'
import Story from '@/views/story/index.vue'
import Blog from '@/views/blog/index.vue'
import Brand from '@/views/brand/index.vue'
import Layout from '@/views/layout/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path:'/home',
        name:'home',
        component:Home,
    },
    {
        path:'/brand',
        name:'Brand',
        component:Brand,
    },
    {
        path:'/newsDetail/:id',
        name:'NewsDetail',
        component:NewsDetail,
        props:true
    },
    {
        path:'/products',
        name:'Products',
        component:Products,
    },
    {
        path:'/special',
        name:'Special',
        component:Special,
    },
    {
        path:'/store',
        name:'Store',
        component:Store,
    },
    {
        path:'/contact',
        name:'Contact',
        component:Contact,
    },
    {
        path:'/story',
        name:'Story',
        component:Story,
    },
    {
        path:'/blog',
        name:'Blog',
        component:Blog,
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.name === 'hero') {
        const scrollToId = to.query.scrollToId;
        if (scrollToId) {
            setTimeout(() => {
                const targetElement = document.getElementById(scrollToId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - (window.innerHeight / 3),
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    }
    next();
});
export default router