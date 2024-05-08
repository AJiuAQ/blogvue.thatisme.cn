import { createApp } from 'vue'
import router from "@/router"
import { setupStore} from '@/store'
import { setupI18n } from '@/plugins/i18n'
import './style.css'
import App from './App.vue'
import 'uno.css'

import 'virtual:svg-icons-register'

const app = createApp(App)
setupStore(app)
setupI18n(app)
app.use(router).mount('#app')
