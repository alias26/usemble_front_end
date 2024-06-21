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
            {
                path: "reviewTable",
                component: () =>
                    import(/* webpackChunkName: "Admin" */ "@/views/Admin/ReviewTable"),
            },
            {
                path: "noticeTable",
                component: () =>
                    import(/* webpackChunkName: "Admin" */ "@/views/Admin/NoticeTable"),
            },
            {
                path: "noticeWrite",
                component: () =>
                    import(/* webpackChunkName: "Admin" */ "@/views/Admin/NoticeWrite"),
            },
            {
                path: "noticeUpdate",
                component: () =>
                    import(/* webpackChunkName: "Admin" */ "@/views/Admin/NoticeUpdate"),
            },
        ],
    },
];

export default routes;
