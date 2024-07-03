import axios from "axios";
import qs from "qs";

function writeSocial(formData) {
    return axios.post("/social/write", formData);
}

function getSocialList(pageNo, ctno, sort) {
    return axios.get("/social/list" + "?pageNo=" + pageNo + "&ctno=" + ctno + "&sort=" + sort);
}

export default {
    writeSocial,
    getSocialList,
};
