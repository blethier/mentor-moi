/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const state = {
}
const getters = {
}
const mutations = {
    setUser(state, payload){
state.userId = payload._id
state.token = payload.token
    }
}
const actions = {
    async signup(context, payload){
        const userData = {
            email: payload.email,
            password: payload.password,     
           }
    await axios.post('http://localhost:5000/api/user/register',userData)
    .then(res => {
        console.log(res.data);
        context.commit('setUser', {
        token: res.token
    })
    })
    .catch(err => {
        console.log(err.response);
    })
    
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });