import axios from 'axios';
import faker from 'faker';

import config from 'src/config';

const backendAxios = axios.create({
  baseURL: config.backEndBaseUrl,
  headers: {
    clientId: 'client1',
    'request-id': faker.random.uuid(),
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
