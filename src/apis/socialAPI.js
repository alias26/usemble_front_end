import axios from "axios";
import qs from "qs";

function writeSocial(formData) {
    return axios.post("/social/write", formData);
}

export default {
    writeSocial,
};
