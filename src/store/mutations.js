export default {
  SET_EXAMPLE_STATE: (state, status) => {
    state.exampleState = status;
  },
  SET_DEMO: (state, data) => {
    state.exampleData = data;
  },
  setLoading: (state, value) => {
    state.loading = value;
  },
  setToken(state, token) {
    state.token = token;
  },
  removeToken(state) {
    state.token = null;
  },
  setAuth(state, auth) {
    state.auth = auth;
  },
  setRole(state, role) {
    state.role = role;
  }
};
