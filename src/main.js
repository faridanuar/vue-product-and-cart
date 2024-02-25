import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Example import your custom css file to vue
// import './assets/styles/main.css'

/**
 * Import sass files (Required to install sass loader,
 * check in vue cli documentation)
 */
import './assets/styles/style.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
