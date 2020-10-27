import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from "./router"
import store from './store'
import axios from 'axios'
import VueConfirmDialog from 'vue-confirm-dialog'
import VueFormulate from '@braid/vue-formulate'
import './assets/css/formulate.css'

Vue.use(VueFormulate)
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

Vue.config.productionTip = false
Vue.prototype.$http = axios

window.axios = axios
axios.defaults.baseURL = 'http://localhost:8000'

new Vue({
  render: h => h(App),
  router,
  axios,
  store
}).$mount('#app')
