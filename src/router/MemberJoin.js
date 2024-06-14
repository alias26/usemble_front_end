const routes = [
    {
        path: "/Join/JoinStep1",
        component: () => import('@/views/Join/JoinStep1')
    },
    {
        path: "/Join/JoinStep2",
        component: () => import('@/views/Join/JoinStep2')
    }
]

export default routes;