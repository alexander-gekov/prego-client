import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/css/tailwind.css'
import Register from "./components/Register";
import Login from "./components/Login";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
