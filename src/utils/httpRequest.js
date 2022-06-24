import axios from 'axios';
console.log(process.env);
export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (url, options = {}) => {
    const res = await request.get(url, options);
    return res.data;
};
