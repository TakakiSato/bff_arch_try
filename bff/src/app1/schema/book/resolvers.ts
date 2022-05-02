import axios, { AxiosRequestConfig } from "axios";

const url = 'http://backend/app1/books.json';
const options: AxiosRequestConfig = {
  url: `${url}`,
  method: "GET",
};

export const getBookList = async () => {
    const res = await axios(options);
    return await res.data;
}
