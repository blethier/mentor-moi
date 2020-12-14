import Vue from 'vue'
import Vuex from 'vuex';
import router from './router'
import App from './App.vue'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { email, alpha, confirmed, length } from 'vee-validate/dist/rules';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin,faGithubSquare,faTwitterSquare, faDiscord} from '@fortawesome/free-brands-svg-icons'
import { faHeart, faMapMarkerAlt, faAt, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import store from './store/mentors'

library.add(faGithubSquare,
            faTwitterSquare,
            faLinkedin,
            faDiscord,
            faHeart,
            faMapMarkerAlt,
            faAt,
            faGlobe)

Vue.component('font-awesome-icon', FontAwesomeIcon)

extend('email', {
    ...email,
    message: 'Ceci n\'est pas un email'
  });

  extend('alpha', {
    ...alpha,
    message: 'okay'
  });

  extend('confirmed', {
    ...confirmed,
    message: 'Les mots de passe ne sont pas identiques'
  });

  extend('length', {
    ...length,
    message: 'Le mot de passe doit faire minimum 6 caractères'
  });


import('./assets/styles/index.css');

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);



new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
