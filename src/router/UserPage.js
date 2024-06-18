const routes = [
    {
        path: "/user/info",
        name: "userInfo",
        component: () =>
            import(/* webpackChunkName: "UserPage" */ "../views/UserPage/UserInfoPage/UserInfo"),
    },
    {
        path: "/user/inprogress",
        name: "userinprogress",
        component: () =>
            import(
                /* webpackChunkName: "UserPage" */ "../views/UserPage/UserInfoPage/UserInProgress.vue"
            ),
    },
    {
        path: "/user/progressed",
        name: "userprogressed",
        component: () =>
            import(
                /* webpackChunkName: "UserPage" */ "../views/UserPage/UserInfoPage/UserProgressed"
            ),
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
                path: "assembleReview",
                component: () =>
                    import(
                        /* webpackChunkName: "MyPage" */ "@/views/UserPage/MyPage/AssembleReview"
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
