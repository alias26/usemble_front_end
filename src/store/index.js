import { createStore } from "vuex";

export default createStore({
    state: { mid: "myeong1709@naver.com", mname: "김명환" },
    getters: {
        getMid(state, getters, rootState, rootGetters) {
            return state.mid;
        },
        getMname(state, getters, rootState, rootGetters) {
            return state.mname;
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});

