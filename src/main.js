import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from "./router"
import store from './store'
import axios from 'axios'

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
