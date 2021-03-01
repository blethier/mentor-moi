/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  technos : [
 ".net", 
 ".netcore", 
 "3d",  
 "accessibilité",
 "adobe",
 "ai",
 "ajax",
 "algorithmes",
 "android", 
 "angular", 
 "angular2", 
 "angularjs", 
 "apache-airflow", 
 "apache-ecosystem", 
 "apache-hadoop", 
 "apache-kafka", 
 "apache-spark", 
 "apex", 
 "api", 
 "api-design",
 "architecture", 
 "arduino", 
 "asp.net", 
 "asp.net core",
 "automatisationon", 
 "aws", 
 "azure", 
 "backend", 
 "bash", 
 "bonnes practiques", 
 "big-data", 
 "blazor", 
 "bootstrap", 
 "c", 
 "c#", 
 "c++", 
 "c-sharp", 
 "conseils carrière",
 "conseils entretien",
  "ci", 
  "clojure", 
  "cloud", 
  "codeigniter", 
  "command line",
   "css", 
   "css-in-js", 
   "d3js", 
   "dart", 
   "data", 
   "data structures", 
   "database", 
   "databases", 
   "ddd", 
   "design", 
   "design system", 
   "devops",
   "django",
   "docker",
   "dotnet",
   "es6",
   "ecommerce",
   "education",
   "elastic search",
   "electron.js",
   "elixir",
   "ember js",
   "express",
   "f-sharp",
   "figma",
   "firebase",
   "flutter",
   "frontend",
   "full-stack",
   "gamedev",
   "gatsby",
   "git",
   "go",
   "golang",
   "graphql",
   "growth hacking",
   "gui",
   "hardware",
   "html",
   "integration",
   "ionic",
   "ios",
   "jamstack",
   "java",
   "javascript",
   "jest",
   "jquery",
   "js", "kafka", "kotlin", "kubernetes", "laravel", "leadership", "linux", "magento", "management", "mean stack", "microservices", "mobile", "mongodb", "mysql", "native", "nestjs", "nextjs", "ngrx", "nodejs", "nosql","nuxt js" ,"performance","php", "postgresql","pug", "pwa", "python", "r", "rails", "react native", "reactjs", "redis", "redux", "rest", "restapi", "restful api", "ruby", "ruby on rails", "rust", "rx", "rxjs", "sass", "scala", "scrum", "securité", "serverless", "spring", "sql","swift","symfony", "sysadmin", "tailwind", "tdd", "tensorflow", "testing", "typescript", "test unitaire", "ui", "unity", "user experience", "ux", "ux/ui",  "vuejs", "web scraping", "wordpress", "xamarin", "xaml"
    
],
jobs: [
{
  title: 'WEB DESIGNER',
  image: require('@/assets/img/designer.jpg'),
  description: 'Il est en charge de la conception et de la réalisation visuelle d’un site internet. Il va regrouper les éléments essentiels au projet : arborescence du site, architecture, ergonomie, interactivité et charte graphique.'
},
{
  title: 'DEVELOPPEUR FRONT-END',
  image: require('@/assets/img/frontend.jpg'),
  description: 'Le développeur Front-End développe les éléments d’un site avec lesquels on peut interagir, il va intervenir à la fois au niveau du design et du développement.'
},
{
  title: 'DEVELOPPEUR BACK-END',
  image: require('@/assets/img/backend.jpg'),
  description: 'Le développeur Back-End travaille sur le back-office et sur tous les éléments d’un projet web tel que : configuration et développement serveur, maintenance ou encore bases de données.'
},
{
  title: 'DEVELOPPEUR MOBILE',
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
  description: 'Le métier de Chef de Projets Web coordonne et dirige un projet web du début à la fin. Il a de larges connaissances dans le secteur du digital et des notions dans les différents secteurs d’activité techniques de ses collaborateurs.'
},
{
  title: 'DATA ANALYST',
  image: require('@/assets/img/analyst.jpg'),
  description: 'Le Data Analyst traite les extractions de bases de données. Il les analyse et se charge de leur interprétation afin que l’entreprise puisse en tirer des améliorations business.'
},
{
  title: 'DATA SCIENTIST',
  image: require('@/assets/img/scientist.jpg'),
  description: 'Son rôle consiste à analyser de manière pointue des données massives, couramment appelées « Big Data », concernant à la fois les clients, les prospects et les employés.'
}
],
articles: [
{
  name : 'Alex Soyes',
  image: require('@/assets/img/alexsoyes.png'),
  link: 'https://alexsoyes.com/'
},
{
  name : 'What The Fabrik',
  image: require('@/assets/img/toucan.png'),
  link: 'https://whatthefabrik.fr/'
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
},
{
  name : 'Nicolas Brondin-Bernard',
  image: require('@/assets/img/nicolas.png'),
  link: 'https://blog.nicolas.brondin-bernard.com/'
},
{
  name : 'Jérémy Mouzin',
  image: require('@/assets/img/jeremy.png'),
  link: 'https://jeremymouzin.com/blog/'
},
{
  name : 'Artisan Développeur',
  image: require('@/assets/img/artisan.png'),
  link: 'https://artisandeveloppeur.fr/blog/'
},
{
  name : 'ITER',
  image: require('@/assets/img/iter.png'),
  link: 'https://app.iters.io/'
},
{
  name : 'Arnaud Lemercier',
  image: require('@/assets/img/arnaud.png'),
  link: 'https://codedesign.fr/'
},
{
  name : 'Arkerone',
  image: require('@/assets/img/codeheroes.png'),
  link: 'https://www.codeheroes.fr/'
},
{
  name : 'Shinochi',
  image: require('@/assets/img/shinochi.png'),
  link: 'https://blog.bfrancois.com/'
},
{
  name : 'We Love Devs',
  image: require('@/assets/img/welovedevs.png'),
  link: 'https://welovedevs.com/fr/inspiration/'
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
         localStorage.setItem('firstName', res.data.firstName )
         localStorage.setItem('lastName', res.data.lastName )
         localStorage.setItem('disponible', res.data.disponible )
         localStorage.setItem('avatar', res.data.avatar )
         localStorage.setItem('city', res.data.city )
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
  localStorage.removeItem('firstName' )
  localStorage.removeItem('lastName')
  localStorage.removeItem('disponible')
  localStorage.removeItem('avatar' )
  localStorage.removeItem('city' )
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