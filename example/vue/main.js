import { createApp } from 'vue';
import App from './src/App.vue';
import mc from '../../index';

const app = createApp(App);
app.config.globalProperties.$mc = mc;
app.mount('#root');
