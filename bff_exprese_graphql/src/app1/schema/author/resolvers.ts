import axios, { AxiosRequestConfig } from "axios";

const url = 'http://backend/app1/authors.json';
const options: AxiosRequestConfig = {
  url: `${url}`,
  method: "GET",
};

export const getAuthorList = async (): Promise<Array<object>> => {
    const res = await axios(options);
    return await res.data;
}

export const createAuthor = ({ name }: { name: string;}) => {
  //実際はbackendちゃんと作ってpostに投げるなど
  const author = {
    id: getAuthorList.length + 1,
    name,
  };
  console.log(author)
  console.log(getAuthorList.length)
  console.log('createAuthor')
  return true
};