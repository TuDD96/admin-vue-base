/* eslint-disable no-unused-vars */
import apiCaller from "@/utils/api";
import AuthToken from "@/utils/token";

export default {
  GET_LIST_ALGORITHM_QUESTION: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        `/api/algorithmQuestion?page=${payload.params.currentPage}`,
        payload,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  GET_EDIT_ALGORITHM_QUESTION: ({ commit }, questionId) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        `/api/algorithmQuestion/${questionId}/edit`,
        null,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  UPDATE_ALGORITHM_QUESTION: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.putRequest(
        `/api/algorithmQuestion/${payload.questionId}`,
        payload.data,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  CREATE_ALGORITHM_QUESTION: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.postRequest(
        "/api/algorithmQuestion",
        payload.data,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  DELETE_ALGORITHM_QUESTION: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.deleteRequest(
        `/api/algorithmQuestion/${payload.questionId}`,
        null,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  GENERATE_EXAM: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        "/api/algorithmQuestion/random",
        payload,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  GET_LIST_CANDIDATE: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        "/api/candidates",
        payload,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  GET_DETAIL_CANDIDATE: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        `/api/candidates/${payload.id}`,
        null,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },

  getAuth({ commit }) {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        "/api/auth",
        "",
        (response) => {
          commit("setRole", response.data.data.role);
          commit("setAuth", response.data.data);
          commit("setToken", response.data.data.api_token);
          resolve(response.data);
        },
        (err) => {
          AuthToken.removeToken();
          reject(err.response.data);
        }
      );
    });
  },

  login({ commit }, credential) {
    return new Promise((resolve, reject) => {
      apiCaller.postRequest(
        "/api/login",
        credential,
        (response) => {
          commit("setToken", response.data.data.access_token);
          AuthToken.setToken(response.data.data.access_token);
          resolve(response);
        },
        (err) => {
          reject(err.response.data);
        }
      );
    });
  },

  logout({ commit }) {
    return new Promise((resolve) => {
      commit("removeToken");
      AuthToken.removeToken();
      resolve();
    });
  },
};
