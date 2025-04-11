import { createStore } from "vuex";
import roles from "./modules/roles";

export default createStore({
  state: {
    isLoggedIn: false,
    user: null,
    modules: {
      roles,
    },
  },

  mutations: {
    setLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    login({ commit }, user) {
      commit("setLoggedIn", true);
      commit("setUser", user);
    },

    logout({ commit }) {
      commit("setLoggedIn", false);
      commit("setUser", null);
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      localStorage.removeItem("loggedInUser");
      sessionStorage.removeItem("loggedInUser");
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,
    userRole: (state) => state.user?.role || null,
    currentUserName: (state) => {
      return state.user.name || "user";
    },
  },
  modules: {},
});
