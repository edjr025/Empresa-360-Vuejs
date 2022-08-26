import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

// ----- fim das rotas
const Vue = createApp(App)
Vue.use(router) //adicionando as config de rotas a intâmncia do Vue
Vue.mount('#app')
