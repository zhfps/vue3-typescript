import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import router from './router';
import store from './store';
import 'normalize.css';
import './assets/style/variables.scss';
import './mock/mock.ts'
import App from './App.vue';
createApp(App).use(store).use(router).use(ElementPlus, { locale })
  .mount('#app');
