import _axios from 'axios';

export const PRODUCTION_BASE_URL = 'https://steady-seunghun.vercel.app/api';
export const DEVELOPMENT_BASE_URL = 'http://localhost:3000/api';

export const getBaseURL = () => {
  const env = process?.env?.NEXT_PUBLIC_ENV ?? 'local';
  switch (env) {
    case 'local':
      return DEVELOPMENT_BASE_URL;
    case 'production':
      return PRODUCTION_BASE_URL;
    default:
      return DEVELOPMENT_BASE_URL;
  }
};

const axios = _axios.create({ baseURL: getBaseURL() });
axios.defaults.withCredentials = true;

axios.interceptors.response.use(function (config) {
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error.response && location.pathname !== '/404') {
    //   location.href = '/notFound';
    //   return new Promise(() => {});
    // }
    return Promise.reject(error);
  },
);

export const setAxiosHeader = (key: string, value: string) => {
  axios.defaults.headers.common[key] = value;
};

export { axios };
