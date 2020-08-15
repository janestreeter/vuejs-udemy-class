import Vue from 'Vue'
import Vuex from 'vuex'
import axios from './axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signUp ({commit}, authData) {
      axios.post('/accounts:signInWithCustomToken?key=AIzaSyD2Ve_Qyu3GhUkugE20zM60xS_Q7zGQbxE', {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
    },
    login ({commit}, authData) {

    }
  },
  getters: {

  }
})