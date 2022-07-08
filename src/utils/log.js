/* eslint-disable no-console */
import { COLOR_REQUEST } from "@/definition/constants";
import { getTimeCurrent } from "@/utils/helper";
import ErrorType from "@/definition/ErrorType";

const log = (...params) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...params);
  }
};

const warn = (...params) => {
  if (process.env.NODE_ENV === "development") {
    console.warn(...params);
  }
};

const requestLog = (method, url, data, res = {}) => {
  if (process.env.NODE_ENV === "development") {
    const colors = COLOR_REQUEST;
    const isError =
      res?.status !== ErrorType.HTTP_200 &&
      res?.response?.status !== ErrorType.HTTP_200;
    const icons = method.toUpperCase() === "DELETE" || isError ? "XXX" : ">>>";
    const time = getTimeCurrent();
    const statusCode = res?.status || res?.response?.status;

    console.log(
      `%c${time} %c[${icons}] [${method.toUpperCase()} | ${statusCode}] %c=> ${url} \n`,
      "color: blue",
      `color: ${
        isError ? colors.DELETE : colors[method.toUpperCase()]
      }; font-weight: bold`,
      "color: red;font-weight: bold",
      "params: ",
      data,
      "\n",
      "response: ",
      res
    );
  }
};

export default {
  log,
  warn,
  requestLog,
};
