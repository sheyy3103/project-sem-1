import axios from 'axios';

const URL = "http://localhost:3000/contact";

export const sendContact = (contact) => {
    return axios.post(URL, contact);
}