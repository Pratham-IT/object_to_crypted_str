import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from "vue-router";
import {useStrRoute} from "@/obj_to_encrypted_str/officer.js";



const app = createApp(App);

const routes = [
    { path: '/', component: App },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(router)
app.mount('#app');

export {useStrRoute}

