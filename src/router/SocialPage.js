const routes = [
    {
        path: "/list",
        name: "list",
        component: () =>
            import(/* webpackChunkName: "SocialPage" */ "../views/SocialPage/SocialList.vue"),
    },
    {
        path: "/social/write/base",
        name: "social1",
        component: () =>
            import(/* webpackChunkName: "SocialPage" */ "../views/SocialPage/WriteSocialBase.vue"),
    },
    {
        path: "/social/write/detail",
        name: "social2",
        component: () =>
            import(
                /* webpackChunkName: "SocialPage" */ "../views/SocialPage/WriteSocialDetail.vue"
            ),
    },
];

export default routes;
