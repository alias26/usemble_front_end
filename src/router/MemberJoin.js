const routes = [
    {
        path: "/Join/JoinStep1",
        component: () => import(/* webpackChunkName: "JoinPage" */ "@/views/JoinPage/JoinStep1"),
    },
    {
        path: "/Join/JoinStep2",
        component: () => import(/* webpackChunkName: "JoinPage" */ "@/views/JoinPage/JoinStep2"),
    },
];

export default routes;
