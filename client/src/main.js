import Vue from 'vue'
import Vuex from 'vuex';
import router from './router'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { email, alpha_spaces, confirmed, min, required, regex } from 'vee-validate/dist/rules';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin,faGithubSquare,faTwitterSquare, faDiscord} from '@fortawesome/free-brands-svg-icons'
import { faHeart, faMapMarkerAlt, faAt, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import store from './store/mentors'

library.add(faGithubSquare,
            faTwitterSquare,
            faLinkedin,
            faDiscord,
            faHeart,
            faMapMarkerAlt,
            faAt,
            faGlobe,
            faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)

extend('email', {
    ...email,
    message: 'Ceci n\'est pas un email'
  });

  extend('alpha_spaces', {
    ...alpha_spaces,
    message: 'Ce champ ne peut contenir que des caractères alphabétiques'
  });

  extend('confirmed', {
    ...confirmed,
    message: 'Les mots de passe ne sont pas identiques'
  });

  extend('min', {
    ...min,
    message: 'Le mot de passe doit faire minimum 6 caractères'
  });

  extend('required', {
    ...required,
    message: 'Ce champ ne peut être vide'
  });

  extend('regex', {
    ...regex,
    message: 'Les caractères spéciaux ne sont pas acceptés'
  });

  const options = {
    confirmButtonColor: '#41b882',
    background: '#f87171',
    colorText: '#fffff'
    
  };



import('./assets/styles/index.css');

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueSweetalert2, options);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);




new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
