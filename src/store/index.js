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
    },
    mutations: {
        setMId(state, payload) {
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
    },
    modules: {},
});

