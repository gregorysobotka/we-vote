import Vue from 'vue';
import Vuex from 'vuex';

const Cookies = require('js-cookie');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: ''
  },
  getters: {
    apiKey(state) {
      if (state.apiKey !== '') return state.apiKey;
      const apiKeyCookie = Cookies.get('apiKey');
      return apiKeyCookie;
    }
  },
  mutations: {
    saveAPIKey(state, apiKey) {
      Cookies.set('apiKey', apiKey, { expires: 7 });
    }
  },
  actions: {},
  modules: {}
});
