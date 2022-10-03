import * as http from "../http/http";

const urlApi = 'http://localhost:3000/products'

export const getAllProducts = async () => {
    try {
        const res = await http.get(urlApi);
        return res;
    } catch (err) {
        console.error(err);
    }
}
export const detailProducts = async (id) => {
    try {
        const res = await http.get(`${urlApi}/${id}`);
        return res;
    } catch (err) {
        console.error(err);
    }
}
export const searchByKey = async (keyWord) => {
    try {
        const res = await http.get(`${urlApi}?name_like=${keyWord}&_limit=4`);
        return res;
    } catch (err) {
        console.error(err);
    }
}
export const filterByKey = async (filterKey) => {
    try {
        const res = await http.get(`${urlApi}?${filterKey}`);
        return res;
    } catch (err) {
        console.error(err);
    }
}

