import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(pinia);
app.mount('#app');
