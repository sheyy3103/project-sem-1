import axios from 'axios';

const URL = "http://localhost:3000/users";

export const register = (user) => {
    return axios.post(URL, user);
}

export const getUsers = () => {
    return axios.get(URL);
}