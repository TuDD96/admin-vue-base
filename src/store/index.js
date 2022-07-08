import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";

const requireContext = require.context("./modules", false, /.*\.js$/);

const storeModule = requireContext
  .keys()
  .map((file) => [file.replace(/(^.\/)|(\.js$)/g, ""), requireContext(file)])
  .reduce((modules, [name, moduleItem]) => {
    if (moduleItem.namespaced === undefined) {
      moduleItem.namespaced = true;
    }

    return { ...modules, [name]: moduleItem.default };
  }, {});
// Create a new store instance.
const store = {
  modules: storeModule,
  state: {
    loading: false,
  },
  mutations: {
    setLoading: (state, value) => {
      state.loading = value;
    },
  },
  actions,
  getters,
};

export default createStore(store);
