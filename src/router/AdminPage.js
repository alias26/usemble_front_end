const routes = [
    {
        path: "/admin",
        component: () => import(/* webpackChunkName: "AdminPage" */ "@/views/AdminPage"),
        redirect: "/admin/dashBoard",
        children: [{
            path: "dashBoard",
            component: () =>
                import(/* webpackChunkName: "AdminPage" */ "@/views/AdminPage/DashBoard"),
        },
        {
            path: "socialingTable",
            component: () =>
                import(/* webpackChunkName: "AdminPage" */ "@/views/AdminPage/SocialingTable"),
        }],
    },
];

export default routes;
