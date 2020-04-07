import Layout from '@/layout/index.vue'

export default {
    path: '/demo',
    component: Layout,
    redirect: '/demo/test',
    children: [
        {
            path: 'test',
            component: () => import('@/views/demo/index.vue'),
            name: 'demo',
            meta: { title: '弹框组件测试', icon: 'dashboard', roles: ["admin"] }
        }
    ]
}
