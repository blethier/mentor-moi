import Vue from 'vue'
import VueRouter from 'vue-router';

import Homepage from './pages/home/Homepage.vue'
import FAQ from './pages/home/FAQ.vue'
import MentorsList from './pages/mentors/MentorsList.vue'
import MentorDetail from './pages/mentors/MentorDetail.vue'
import MentorRegistration from './pages/mentors/MentorRegistration.vue'
import MentorUpdate from './pages/mentors/MentorUpdate.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import VueAnalytics from 'vue-analytics'

import NotFound from './pages/NotFound.vue'
import store from './store/mentors/index'

Vue.use(VueRouter);

const routes = [
        {path: '/', component: Homepage},
        {path: '/mentors', component: MentorsList},
        {path: '/mentors/:id', component: MentorDetail,pros: true},
        {path: '/register', component: MentorRegistration},
        {path: '/updateMentors', component: MentorUpdate},
        {path: '/auth', component: UserAuth},
        {path: '/faq', component: FAQ},
        //{path: '/login', component: null},
        {path: '/:notFound(.*)', component: NotFound}

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

  router.beforeEach((to, from, next) => {
    
    
    if (to.fullPath === '/register') {
      if (!store.state.token) {
        next('/auth');
      }
    }
    if (to.fullPath === '/updateMentors') {
      if (!store.state.token) {
        next('/auth');
      }
    }
    if (to.fullPath === '/register') {
      if (store.state.accessToken) {
        next('/mentors');
      }
    }
    next();
  });
  

export default router;