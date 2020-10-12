import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateCompany from "@/components/CreateCompany";
import Login from "@/components/Login";
import CreateEmployee from "@/components/CreateEmployee";
import DashboardBuildingOwner from '@/components/buildingOwner/Dashboard'
import CompaniesHome from "@/components/home/CompaniesHome";
import LandingPage from "../components/LandingPage";
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/company/create',
        component: CreateCompany,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/employee/create',
        component: CreateEmployee
    },
    {
        path: '/admin/dashboard',
        component: DashboardBuildingOwner,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/companies',
        component: CompaniesHome
    },
    {
        path: '/',
        component: LandingPage
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router

