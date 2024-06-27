import axios from "axios";
import qs from "qs";

function login(member) {
    return axios.post("/member/login", qs.stringify(member));
}

function join(formData) {
    //multipart/form-data로 데이터 전송
    return axios.post("/member/join", formData);
}

function findPassword(mid) {
    //multipart/form-data로 데이터 전송
    return axios.patch("/member/findPassword?mid=" + mid);
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

function getSocialCnt(mid) {
    return axios.get("/member/socialCnt?mid=" + mid);
}

function getReviewCnt(mid) {
    return axios.get("/member/reviewCnt?mid=" + mid);
}

function insertLike(mid, fmid) {
    return axios.post("/member/like?mid=" + mid + "&fmid=" + fmid);
}

function deleteLike(mid, fmid) {
    return axios.delete("/member/unlike?mid=" + mid + "&fmid=" + fmid);
}

function withdrawMember(mid) {
    return axios.patch("/member/withdraw?mid=" + mid);
}

function idCheck(mid) {
    return axios.get("/member/idCheck?mid=" + mid);
}

function memberAttachDownload(mid) {
    return axios.get("/member/mattach/" + mid, { responseType: "blob" });
}
function getCategory() {
    return axios.get("/member/category");
}

function getPrivacy(mid) {
    return axios.get("/member/privacy?mid=" + mid);
}

function updatePrivacy(member) {
    return axios.patch("/member/updatePrivacy", member);
}

function updatePassword(member) {
    return axios.patch("/member/updatePassword", qs.stringify(member));
}

function updateProfile(member) {
    return axios.patch("/member/updateProfile", member);
}

function updateAgree(member) {
    return axios.patch("/member/updateAgree", member);
}

export default {
    login,
    join,
    findPassword,
    getUserProfileList,
    getUserProfile,
    getLikeState,
    getLikeCnt,
    getSocialCnt,
    getReviewCnt,
    insertLike,
    deleteLike,
    withdrawMember,
    idCheck,
    memberAttachDownload,
    getCategory,
    getPrivacy,
    updatePrivacy,
    updatePassword,
    updateProfile,
    updateAgree,
};
