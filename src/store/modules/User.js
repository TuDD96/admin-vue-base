/* eslint-disable no-unused-vars */
import apiCaller from "@/utils/api";

const state = {};

const getters = {};

const mutations = {};

const actions = {
  GET_DETAIL_USER: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        `/api/users/${payload.id}`,
        null,
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  UPDATE_USER: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.postRequest(
        `/api/users/${payload.userId}`,
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
  GET_USER_OPTIONS: ({ commit }) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        "/api/users/getDataOptions",
        null,
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  GET_TEMPORARY_AVATAR: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      apiCaller.postRequest(
        "/api/users/temporaryUrlAvatar",
        payload.data,
        (res) => {
          resolve(res.data);
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
