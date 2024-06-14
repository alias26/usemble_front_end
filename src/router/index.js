import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import { compile } from "vue";
import GuideList from "../views/FooterPage/GuideList.vue";
import NoticeList from "@/views/FooterPage/NoticeList.vue";
import NoticeDetail from "@/views/FooterPage/NoticeDetail.vue";
import PolicyPrivacy from "@/views/FooterPage/PolicyPrivacy.vue";
import PolicyUsage from "@/views/FooterPage/PolicyUsage.vue";
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
