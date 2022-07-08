/* eslint-disable no-empty-pattern */

const state = {
  errorDetail: false,
};

const getters = {
  errorDetail: (state) => state.errorDetail,
};

const mutations = {};

const actions = {
  SET_ERROR: ({}, value) => {
    this.state.errorDetail = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
