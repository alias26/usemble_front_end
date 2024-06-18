const routes = [
    {
        path: "/userinfo",
        name: "userinfo",
        component: () =>
            import(/* webpackChunkName: "UserPage" */ "../views/UserPage/UserInfo.vue"),
    },
    {
        path: "/login",
        name: "LoginForm",
        component: () =>
            import(/* webpackChunkName: "LoginPage" */ "@/views/UserPage/LoginPage/LoginForm"),
    },
    {
        path: "/findpassword",
        name: "Findpassword",
        component: () =>
            import(/* webpackChunkName: "LoginPage" */ "@/views/UserPage/LoginPage/FindPassword"),
    },
    {
        path: "/join/joinMember",
        component: () =>
            import(/* webpackChunkName: "JoinPage" */ "@/views/UserPage/JoinPage/JoinMember"),
    },
    {
        path: "/join/joinCategory",
        component: () =>
            import(/* webpackChunkName: "JoinPage" */ "@/views/UserPage/JoinPage/JoinCategory"),
    },
    {
        path: "/myPage",
        component: () => import(/* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage"),
        redirect: "/myPage/profileInfo",
        children: [
            {
                path: "profileInfo",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/ProfileInfo"),
            },
            {
                path: "assembleHistory",
                component: () =>
                    import(
                        /* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/AssembleHistory"
                    ),
            },
            {
                //확인을 위한 임시 주소
                path: "applicationDetail",
                component: () =>
                    import(
                        /* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/ApplicationDetail"
                    ),
            },
            {
                //확인을 위한 임시 주소
                path: "recruitmentDetail",
                component: () =>
                    import(
                        /* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/RecruitmentDetail"
                    ),
            },
            {
                path: "assembleLike",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/AssembleLike"),
            },
            {
                path: "privacyInfo",
                component: () =>
                    import(/* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/PrivacyInfo"),
            },
            {
                path: "profileUpdate",
                component: () =>
                    import(
                        /* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/ProfileUpdate"
                    ),
            },
            {
                path: "passwordUpdate",
                component: () =>
                    import(
                        /* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/PasswordUpdate"
                    ),
            },
        ],
    },
];

export default routes;
