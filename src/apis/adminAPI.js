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

export default {
    getMemberList,
    getSocialList,
    getReviewList,
};
