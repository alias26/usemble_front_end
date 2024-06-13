import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import { compile } from "vue";
import GuideView from "../views/FooterPage/GuideView.vue";
import NoticeView from "@/views/FooterPage/NoticeView.vue";
import NoticeDetailView from "@/views/FooterPage/NoticeDetailView.vue";
import PolicyPrivacy from "@/views/FooterPage/PolicyPrivacy.vue";
import PolicyUsage from "@/views/FooterPage/PolicyUsage.vue";
import SocialPage from "./SocialPage";
import UserPage from "./UserPage";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/guide",
        name: "guide",
        component: GuideView,
    },
    {
        path: "/notice",
        name: "notice",
        component: NoticeView,
    },
    {
        path: "/notice/detail",
        name: "noticeDetail",
        component: NoticeDetailView,
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
