import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

// 修复面包屑 路由重复的报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard-page/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' },
        }],
    },
    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: { title: 'Example', icon: 'el-icon-s-help' },
        children: [
            {
                path: '/example/table',
                name: 'Table',
                component: () => import('@/views/example/table-page'),
                meta: { title: 'Table', icon: 'table' },
            },
            {
                path: '/example/tree',
                name: 'Tree',
                component: () => import('@/views/example/tree-page'),
                meta: { title: 'Tree', icon: 'tree' },
            },
        ],
    },
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: 'Nested',
            icon: 'nested',
        },
        children: [
            {
                path: '/nested/menu1',
                component: () => import('@/views/example/table-page'), // Parent router-view
                name: 'Menu1',
                meta: { title: 'Menu1' },
                children: [
                    {
                        path: '/nested/menu1',
                        component: () => import('@/views/example/table-page'),
                        name: 'Menu1-1',
                        meta: { title: 'Menu1-1' },
                    },
                    {
                        path: '/nested/menu1/menu1-2',
                        component: () => import('@/views/example/table-page'),
                        name: 'Menu1-2',
                        meta: { title: 'Menu1-2' },
                        children: [
                            {
                                path: '/nested/menu1/menu1-2/menu1-2-1',
                                component: () => import('@/views/example/table-page'),
                                name: 'Menu1-2-1',
                                meta: { title: 'Menu1-2-1' },
                            },
                            {
                                path: '/nested/menu1/menu1-2/menu1-2-2',
                                component: () => import('@/views/example/table-page'),
                                name: 'Menu1-2-2',
                                meta: { title: 'Menu1-2-2' },
                            },
                        ],
                    },
                    {
                        path: '/nested/menu1-3',
                        component: () => import('@/views/example/table-page'),
                        name: 'Menu1-3',
                        meta: { title: 'Menu1-3' },
                    },
                ],
            },
            {
                path: 'menu2',
                component: () => import('@/views/example/table-page'),
                name: 'Menu2',
                meta: { title: 'menu2' },
            },
        ],
    },

]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
})

const router = createRouter()

export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
