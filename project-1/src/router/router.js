import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Blog from '../components/Blog.vue'
import TextBindInput from '../components/TextBindInput.vue'
import Category from '../components/Category.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
    {
        path: '/blog',
        components: {
            default: Blog,
            postCategory: Category
        },
        name: 'blog'
    },
    {
        path: '/blog/tag/:tag',
        components: {
            default: Blog,
            postCategory: Category
        },
        name: 'tag'
    },
    {
        path: '/text',
        component: TextBindInput,
        name: 'text'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router