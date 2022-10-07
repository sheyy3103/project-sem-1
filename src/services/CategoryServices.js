import * as http from "../http/http";

const urlApi = 'http://localhost:3000/category'


export const getAllCategory = async () => {
    try {
        const res = await http.get(urlApi);
        return res;
    } catch (err) {
        console.error(err);
    }
}