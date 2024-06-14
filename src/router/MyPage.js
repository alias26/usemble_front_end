const routes = [
    {
        path: "/MyPage",
        component: () => import("@/views/MyPageView"),
        redirect: "/MyPageView/ProfileInfo",
        children: [
            {
                path: "ProfileInfo",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/MyPageView/ProfileInfo"),
            },
            {
                path: "AssembleHistory",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/MyPageView/AssembleHistory"),
            },
            {
                path: "AssembleLike",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/MyPageView/AssembleLike"),
            },
            {
                path: "PrivacyInfo",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/MyPageView/PrivacyInfo"),
            },
            {
                path: "ProfileUpdate",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/MyPageView/ProfileUpdate"),
            },
        ],
    },
];

export default routes;
