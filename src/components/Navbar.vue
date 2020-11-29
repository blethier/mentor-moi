<template>
    <div class="darkMode antialiased mb-6" >
        <nav class="flex items-center justify-between flex-wrap p-6 border-b-2 border-red-400">
            <div class="flex items-center flex-no-shrink mr-6">
                <img alt="logo" src="../assets/img/minilogo.png">
            </div>
            <div class="block sm:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
                    <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-3 w-3">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                    <svg v-if="open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-3 w-3">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                <div class="text-base sm:flex-grow">
                    <router-link to="/" class="linkNavbar  mr-4">
                        Accueil
                    </router-link>
                    <router-link to="/mentors" class="linkNavbar mr-4">
                        Mentors 
                    </router-link>
                    <router-link to="/register" class="linkNavbar">
                        Blog
                    </router-link>
                </div>
            <div>
            <router-link to="/register" class="no-underline inline-block text-base px-4 py-2 leading-none border rounded border-gray-800 hover:border-transparent hover:bg-white hover:text-red-400 mt-4 sm:mt-0">
                Inscription
            </router-link>
        </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
    this.open = !this.open
    }
  }
};
</script>