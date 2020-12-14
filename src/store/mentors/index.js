/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

import state from './state'
import * as mutations from './mutations'
//import * as actions from './actions'
//import * as getters from './getters'


const actions = {
  async registerMentor(context, data) {
    const mentorData = {
    userId: context.getters.userId,
     firstName: data.firstName,
     lastName: data.lastName,
     email: data.email,
     avatar: data.avatar,
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
    console.log('RESPONSE' + ' ' + res.data.mentor);
    context.commit('setMentorId', res.data.mentor)
    context.commit('registerMentor', {...mentorData})
    }).catch(err => {
    console.log(err.response);
    });

    
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

      
  },

  async loadOneMentor(context) {
    const id = context.getters.mentorId
    await axios.get(`http://localhost:5000/api/mentor/${id}`, {
     headers: {
           // remove headers
         }
       }).then(res => {
         console.log('ONE MENTOR' + '' + JSON.stringify(res.data) )
        // localStorage.setItem('oneMentor', JSON.stringify(res.data))
         context.commit('setOneMentor', res.data)
       }).catch(err => {
         console.log(err.response);
        // localStorage.removeItem('oneMentor')
       });
 
       
   },
  async signup(context, payload){
    const userData = {
        email: payload.email,
        password: payload.password,     
       }
await axios.post('http://localhost:5000/api/user/register',userData)
.then(res => {
    console.log(res.data.user);
    context.commit('setUser', {
    userId: res.data.user._id
})
})
.catch(err => {
    console.log(err.response);
})

},


async updateMentor(context, data) {
  const id = context.getters.mentorId
  const mentorData = {
    userId: context.getters.userId,
   firstName: data.firstName,
   lastName: data.lastName,
   email: data.email,
   avatar: data.avatar,
   title: data.title,
   presentation: data.presentation,
   technos: data.technos,
   socials: data.socials      
  };


  await axios.patch(`http://localhost:5000/api/mentors/${id}`, mentorData, {
  headers: {
    // remove headers
  }
  }).then(res => {
  console.log(res);
  context.commit('setOneMentor', mentorData)
  }).catch(err => {
  console.log(err.response.data);

  });

  
},




async login(context, payload){
  const userData = {
      email: payload.email,
      password: payload.password,     
     }
await axios.post('http://localhost:5000/api/user/login',userData)
.then(res => {
  console.log(res.data);
  localStorage.setItem('user-token', res.data.token)
  localStorage.setItem('userId', res.data.user._id)
  localStorage.setItem('user-email', res.data.user.email)
  context.commit('setUser', {
  token: res.data.token,
  userId: res.data.user._id,
  userAuth : res.data.user.email
})
})
.catch(err => {
  console.log(err.response.data);
  localStorage.removeItem('user-token')
  localStorage.removeItem('user-email')
  localStorage.removeItem('userId')
})

},
logout(context) {
  localStorage.removeItem('user-token')
  localStorage.removeItem('user-email')
  localStorage.removeItem('mentor-id')
  localStorage.removeItem('userId')
  context.commit('setOneMentor', null)
  context.commit('setUser', {
    token: null,
    userId: null,
    userAuth: null
    
  })
}
 

};

const getters = {

  oneMentor: (state) => {
    return state.oneMentor
  },

  
   hasMentors: (state) => {
    return state.mentors && state.mentors.length > 0
  },

  
   allTechnos: (state) => {
    return state.technos
  },


   token : (state) => {
  return state.token;
},


 isAuth : (state) => {
  return !!state.token;
},


 userAuth : (state) => {
  return state.userAuth;
},


 userId : (state) => {
  return state.userId;
},


 mentorId : (state) => {
  const  mentors = state.mentors
const userId =   state.userId
  const thisMentors =  mentors?.find(mentor => mentor.userId === userId ) 
  return state.mentorId ?? thisMentors?._id 
  
},


 isMentor : state => {
  //const  mentors =  state.mentors
  //const userId =  state.userId
  //return mentors?.some(mentor => mentor.userId === userId ) ?? null
  const  mentors =  state.mentors
const userId =  state.userId
  return   mentors.find(mentor => mentor.userId === userId ) 
 // const length = thisMentors?._id.length ?? 0
  // return length > 1 ? true : false
}




  








}



export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });