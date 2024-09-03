import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from "vue-router";

const app = createApp(App);

const routes = [
    { path: '/', component: App },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(router)
app.mount('#app')
