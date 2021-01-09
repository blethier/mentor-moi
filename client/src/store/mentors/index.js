/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  technos : [
    'React js',
    'Php',
    'Symfony',
    'Go',
    'Python',
    'Java',
    'VueJs',
    'Laravel',
    'Wordpress',
    'Magento',
    'C#',
    'C++',
    'Zend',
    'Node Js',
    'Express',
    'SQL',
    'Angular',
    'ASP',
    'CSS',
    'Tailwind CSS',
    'Bootstrap',
    'JQuery',
    'Javascript',
    'Ruby',
    'Swift',
    'React Native',
    'Spring',
    'Flutter',
    'Ionic',
    'Django',
    'Dart',
    'Backbone js',
    'Mongo DB',
    'PostgreSQL',
    'Zend',
    'Test',
    'TDD',
    'AWS',
],
mentors: [],
oneMentor : JSON.parse(localStorage.getItem('oneMentor'))  || {},
token: localStorage.getItem('user-token') || '',
userAuth: localStorage.getItem('user-email') || '',
userId: localStorage.getItem('userId') || '',
}


const actions = {
 

  async loadMentors(context) {
   await axios.get('https://mevn-mentor-moi.herokuapp.com/api/mentors', {
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
    await axios.get(`https://mevn-mentor-moi.herokuapp.com/api/mentor/${id}`, {
     headers: {
           // remove headers
         }
       }).then(res => {
         console.log(res.data)
         localStorage.setItem('oneMentor', JSON.stringify(res.data) )
        // context.commit('setOneMentor', res.data)
       }).catch(err => {
         console.log(err.response);
       });
 
       
   },
  async signup(context, payload){
    const userData = {
        email: payload.email,
        password: payload.password,     
       }
await axios.post('https://mevn-mentor-moi.herokuapp.com/api/user/register',userData)
.then(res => {
    context.commit('setUser', {
    userId: res.data.user._id
})
})
.catch(err => {
    console.log(err.response);
    const error = new Error(err.response.data || 'Email existe déjà')
    throw error;
})

},


/* async updateMentor(context, data) {
  const id = context.getters.mentorId
  const mentorData = {
    userId: context.getters.userId,
   firstName: data.firstName,
   disponible: data.disponible,
   lastName: data.lastName,
   email: data.email,
   avatar: data.avatar,
   title: data.title,
   presentation: data.presentation,
   technos: data.technos,
   socials: data.socials      
  };


  await axios.patch(`https://mevn-mentor-moi.herokuapp.com/api/mentors/${id}`, mentorData, {
  headers: {
    // remove headers
  }
  }).then(res => {
  console.log(res);
  context.commit('setOneMentor', mentorData)
  }).catch(err => {
  console.log(err.response.data);
  });  
}, */




async login(context, payload){
  const userData = {
      email: payload.email,
      password: payload.password,     
     }
await axios.post('https://mevn-mentor-moi.herokuapp.com/api/user/login',userData)
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
  localStorage.removeItem('user-token')
  localStorage.removeItem('user-email')
  localStorage.removeItem('userId')
  console.log(err.response);
  const error = new Error(err.response.data || 'Erreur')
  throw error;
})

},
logout(context) {
  localStorage.removeItem('user-token')
  localStorage.removeItem('user-email')
  localStorage.removeItem('oneMentor')
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


  allMentors: (state) => state.mentors,

  oneMentor: (state) =>  state.oneMentor,

  isMentor : (state) =>  { 
    const  mentors =  state.mentors
  const userId =  state.userId
    const thisMentors =   mentors.find(mentor => mentor.userId === userId ) 
    const length = thisMentors?._id.length ?? 0
     return length > 1 ? true : false
},
  
  // hasMentors: (state) => {
  //  return state.mentors && state.mentors.length > 0
  //},

  
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
  return  thisMentors?._id ?? state.mentorId
  
},


}

const mutations = {

   registerMentor : (state, payload) => {
    return state.mentors.push(payload);
  },


   updateMentor : (state, payload) => {
    return state.mentors.push(payload);
  },

 setMentors : (state, payload) => {
  return state.mentors = payload;
},

 setMentorId : (state, payload) => {
  return state.mentorId = payload;
},

 setOneMentor : (state, payload) => {
  return state.oneMentor = payload;
},

 setErrors : (state, payload) => {
  return state.errors = payload;
},

 setUser : (state, payload) => {
  state.userId = payload.userId
  state.token = payload.token
  state.userAuth = payload.userAuth
      }

      
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });