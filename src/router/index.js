//配置路由，todo 自动生成path
import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewRoutes from '../views'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: ViewRoutes
})

export default router