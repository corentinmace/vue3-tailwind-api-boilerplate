import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'


let app = createApp(App);

app.provide('ApiEndpoint', import.meta.env.VITE_API_ENDPOINT); 

app.use(router);
app.mount('#app');
