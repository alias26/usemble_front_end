import axios from "axios";
import qs from "qs";

function login(member) {
    return axios.post("/member/login", qs.stringify(member));
}

export default {
    login,
};
