import { createStore } from "vuex";

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

