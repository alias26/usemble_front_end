import axiosConfig from "@/apis/axiosConfig";
import { createStore } from "vuex";

export default createStore({
    state: { mid: "", mname: "", accessToken: "" },
    getters: {
        getMid(state, getters, rootState, rootGetters) {
            return state.mid;
        },
        getMname(state, getters, rootState, rootGetters) {
            return state.mname;
        },
        getAccessToken(state, getters, rootState, rootGetters) {
            return state.accessToken;
        },
    },
    mutations: {
        setMid(state, payload) {
            state.mid = payload;
        },
        setMname(state, payload) {
            state.mname = payload;
        },
        setAccessToken(state, payload) {
            state.accessToken = payload;
        },
    },
    actions: {
        loginAction(context, payload) {
            new Promise((resolve, reject) => {
                if (payload.result == "success") {
                    resolve({ result: "success", mid: payload.mid });
                } else {
                    reject({ result: "fail", reason: "password is wrong" });
                }
            })
                .then((data) => {
                    context.commit("setMid", data.mid);
                })
                .catch((error) => {
                    console.log("로그인 실패");
                });
        },
        loadAuth(context, payload) {
            const localMid = localStorage.getItem("mid") || "";
            const localMname = localStorage.getItem("mname") || "";
            const localAccessToken = localStorage.getItem("accessToken") || "";

            const sessionMid = sessionStorage.getItem("mid") || "";
            const sessionMname = sessionStorage.getItem("mname") || "";
            const sessionAccessToken = sessionStorage.getItem("accessToken") || "";

            const mid = localMid || sessionMid;
            const mname = localMname || sessionMname;
            const accessToken = localAccessToken || sessionAccessToken;

            context.commit("setMid", mid);
            context.commit("setMname", mname);
            context.commit("setAccessToken", accessToken);

            if (accessToken !== "") {
                axiosConfig.addAuthHeader(accessToken);
            }
        },
        saveAuthLocal(context, payload) {
            context.commit("setMid", payload.mid);
            context.commit("setMname", payload.mname);
            context.commit("setAccessToken", payload.accessToken);

            localStorage.setItem("mid", payload.mid);
            localStorage.setItem("mname", payload.mname);
            localStorage.setItem("accessToken", payload.accessToken);
            axiosConfig.addAuthHeader(payload.accessToken);
        },
        saveAuthSession(context, payload) {
            context.commit("setMid", payload.mid);
            context.commit("setMname", payload.mname);
            context.commit("setAccessToken", payload.accessToken);

            sessionStorage.setItem("mid", payload.mid);
            sessionStorage.setItem("mname", payload.mname);
            sessionStorage.setItem("accessToken", payload.accessToken);
            axiosConfig.addAuthHeader(payload.accessToken);
        },
        deleteAuth(context, payload) {
            context.commit("setMid", "");
            context.commit("setMname", "");
            context.commit("setAccessToken", "");
            localStorage.removeItem("mid");
            localStorage.removeItem("mname");
            localStorage.removeItem("accessToken");
            sessionStorage.removeItem("mid");
            sessionStorage.removeItem("mname");
            sessionStorage.removeItem("accessToken");
            axiosConfig.removeAuthHeader();
        },
    },
    modules: {},
});

