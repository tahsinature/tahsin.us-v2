import axios from 'axios';

import config from 'src/config';

const backendAxios = axios.create({
  baseURL: config.backEndBaseUrl,
  headers: {
    clientId: 'client1',
  },
});

backendAxios.interceptors.response.use(
  res => res,
  function (error) {
    return Promise.reject(error);
  },
);

const axiosAdapters = {
  backendAxios,
};

export default axiosAdapters;
