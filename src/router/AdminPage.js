const routes = [
    {
        path: "/admin",
        component: () => import(/* webpackChunkName: "Admin" */ "@/views/Admin"),
        redirect: "/admin/dashBoard",
        children: [
            {
                path: "dashBoard",
                component: () => import(/* webpackChunkName: "Admin" */ "@/views/Admin/DashBoard"),
            },
            {
                path: "socialingTable",
                component: () =>
                    import(/* webpackChunkName: "Admin" */ "@/views/Admin/SocialingTable"),
            },
            {
                path: "memberTable",
                component: () =>
                    import(/* webpackChunkName: "Admin" */ "@/views/Admin/MemberTable"),
            },
            {
                path: "memberDetail",
                component: () =>
                    import(/* webpackChunkName: "Admin" */ "@/views/Admin/MemberDetail"),
            },
        ],
    },
];

export default routes;
