/* eslint-disable no-unused-vars */
import apiCaller from "@/utils/api";
import AuthToken from "@/utils/token";
import AuthRole from "@/utils/role";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const state = {
  exampleState: "example",
  exampleData: null,
  loading: false,
  auth: null,
  token: "",
  role: "",
};

const getters = {
  GET_EXAMPLE_STATE: (state) => state.exampleState,
  token: (state) => state.token,
  auth: (state) => state.auth,
  role: (state) => state.role,
};

const mutations = {
  SET_EXAMPLE_STATE: (state, status) => {
    state.exampleState = status;
  },
  SET_DEMO: (state, data) => {
    state.exampleData = data;
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
  },
};

const actions = {
  getAuth({ commit }) {
    return new Promise((resolve, reject) => {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit("setAuth", user);
          resolve(user);
        } else {
          reject(null);
        }
      });
    });
  },

  login({ commit }, credential) {
    return new Promise((resolve, reject) => {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, credential.email, credential.password)
        .then((data) => {
          console.log(data);
          commit("setToken", data.user.accessToken);
          AuthToken.setToken(data.user.accessToken);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  loginPhone({ commit }, phone) {
    return new Promise((resolve, reject) => {
      const auth = getAuth();

      signInWithPhoneNumber(auth, "+84963636837")
        .then((confirmationResult) => {
          console.log(confirmationResult);
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          console.log(error);
          // Error; SMS not sent
          // ...
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve) => {
      commit("removeToken");
      AuthToken.removeToken();
      resolve();
    });
  },

  changePassword({ commit }, credential) {
    return new Promise((resolve, reject) => {
      apiCaller.postRequest(
        "/api/changePassword",
        credential,
        (response) => {
          commit("setToken", response.data.data.access_token);
          AuthToken.setToken(response.data.data.access_token);
          resolve(response);
          resolve(response);
        },
        (err) => {
          reject(err.response.data);
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
