import './assets/main.css'
import {createRouter, createWebHistory} from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'
import app from "@/App.vue";

import aboutMeMainComponent from "@/components/aboutMeMainComponent.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: aboutMeMainComponent},
        ]
})
createApp(App)
    .use(router)
    .mount('#app')
