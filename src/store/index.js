import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';

Vue.use(Vuex)

// const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    message: { text: '', status: false,},
		isLoading: false,
		isOverlay: false,
  },
  getters: {
    message: state => state.message,
		isLoading: state => state.isLoading,
		isOverlay: state => state.isOverlay,
  },
  actions: {
		async setMessage({ commit }, payload) {
			commit('SET_MESSAGE', payload);
		},
    async isLoading({ commit }, payload) {
			commit('IS_LOADING', payload);
		},
    async isOverlay({ commit }, payload) {
			commit('IS_OVERLAY', payload);
		},
  },
  mutations: {
		SET_MESSAGE(state, payload) {
			state.message.text = payload.text || '';
			state.message.status = payload.status || '';
		},
    IS_LOADING(state, isLoading) {
			state.isLoading = isLoading;
		},
    IS_OVERLAY(state, isOverlay) {
			state.isOverlay = isOverlay;
		},
  },
  modules: {
    user,
  }
})

// export default store;