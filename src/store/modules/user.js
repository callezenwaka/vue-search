'use strict'

import userApi from '@/services/userApi';

const state = {
  users: [],
	user: {},
};

const getters = {
	users: state => state.users,
	user: state => state.user,
	userById: state => id => {
		return state.users.find(user => user.id === id)
	},
};

const actions = {
  async addUser(context, payload) {
    try {
      // api call
      const data = await userApi.addUser(payload);
      await context.dispatch('setMessage', {text: `User add successful!`, status: true});
      await context.dispatch('getUsers');
      return data;
    } catch (err) {
      await context.dispatch('setMessage', {text: err.message || `User add failed!`, status: false});
      return;
    }
  },
  async getUsers(context, payload) {
    try {
      // api call
      const data= await userApi.getUsers(payload.keyword);
      await context.commit('GET_USERS', data );
      await context.dispatch('setMessage', {text: 'Users fetch successful!', status: true});
      return data;
    } catch (err) {
      await context.dispatch('setMessage', {text: err.message || `Users fetch failed!`, status: false});
      return;
    }
  },
  async getUser(context, payload) {
    try {
      // api call
      const data = await userApi.getUser(payload);
      await context.commit('GET_USER', data)
      await context.dispatch('setMessage', {text: 'User fetch successful!', status: true});
      return data;
    } catch (err) {
      await context.dispatch('setMessage', {text: err.message || `User fetch failed!`, status: false});
      return;
    }
  },
  async updateUser(context, payload) {
    try {
      // api call
      const data = await userApi.updateUser(payload);
      await context.commit('UPDATE_USER', payload);
      await context.dispatch('setMessage', {text: data, status: true});
      await context.dispatch('getuser', payload.id);
      return data;
    } catch (err) {
      await context.dispatch('setMessage', {text: err.message || `User update failed!`, status: false});
      return;
    }
  },
  async deleteUser(context, payload) {
    try {
      // api call
      const data = await userApi.deleteUser(payload);
      await context.dispatch('setMessage', {text: `User delete successful!`, status: true});
      await context.commit('DELETE_USER', payload);
      return data;
    } catch (err) {
      await context.dispatch('setMessage', {text:  err.message || `User delete failed!`, status: false});
      return;
    }
  },
};

const mutations = {
  ADD_USER(state, user) {
    state.users.unshift(user);
  },
  GET_USER(state, user) {
    state.user = user;
  },
  GET_USERS(state, users) {
    state.users = users;
  },
  UPDATE_USER(state, payload) {
    const index = state.users.findIndex(user => user.id === payload.id);
    if (index !== -1) {
      state.users.splice(index, 1, payload);
    }
  },
  DELETE_USER(state, payload) {
    state.users = state.users.filter(user => user.id !== payload);
  },
};

export default {
	state,
	getters,
	actions,
	mutations
};