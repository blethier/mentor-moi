<template>
  <div class="darkMode antialiased py-2 mb-6" >
    <nav class="darkMode">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">

          <div class="flex-1 flex items-center justify-center sm:items-stretch ">

            <router-link to="/" class="flex-shrink-0 flex  items-center">
              <img class="block  lg:hidden mt-8 h-16 w-auto" src="../assets/img/minilogo.svg" alt="Workflow">
              <img class="hidden lg:block h-14 w-auto" src="../assets/img/logo.svg" alt="Workflow">
            </router-link>

            <div class="hidden lg:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link  to="/" class="  px-3 py-2 rounded-md text-lg font-medium">Accueil</router-link>
                <router-link to="/mentors" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">Liste des mentors</router-link>
                <router-link to="/faq" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">F.A.Q</router-link>
                <router-link to="/jobs" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">Trouver un poste</router-link>
                <router-link to="/conseils" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">Blog</router-link>
                <router-link v-if="!isLoggedIn" to="/login" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">Se connecter</router-link>
              </div>
            </div>
          </div>

          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <div v-if="isLoggedIn" class="ml-12 relative">

              <div class="hidden lg:block">
                <button @click="toggleMenu" class="  lg:flex text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <Avatar :username="userAuth" :size=50 color="white" background-color="#a67c50" />
                </button>
              </div>
        
              <div :class="openMenu ? 'block': 'hidden'" class="invertedDarkMode z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <router-link v-if="!isMentor" to="/register" class="block px-4 py-2 hover:bg-sands  " role="menuitem">Devenir Mentor</router-link>
                  <router-link v-if="isMentor" to="/updateMentors" class="block px-4 py-2 hover:bg-sands " role="menuitem">Modifier mon profil</router-link>
                  <p @click="logout" href="#" class="block px-4 py-2 hover:bg-sands " role="menuitem">Déconnexion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="open ? 'block': 'hidden'" class="fixed inset-x-0 bottom-16 z-50 bg-darkSands shadow ">
        <div @click="closeMenu" class="px-2  text-lg pt-2 pb-3 space-y-1">
          <router-link to="/jobs" class="  block px-3 pb-2 rounded-md  font-medium">Emploi</router-link>
          <router-link to="/conseils" class="  block px-3 py-2 rounded-md  font-medium">Blog</router-link>
          <router-link to="/faq" class="  block px-3 pt-2  rounded-md  font-medium">F.A.Q</router-link>
          <router-link class="block px-3 py-2 rounded-md  font-medium" to="/cookie-consent">Cookies</router-link>
          <router-link class="block px-3 py-2 rounded-md  font-medium" to="/terms">Termes et conditions</router-link>
          <router-link class="block px-3 py-2 rounded-md  font-medium" to="/code-of-conduct">Code de conduite</router-link>
        </div>
      </div>

      <div :class="openAccount ? 'block': 'hidden'" class="fixed inset-x-0 bottom-16 z-50 bg-darkSands shadow ">
        <div @click="closeMenu"   class="px-2 text-lg pt-2 pb-3 space-y-1">
            <router-link v-if="!isMentor && isLoggedIn" to="/register" class="block px-4 py-2 hover:bg-sands  " role="menuitem">Devenir Mentor</router-link>
            <router-link v-if="isMentor && isLoggedIn" to="/updateMentors" class="block px-4 py-2 hover:bg-sands " role="menuitem">Modifier mon profil</router-link>
            <p v-if="isLoggedIn" @click="logout" href="#" class="block px-4 pt-2 hover:bg-sands " role="menuitem">Déconnexion</p>
            <router-link v-if="!isLoggedIn" to="/login" class="block px-4 py-6   hover:bg-sands " role="menuitem">Se connecter / S'inscrire</router-link>
        </div>
      </div>

      <section id="bottom-navigation" class="block lg:hidden fixed inset-x-0 bottom-0 z-50 bg-darkSands shadow  ">
        <div id="tabs" class="flex justify-between">

          <router-link to="/" @click="closeMenu" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <svg width="25" height="25" viewBox="0 0 42 42" class="inline-block font-black mb-1">	    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z" fill="currentColor" fill-opacity="0.1"></path>	        <path d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z" fill="currentColor"></path>	        <path d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"></path>	        <rect fill="currentColor" transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) " x="17" y="10.3137085" width="30" height="2" rx="1"></rect>	        <rect fill="currentColor" transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) " x="-3" y="10.3137085" width="30" height="2" rx="1"></rect>	    </g>
            </svg>
            <span class="tab tab-home block font-black text-base">Accueil</span>
          </router-link>

          <router-link to="/mentors" @click="closeMenu" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <svg width="25" height="25" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path  d="M12 14l9-5-9-5-9 5 9 5z" />
              <path  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <span class="tab tab-explore block font-black text-base">Mentors</span>
          </router-link>

          <a @click="toggle" href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <svg width="25" height="25" class="inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
            </svg>
            <span class="tab tab-kategori block font-black text-base">Autres</span>
          </a>

          <a @click="toggleAccount" href=# class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <svg width="25" height="25" class="inline-block mb-1"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="tab tab-account block font-black text-base">Compte</span>
          </a>
        </div>
      </section>  
    </nav>

  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
    components : {
Avatar
    },
  data() {
    return {
      open: false,
      openMenu: false,
      openAccount: false
    };
  },
   created() {
    window.addEventListener('click', this.close)
   window.addEventListener('beforeunload', this.logout)
  },
   beforeDestroy() {
    window.removeEventListener('click', this.close)
  },
  
  computed: {
        userAuth() {
            return this.$store.getters.userAuth
        },
        isLoggedIn() {
            return this.$store.getters.isAuth
        },
        isMentor() {
          return  this.$store.getters.isMentor
        }
        
        
  },
  
  methods: {
    toggle() {
    this.open = !this.open
    this.openAccount = false
    },
    toggleAccount() {
    this.openAccount = !this.openAccount
    this.open = false
    },
    toggleMenu() {
        this.openMenu = !this.openMenu
    },
    logout() {
        this.$store.dispatch('logout');
        this.$router.replace('/login').catch(()=>{})
    },
     close(e) {
      if (! this.$el.contains(e.target)) {
        this.open = false
        this.openMenu = false
        this.openAccount = false
        }
      },
      closeMenu(){
        this.open = false,
        this.openAccount = false,
        this.openMenu = false
      }

  }
};
</script>