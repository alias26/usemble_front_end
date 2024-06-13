const routes = [
    {
        path: "/list",
        name: "list",
        component: () =>
            import(/* webpackChunkName: "SocialPage" */ "../views/SocialPage/SocialList.vue"),
    },
    {
        path: "/social/base",
        name: "social1",
        component: () =>
            import(/* webpackChunkName: "SocialPage" */ "../views/SocialPage/CreateSocialBase.vue"),
    },
    {
        path: "/social/detail",
        name: "social2",
        component: () =>
            import(
                /* webpackChunkName: "SocialPage" */ "../views/SocialPage/CreateSocialDetail.vue"
            ),
    },
];

export default routes;
