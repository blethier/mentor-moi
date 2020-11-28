import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin,faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithubSquare, faLinkedin, faGlobeAfrica)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import('./assets/styles/index.css');

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
