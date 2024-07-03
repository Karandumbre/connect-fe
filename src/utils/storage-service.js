import Cookies from 'universal-cookie';

// constants
import { ACCESS_TOKEN } from 'src/constants/storage.constants';

const cookies = new Cookies();

// eslint-disable-next-line func-names
Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

// eslint-disable-next-line func-names
Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
};

const getObject = (key) => sessionStorage.getObject(key);

const setObject = (key, value) => sessionStorage.setObject(key, value);

const getItem = (key) => sessionStorage.getItem(key);

const setItem = (key, value) => sessionStorage.setItem(key, value);

const setAccessToken = (token) => {
  const current = new Date();
  const nextYear = new Date();
  nextYear.setDate(current.getDate() + 30);
  cookies.set(ACCESS_TOKEN, token, { path: '/', expires: nextYear });
};

const setToken = (token) => {
  const current = new Date();
  const nextYear = new Date();

  nextYear.setDate(current.getDate() + 30);

  cookies.set(ACCESS_TOKEN, token, { path: '/', expires: nextYear });
};

const getAccessToken = () => cookies.get(ACCESS_TOKEN);

const getCookieValue = (key) => cookies.get(key);

const clearToken = () => {
  cookies.remove(ACCESS_TOKEN);
  sessionStorage.clear();
};

export default {
  setToken,
  setAccessToken,
  getAccessToken,
  clearToken,
  getItem,
  setItem,
  getObject,
  setObject,
  getCookieValue,
};
