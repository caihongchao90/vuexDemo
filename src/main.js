import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import store from "./store/index.js"

const app = createApp(App)
//这里注意引入store的时机，要在app创建完成之前引入
app.use(store)
app.mount('#app')
