const routes = [
    {
        path: "/admin",
        component: () => import(/* webpackChunkName: "admin" */ "@/views/AdminPage"),
    },
];

export default routes;
