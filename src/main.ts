import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
