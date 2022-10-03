import axios from "axios";

const http = axios.create();

export const get = async (url, config) => {
    const res = await http.get(url, config);
    return res.data;
}
export const post = async (url, config) => {
    const res = await http.post(url, config);
    return res.data;
}

export default http;