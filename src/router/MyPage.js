const routes = [
    {
        path: "/MyPage",
        component: () => import("@/views/MyPage"),
        redirect: '/MyPage/ProfileInfo',
        children: [
            {
                path: "ProfileInfo",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/MyPage/ProfileInfo"),
            },
            {
                path: "AssembleHistory",
                component: () => import("@/views/MyPage/AssembleHistory"),
            },
            {
                path: "AssembleLike",
                component: () => import("@/views/MyPage/AssembleLike"),
            },
            {
                path: "PrivacyInfo",
                component: () => import("@/views/MyPage/PrivacyInfo"),
            },
            {
                path: "ProfileUpdate",
                component: () => import("@/views/MyPage/ProfileUpdate"),
            },
        ],
    },
];

export default routes;
