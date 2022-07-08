import axios from "axios";
import AuthToken from "./token";
import { SERVER_BASE_URL } from "./urls";
import logger from "@/utils/log";
import axiosRetry from "axios-retry";
import ErrorType from "@/definition/ErrorType";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosRetry(http, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 2000,
  retryCondition: (error) => {
    // handle case refresh token here

    return error.response.status === ErrorType.HTTP_503;
  },
});

http.interceptors.request.use(
  (config) => {
    const token = AuthToken.getToken();
    if (token) config.headers.common["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

const postRequest = (url, data, resolve, reject) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .post(requestUrl, { ...data })
    .then((res) => {
      logger.requestLog("post", requestUrl, data, res);
      resolve(res);
    })
    .catch((error) => {
      logger.requestLog("post", requestUrl, data, error);
      reject(error);
    });
};

const getRequest = (url, data, resolve, reject) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .get(requestUrl, { ...data })
    .then((res) => {
      logger.requestLog("get", requestUrl, { ...data }, res);
      resolve(res);
    })
    .catch((error) => {
      logger.requestLog("get", requestUrl, data, error);
      reject(error);
    });
};

const putRequest = (url, data, resolve, reject) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .put(requestUrl, { ...data })
    .then((res) => {
      logger.requestLog("put", requestUrl, data, res);
      resolve(res);
    })
    .catch((error) => {
      logger.requestLog("put", requestUrl, data, error);
      reject(error);
    });
};

const patchRequest = (url, data, resolve, reject) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .patch(requestUrl, { ...data })
    .then((res) => {
      logger.requestLog("patch", requestUrl, data, res);
      resolve(res);
    })
    .catch((error) => {
      logger.requestLog("patch", requestUrl, data, error);
      reject(error);
    });
};

const deleteRequest = (url, data, resolve, reject) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .delete(requestUrl, { ...data })
    .then((res) => {
      logger.requestLog("delete", requestUrl, data, res);
      resolve(res);
    })
    .catch((error) => {
      logger.requestLog("delete", requestUrl, data, error);
      reject(error);
    });
};

export default {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
};
