import axiosConfig from './interceptor';

export const postData = (urlEndpoint, data, headers) =>
  axiosConfig.post(urlEndpoint, data, {
    headers,
  });

export const getData = (urlEndpoint) => axiosConfig.get(urlEndpoint);

export const putData = (urlEndpoint, data) => axiosConfig.put(urlEndpoint, data);

export const patchData = (urlEndpoint, data) => axiosConfig.patch(urlEndpoint, data);

export const deleteData = (urlEndpoint, data) =>
  axiosConfig.delete(urlEndpoint, {
    headers: {},
    data,
  });
