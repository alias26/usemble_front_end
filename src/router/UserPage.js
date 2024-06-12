const routes = [
    {
        path: "/userinfo",
        name: "userinfo",
        component: () =>
            import(/* webpackChunkName: "UserPage" */ "../views/UserPage/UserInfoView.vue"),
    },
];

export default routes;
