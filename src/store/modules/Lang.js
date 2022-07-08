const state = {
  locale: "vi",
  locales: ["en", "vi"],
};

const getters = {
  // eslint-disable-next-line no-shadow
  locale: (state) => state.locale,
  // eslint-disable-next-line no-shadow
  locales: (state) => state.locales,
};

const mutations = {
  setLocale: (state, value) => {
    state.locale = value;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
