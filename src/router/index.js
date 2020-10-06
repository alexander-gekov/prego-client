import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateCompany from "@/components/CreateCompany";
import Login from "@/components/Login";
import CreateEmployee from "@/components/CreateEmployee";

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
    mode: 'history',
    routes // short for `routes: routes`
})

export default router

