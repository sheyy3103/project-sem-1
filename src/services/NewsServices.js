import * as http from "../http/http";

const urlApi = 'http://localhost:3000/news'

export const getAllNews = async () => {
    try {
        const res = await http.get(urlApi);
        return res;
    } catch (err) {
        console.error(err);
    }
}
export const getNews = async (page) => {
    try {
        const res = await http.get(`${urlApi}?_limit=3&_page=${page}`);
        return res;
    } catch (err) {
        console.error(err);
    }
}
export const detailsNews = async (id) => {
    try {
        const res = await http.get(`${urlApi}/${id}`);
        return res;
    } catch (err) {
        console.error(err);
    }
}