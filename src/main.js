import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/css/tailwind.css'
import CreateCompany from "./components/CreateCompany";
import Login from "./components/Login";
import CreateEmployee from "@/components/CreateEmployee";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/company/create', component: CreateCompany },
  { path: '/login', component: Login},
  { path: '/employee/create', component: CreateEmployee},
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
