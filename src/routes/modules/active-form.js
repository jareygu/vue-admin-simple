import Layout from '@/layout/index.vue'

export default {
    path: '/active-form',
    component: Layout,
    redirect: '/active-form/index',
    children: [
        {
            path: 'index',
            component: () => import('@/views/active-form/index.vue'),
            name: 'active-form',
            meta: { title: '动态表单', icon: 'dashboard', roles: ['admin'] }
        }
    ]
}
