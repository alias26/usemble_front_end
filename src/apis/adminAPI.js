import axios from "axios";
import qs from "qs";

function getMemberList(pageNo = 1) {
    return axios.get("/admin/memberList", { params: { pageNo: pageNo } });
}
function getSocialList(pageNo = 1) {
    return axios.get("/admin/socialList", { params: { pageNo: pageNo } });
}
function getReviewList(pageNo = 1) {
    return axios.get("/admin/reviewList", { params: { pageNo: pageNo } });
}
function writeNotice(notice) {
    return axios.post("/notice/write", notice);
}
function getNoticeList(pageNo = 1) {
    return axios.get("/admin/noticeList", { params: { pageNo: pageNo } });
}
function getNotice(nno) {
    return axios.get("/notice/read/" + nno);
}
function noticeUpdate(notice) {
    return axios.put("/notice/update", notice);
}
function noticeDelete(nno) {
    return axios.delete("notice/delete/" + nno);
}
export default {
    getMemberList,
    getSocialList,
    getReviewList,
    writeNotice,
    getNoticeList,
    getNotice,
    noticeUpdate,
    noticeDelete,
};
