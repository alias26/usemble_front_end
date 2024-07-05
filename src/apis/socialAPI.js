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
};