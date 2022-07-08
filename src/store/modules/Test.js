/* eslint-disable no-unused-vars */
import apiCaller from "@/utils/api";
import { MOCK } from "@/utils/urls";

const state = {
  test: 1,
};

const getters = {
  GET_TEST_STATE: (state) => state.test,
};

const mutations = {
  setTest(state, value) {
    state.test = value;
  },
};

const actions = {
  MOCK_200: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        MOCK.MOCK_200,
        data,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  MOCK_401: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        MOCK.MOCK_401,
        data,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  MOCK_403: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        MOCK.MOCK_403,
        data,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  MOCK_404: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        MOCK.MOCK_404,
        data,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  MOCK_500: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        MOCK.MOCK_500,
        data,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  MOCK_503: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        MOCK.MOCK_503,
        data,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
