const routes = [
    {
        path: "/LoginForm",
        name: "LoginForm",
        component: () => import(/* webpackChunkName: "LoginPage" */ "@/views/LoginPage/LoginForm"),
    },
    {
        path: "/Findpassword",
        name: "Findpassword",
        component: () =>
            import(/* webpackChunkName: "LoginPage" */ "@/views/LoginPage/FindPassword"),
    },
];

export default routes;
