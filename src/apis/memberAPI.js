import axios from "axios";
import qs from "qs";

function login(member) {
    return axios.post("/member/login", qs.stringify(member));
}
function join(member) {
    //multipart/form-data로 데이터 전송
    return axios.post("/member/join", member);
}

export default {
    login,
    join,
};
