import Axios, { AxiosResponse } from "axios";
import { standardErrorResponse } from "@utils/axios/interceptors/standardError";

const axios = Axios.create({
  baseURL: process.env.GATSBY_FORMIK_API_URL ? process.env.GATSBY_FORMIK_API_URL : "",
  headers: {
    "content-type": "application/json",
  },
  timeout: 10000
});

axios.interceptors.response.use((response: AxiosResponse) => response,
  standardErrorResponse);

export default axios;
