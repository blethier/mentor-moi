import Vue from 'vue'
import VueRouter from 'vue-router';

import Homepage from './pages/home/Homepage.vue'
import FAQ from './pages/home/FAQ.vue'
import MentorsList from './pages/mentors/MentorsList.vue'
import MentorDetail from './pages/mentors/MentorDetail.vue'
import MentorRegistration from './pages/mentors/MentorRegistration.vue'
import MentorUpdate from './pages/mentors/MentorUpdate.vue'
import JobSearch from './pages/jobs/JobSearch.vue'
import Reconversion from './pages/home/Reconversion.vue'
import Login from './pages/auth/Login.vue'
import Signup from './pages/auth/Signup.vue'
import Cookie from './pages/home/Cookie.vue'
import Terms from './pages/home/Terms.vue'
import Code from './pages/home/Code.vue'

import NotFound from './pages/NotFound.vue'
import store from './store/mentors/index'

Vue.use(VueRouter);

const routes = [
        {path: '/', component: Homepage},
        {path: '/mentors', component: MentorsList},
        {path: '/mentors/:id', component: MentorDetail,pros: true},
        {path: '/register', component: MentorRegistration},
        {path: '/updateMentors', component: MentorUpdate},
        {path: '/faq', component: FAQ},
        {path: '/jobs', component: JobSearch},
        {path: '/conseils', component: Reconversion},
        {path: '/login', component: Login},
        {path: '/signup', component: Signup},
        {path: '/cookie-consent', component: Cookie},
        {path: '/terms', component: Terms},
        {path: '/code-of-conduct', component: Code},
        {path: '/:notFound(.*)', component: NotFound}

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

  const isLoggedIn = store.getters['isAuth']

  router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    
    if (to.fullPath === '/updateMentors' && !isLoggedIn) {
      if (!store.state.token) {
        next('/login');
      }
    }

    next();
  });

  
  

export default router;