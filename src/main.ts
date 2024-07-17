import './assets/main.css'
import 'vue-select/dist/vue-select.css'

import VueSelect from 'vue-select'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).component('v-select', VueSelect).mount('#app')
