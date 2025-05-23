import './assets/main.css'
import 'element-plus/dist/index.css'
import './styles/element/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import { getCategory } from './apis/textAPI'

getCategory().then(res=>{
  console.log(res);
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
