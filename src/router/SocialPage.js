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
        meta: { authorization: ["ROLE_USER"] },
        component: () =>
            import(/* webpackChunkName: "SocialPage" */ "../views/SocialPage/WriteSocialBase.vue"),
    },
    {
        path: "/social/write/detail",
        name: "social2",
        meta: { authorization: ["ROLE_USER"] },
        component: () =>
            import(
                /* webpackChunkName: "SocialPage" */ "../views/SocialPage/WriteSocialDetail.vue"
            ),
    },
    {
        path: "/social/detail",
        name: "socialdetail",
        component: () =>
            import(/* webpackChunkName: "SocialPage" */ "../views/SocialPage/SocialDetail.vue"),
    },
    {
        path: "/social/pay",
        name: "socialpay",
        meta: { authorization: ["ROLE_USER"] },
        component: () =>
            import(/* webpackChunkName: "SocialPage" */ "../views/SocialPage/SocialPay.vue"),
    },
    {
        path: "/search",
        component: () => import(/* webpackChunkName: "SearchSocial" */ "@/views/SearchSocial"),
    },
];

export default routes;
