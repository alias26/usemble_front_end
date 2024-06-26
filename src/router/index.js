import { createRouter, createWebHistory } from "vue-router";
import { compile } from "vue";
import store from "../store";
import Home from "../views/Home";
import GuideList from "../views/FooterPage/GuideList.vue";
import NoticeList from "@/views/FooterPage/NoticeList.vue";
import NoticeDetail from "@/views/FooterPage/NoticeDetail.vue";
import PolicyPrivacy from "@/views/FooterPage/PolicyPrivacy.vue";
import PolicyUsage from "@/views/FooterPage/PolicyUsage.vue";
import NotFound from "@/views/NotFound.vue";
import SocialPage from "./SocialPage";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/guide",
        name: "guide",
        component: GuideList,
    },
    {
        path: "/notice",
        name: "notice",
        component: NoticeList,
    },
    {
        path: "/notice/detail",
        name: "noticeDetail",
        component: NoticeDetail,
    },
    {
        path: "/policy/privacy",
        name: "policyPrivacy",
        component: PolicyPrivacy,
    },
    {
        path: "/policy/usage",
        name: "policyUsage",
        component: PolicyUsage,
    },
    ...SocialPage,
    ...UserPage,
    ...AdminPage,
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0, behavior: "instant" };
    },
});

router.beforeEach((to, from, next) => {
    const mrole = store.state.mrole;
    const { authorization } = to.meta;

    if (authorization) {
        if (mrole == "") {
            return next({ path: "/login" });
        }
        if (authorization.length && !authorization.includes(mrole)) {
            return next({ path: "/:catchAll(.*)" });
        }
    }
    next();
});

export default router;
