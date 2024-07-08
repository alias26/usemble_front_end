import axios from "axios";
import qs from "qs";

function writeSocial(formData) {
    return axios.post("/social/write", formData);
}

function getSocialList(pageNo, ctno, sort) {
    return axios.get("/social/list" + "?pageNo=" + pageNo + "&ctno=" + ctno + "&sort=" + sort);
}

function mainSocial() {
    return axios.get("/social/mainSocial");
}

function getSocial(sno) {
    return axios.get("/social/read/" + sno);
}

function getSjoinCnt(sno) {
    return axios.get("/social/sjoin/count/" + sno);
}

function updateSocialStatus(sno, sstatus) {
    return axios.patch("/social/update/" + sno + "/" + sstatus);
}

function getSpayInfo(sno) {
    return axios.get("/social/pay/" + sno);
}

function joinSocial(sjoin) {
    return axios.post("/social/sjoin", sjoin);
}

function getSjoinState(mid, sno) {
    return axios.get("/social/sjoin/state?mid=" + mid + "&sno=" + sno);
}

function cancelSocialJoin(mid, sno) {
    return axios.delete("/social/sjoin/cancel?mid=" + mid + "&sno=" + sno);
}

function getJoinHistory(pageNo, mid) {
    return axios.get("/social/history/join?mid=" + mid + "&jPageNo=" + pageNo);
}

function getRecruitHistory(pageNo, mid) {
    return axios.get("/social/history/recruit?mid=" + mid + "&rPageNo=" + pageNo);
}

function getJoinMemberList(sno) {
    return axios.get("/social/sjoin/list/" + sno);
}

function isDeadline(sno) {
    return axios.get("/social/deadline/" + sno);
}

function refuseJoinMember(mid, sno) {
    return axios.delete("/social/sjoin/refuse?mid=" + mid + "&sno=" + sno);
}

function applyAssemble(mid) {
    return axios.get("/social/apply?mid=" + mid);
}

function recruitAssemble(mid) {
    return axios.get("/social/recruit?mid=" + mid);
}

function mainCateSocial(mid) {
    return axios.get("/social/mainCateSocial?mid=" + mid);
}

function getSearchList(keyword) {
    return axios.get("/social/search", {params: {keyword: String(keyword)}});
}

export default {
    writeSocial,
    getSocialList,
    mainSocial,
    getSocial,
    getSjoinCnt,
    updateSocialStatus,
    getSpayInfo,
    joinSocial,
    getSjoinState,
    cancelSocialJoin,
    getJoinHistory,
    getRecruitHistory,
    getJoinMemberList,
    isDeadline,
    refuseJoinMember,
    applyAssemble,
    recruitAssemble,
    mainCateSocial,
    getSearchList,
};
