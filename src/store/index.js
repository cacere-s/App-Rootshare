import { createStore } from "vuex";

// modules import

export default createStore({
  state: {
    dialogProperties: false,
    token: null,
    dataBase: [],
    dashboardDB: []
  },
  getters: {},
  mutations: {
    setDialogProperties(state, payload) {
      state.dialogProperties = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setDataBase(state, payload) {
      state.dataBase = payload;
    },
    setDashBoard(state, payload) {
      state.dashboardDB = payload;
    },
  },
  actions: {
    async actionsProperties({ commit }, payload) {
      await commit("setDialogProperties", payload);
    }, 

    async authToken({ commit }) {
      if ($cookies.get("_token")) {
        await commit("setToken", $cookies.get("_token"));
      } else {
        await commit("setToken", null);
      }
    },

  },
  modules: {},
});