
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'
import router from './router';
import Swiper from 'swiper';
import './index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')  // 挂载应用

new Swiper('#swiper-1', {
    effect:"fade",
});