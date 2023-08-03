import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCountdown from '@chenfengyuan/vue-countdown';

createApp(App).component(VueCountdown.name, VueCountdown).use(router).mount('#app')
