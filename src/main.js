import { createApp } from 'vue';
import { store } from './store/store.js'
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
