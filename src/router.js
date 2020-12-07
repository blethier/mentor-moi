import Vue from 'vue'
import VueRouter from 'vue-router';

import Homepage from './pages/home/Homepage.vue'

import MentorsList from './pages/mentors/MentorsList.vue'
import MentorDetail from './pages/mentors/MentorDetail.vue'
import MentorRegistration from './pages/mentors/MentorRegistration.vue'
import UserAuth from './pages/auth/UserAuth.vue'

import NotFound from './pages/NotFound.vue'

Vue.use(VueRouter);

const routes = [
        {path: '/', component: Homepage},
        {path: '/mentors', component: MentorsList},
        {path: '/mentors/:id', component: MentorDetail,pros: true},
        {path: '/register', component: MentorRegistration},
        {path: '/auth', component: UserAuth}
,        //{path: '/login', component: null},
        {path: '/:notFound(.*)', component: NotFound}

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

export default router;