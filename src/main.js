import { createApp } from 'vue'
import  BootstrapVue from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue)
// app.use(IconsPlugin)

app.mount('#app')
