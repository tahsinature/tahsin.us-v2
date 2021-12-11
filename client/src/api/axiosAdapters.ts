import axios from 'axios';
import config from '../config';
import faker from 'faker';

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
