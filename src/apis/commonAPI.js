import axios from "axios";
import qs from "qs";

function imageUpload(formData) {
    return axios.post("/img/upload", formData);
}

export default {
    imageUpload,
};
