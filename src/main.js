import { createApp } from 'vue'
import App from './App.vue'

// Styling imports and configs
import './assets/style.css'
import './assets/tailwind.css'

// router import 
import router from './router'


createApp(App)
  .use(router)
  .mount('#app')
