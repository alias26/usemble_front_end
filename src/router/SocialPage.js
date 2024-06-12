const routes = [
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
