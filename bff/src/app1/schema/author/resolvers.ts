import axios, { AxiosRequestConfig } from "axios";

const url = 'http://backend/app1/authors.json';
const options: AxiosRequestConfig = {
  url: `${url}`,
  method: "GET",
};

export const getAuthorList = async () => {
    const res = await axios(options);
    return await res.data;
}
