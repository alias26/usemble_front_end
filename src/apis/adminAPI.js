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
function writeNotice(formData) {
    return axios.post("/notice/write", formData);
}
function getNoticeList(pageNo = 1) {
    return axios.get("/admin/noticeList", { params: { pageNo: pageNo } });
}
function getNotice(nno) {
    return axios.get("/notice/read/"+ nno);
}
export default {
    getMemberList,
    getSocialList,
    getReviewList,
    writeNotice,
    getNoticeList,
    getNotice,
};
