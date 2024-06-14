const routes = [
    {
        path: "/LoginForm",
        name: "LoginForm",
        component: () => import("@/views/Login/LoginForm"),
    },
    {
        path: "/Findpassword",
        name: "Findpassword",
        component: () => import("@/views/Login/FindPassword"),
    },
];

export default routes;
