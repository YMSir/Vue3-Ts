import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './styles/index.scss';
import router from './router';
import http from './utils/http';

const app = createApp(App);
app.use(router)
  .use(Antd)
  .provide('$axios', http)
  .mount('#app');
