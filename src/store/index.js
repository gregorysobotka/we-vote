import Vue from 'vue';
import Vuex from 'vuex';

const Cookies = require('js-cookie');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: ''
  },
  getters: {
    savedAPIKey(state) {
      const apiKeyCookie = Cookies.get('apiKey');

      if (state.apiKey !== '') {
        return state.apiKey;
      } else if (apiKeyCookie) {
        return apiKeyCookie;
      }

      return '';
    }
  },
  mutations: {
    saveAPIKey(state, apiKey) {
      Cookies.set('apiKey', apiKey, { expires: 7 });
      this.state.apiKey = apiKey;
    }
  },
  actions: {},
  modules: {}
});
