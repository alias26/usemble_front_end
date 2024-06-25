import axios from "axios";
import qs from "qs";

function login(member) {
    return axios.post("/member/login", qs.stringify(member));
}

function join(member) {
    //multipart/form-data로 데이터 전송
    return axios.post("/member/join", member);
}

function getUserProfileList(mid) {
    return axios.get("/member/likeList?mid=" + mid);
}

function getUserProfile(mid) {
    return axios.get("/member/profile?mid=" + mid);
}

function getLikeState(mid, fmid) {
    return axios.get("/member/likeState?mid=" + mid + "&fmid=" + fmid);
}

function getLikeCnt(mid) {
    return axios.get("/member/likeCnt?mid=" + mid);
}

function insertLike(mid, fmid) {
    return axios.post("/member/like?mid=" + mid + "&fmid=" + fmid);
}

function deleteLike(mid, fmid) {
    return axios.delete("/member/unlike?mid=" + mid + "&fmid=" + fmid);
}

export default {
    login,
    join,
    getUserProfileList,
    getUserProfile,
    getLikeState,
    getLikeCnt,
    insertLike,
    deleteLike,
};
