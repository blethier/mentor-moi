/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

import state from './state'
import * as mutations from './mutations'
//import * as actions from './actions'
import * as getters from './getters'

const actions = {
  async registerMentor(context, data) {
    const mentorData = {
     firstName: data.firstName,
     lastName: data.lastName,
     email: data.email,
     avatar: data.avatar,
     role: data.role,
     title: data.title,
     presentation: data.presentation,
     technos: data.technos,
     socials: data.socials      
    };


    await axios.post('http://localhost:5000/api/mentors', mentorData, {
    headers: {
      // remove headers
    }
    }).then(res => {
    console.log(res);
    }).catch(err => {
    console.log(err.response);
    });

    context.commit('registerMentor', mentorData)
  },

  async loadMentors(context) {
  await axios.get('http://localhost:5000/api/mentors', {
    headers: {
          // remove headers
        }
      }).then(res => {
        context.commit('setMentors', res.data)
      }).catch(err => {
        console.log(err.response);
      });

  }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });