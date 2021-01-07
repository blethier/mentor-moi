<template>
    <div class="darkMode antialiased py-2 mb-6" >
   <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="darkMode">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button @click="toggle" class="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg  v-if="!open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg v-if="open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h- w-6">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <router-link to="/" class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden mt-8 h-16 w-auto" src="../assets/img/minilogo.svg" alt="Workflow">
          <img class="hidden lg:block h-14 w-auto" src="../assets/img/logo.svg" alt="Workflow">
        </router-link>
         <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: " hover:bg-gray-700 hover:text-white" -->
            <router-link  to="/" class="  px-3 py-2 rounded-md text-lg font-medium">Accueil</router-link>
            <router-link to="/mentors" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">Liste des mentors</router-link>
            <router-link to="/faq" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">F.A.Q</router-link>
            <router-link to="/jobs" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">JOBS</router-link>
            <router-link v-if="!isLoggedIn" to="/auth" active-class="bg-darkSands" class="  px-3 py-2 rounded-md text-lg font-medium">Se connecter</router-link>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
        <!-- Profile dropdown -->
        <div v-if="isLoggedIn" class="ml-12 relative">
          <div>
            <button @click="toggleMenu" class=" flex text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <Avatar :username="userAuth" :size=50 color="white" background-color="#a67c50" />
            </button>
          </div>
          <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
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

  <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
  <div :class="open ? 'block': 'hidden'" class=" sm:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: " hover:bg-gray-700 hover:text-white" -->
      <router-link to="/" class="  block px-3 py-2 rounded-md text-base font-medium">Acceuil</router-link>
      <router-link to="/mentors" class="  block px-3 py-2 rounded-md text-base font-medium">Liste des mentors</router-link>
      <router-link to="/faq" class="  block px-3 py-2 rounded-md text-base font-medium">F.A.Q</router-link>
      <router-link to="/auth" v-if="!isLoggedIn" class="  block px-3 py-2 rounded-md text-base font-medium">Se connecter</router-link>
    </div>
  </div>
</nav>

</div>
</template>

<script>
//import Gravatar from 'vue-gravatar';
import Avatar from 'vue-avatar'

export default {
    components : {
//Gravatar,
Avatar
    },
  data() {
    return {
      open: false,
      openMenu: false
    };
  },
   created() {
    window.addEventListener('click', this.close)
   // window.addEventListener('beforeunload', this.logout)
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
    },
    toggleMenu() {
        this.openMenu = !this.openMenu
    },
    logout() {
        this.$store.dispatch('logout');
        this.$router.replace('/auth').catch(()=>{})
    },
     close(e) {
      if (! this.$el.contains(e.target)) {
        this.open = false
        this.openMenu = false
        }
      }

  }
};
</script>