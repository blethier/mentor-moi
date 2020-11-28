import Vue from 'vue'
import VueRouter from 'vue-router';

import Homepage from './pages/home/Homepage.vue'

import MentorsList from './pages/mentors/MentorsList.vue'
import MentorDetail from './pages/mentors/MentorDetail.vue'
import MentorRegistration from './pages/mentors/MentorRegistration.vue'

import ContactMentor from './pages/requests/ContactMentor.vue'
import RequestsReceive from './pages/requests/RequestsReceive.vue'
import NotFound from './pages/NotFound.vue'

Vue.use(VueRouter);

const routes = [
        {path: '/', component: Homepage},
        {path: '/mentors', component: MentorsList},
        {path: '/mentors/:id', component: MentorDetail,pros: true, children: [
            {path: '/contact', component: ContactMentor}
        ]},
        {path: '/register', component: MentorRegistration},
        //{path: '/login', component: null},
        {path: '/requests', component: RequestsReceive},
        {path: '/:notFound(.*)', component: NotFound}

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

export default router;