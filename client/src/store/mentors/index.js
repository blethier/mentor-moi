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
jobs: [
{
  title: 'WEB DESIGNER',
  image: require('@/assets/img/designer.jpg'),
  description: 'Il est en charge de la conception et de la réalisation visuelle d’un site internet. Il va regrouper les éléments essentiels au projet : arborescence du site, architecture, ergonomie, interactivité et charte graphique.'
},
{
  title: 'FRONT-END',
  image: require('@/assets/img/frontend.jpg'),
  description: 'Le développeur Front-End développe les éléments d’un site avec lesquels on peut interagir, il va intervenir à la fois au niveau du design et du développement.'
},
{
  title: 'BACK-END',
  image: require('@/assets/img/backend.jpg'),
  description: 'Le développeur Back-End travaille sur le back-office et sur tous les éléments d’un projet web tel que : configuration et développement serveur, maintenance ou encore bases de données.'
},
{
  title: 'MOBILE',
  image: require('@/assets/img/mobile.jpg'),
  description: 'Le développeur mobile réalise vos applications que ce soit une application uniquement consultable sur smartphone ou la version mobile d’un site internet.'
},
{
  title: 'DEVOPS',
  image: require('@/assets/img/devops.jpg'),
  description: 'De façon très générale, ses tâches principales consistent à mettre en place, gérer et administrer des systèmes informatiques.'
},
{
  title: 'CHEF DE PROJET WEB',
  image: require('@/assets/img/cheffe.jpg'),
  description: 'Le métier de Chef·fe de Projets Web coordonne et dirige un projet web du début à la fin. Il a de larges connaissances dans le secteur du digital et des notions dans les différents secteurs d’activité techniques de ses collaborateurs.'
},
{
  title: 'DATA ANALYST',
  image: require('@/assets/img/analyst.jpg'),
  description: 'Le Data Analyst traite les extractions de bases de données. Il les analyse et se charge de leur interprétation afin que l’entreprise puisse en tirer des améliorations business.'
},
{
  title: 'DATA SCIENTIST',
  image: require('@/assets/img/scientist.jpg'),
  description: 'Il consiste à analyser de manière pointue des données massives, couramment appelées « Big Data », concernant à la fois les clients, les prospects et les employés.'
},
{
  title: 'CHIEF TECHNICAL OFFICER (CTO)',
  image: require('@/assets/img/cto.jpg'),
  description: 'Le CTO est en charge de l’innovation technique et du déploiement de technologies adaptées au développement et à l’efficacité des activités d’une entreprise.'
}
],
articles: [
{
  name : 'Alex Soyes',
  image: require('@/assets/img/alexsoyes.png'),
  link: 'https://alexsoyes.com/'
},
{
  name : 'Rayed Benbrahim',
  image: require('@/assets/img/rayed.png'),
  link: 'https://practicalprogramming.fr/devenir-developpeur/'
},
{
  name : 'Mehdi Zed',
  image: require('@/assets/img/jesuisundev.png'),
  link: 'https://www.jesuisundev.com/'
}
],
mentors: [],
oneMentor :   {},
token: localStorage.getItem('user-token') || '',
userAuth: localStorage.getItem('user-email') || '',
userId: localStorage.getItem('userId') || '',
}


const actions = {

  async loadMentors(context) {
   await axios.get('https://mentor-moi.herokuapp.com/api/mentors', {
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
    await axios.get(`https://mentor-moi.herokuapp.com/api/mentor/${id}`, {
     headers: {
           // remove headers
         }
       }).then(res => {
         localStorage.setItem('firstName', res.data.firstName )
         localStorage.setItem('lastName', res.data.lastName )
         localStorage.setItem('disponible', res.data.disponible )
         localStorage.setItem('avatar', res.data.avatar )
         localStorage.setItem('price', res.data.price )
         localStorage.setItem('presentation', res.data.presentation )
         localStorage.setItem('title', res.data.title )
         localStorage.setItem('socials', res.data.socials )
         localStorage.setItem('technos', res.data.technos )
        context.commit('setOneMentor', res.data)
       }).catch(err => {
         console.log(err.response);
       });
 
       
   },
  async signup(context, payload){
    const userData = {
        email: payload.email,
        password: payload.password,     
       }
await axios.post('https://mentor-moi.herokuapp.com/api/user/register',userData)
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


  await axios.patch(`https://mentor-moi.herokuapp.com/api/mentors/${id}`, mentorData, {
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
await axios.post('https://mentor-moi.herokuapp.com/api/user/login',userData)
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
  localStorage.removeItem('firstName' )
  localStorage.removeItem('lastName')
  localStorage.removeItem('disponible')
  localStorage.removeItem('avatar' )
  localStorage.removeItem('price' )
  localStorage.removeItem('presentation' )
  localStorage.removeItem('title' )
  localStorage.removeItem('socials')
  localStorage.removeItem('technos')
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
  allArticles: (state) => state.articles,
  allJobs: (state) => state.jobs,
  oneMentor: (state) =>  state?.oneMentor,

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
      },
      
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  });