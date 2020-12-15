<template> 
  <div class="p-4 md:w-1/3">
    <div class="h-full border-2 border-red-300 bg-red-300 rounded-lg overflow-hidden">
      <img class="h-12  w-full object-cover object-center" src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" alt="background">
      <div class="flex bg-red-300  justify-center -mt-8">
        
        <router-link :to="mentorsDetailsLink" >
          <img :src="avatar" class="rounded-full object-cover border-solid border-white object-center h-24 w-24 border-2 -mt-3">		
        </router-link>
        <span class="relative left-12 inline-block">

  <span :class="disponible === 'Oui' ? 'bg-green-600' : 'bg-red-500' " class="absolute bottom-12 right-2 inline-flex items-center justify-center px-4 py-2  font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 rounded-full">{{isDisponible}}</span>
</span>
      </div>
      
      <div class="p-6 bg-red-300">
        <router-link :to="mentorsDetailsLink" >
          <h2 class="tracking-widest text-center text-2xl font-bold underline mb-1">{{ fullName }}</h2>
        </router-link>
          <h1 class="text-center italic text-xl font-medium mb-3">{{ title }}</h1>
          <p class="text-center text-xl mb-3">{{presentation}} </p>
          <div class="text-center mb-6">
            <span v-for="(techno, index) in technos" :key="index" class="inline-block bg-gray-700 text-white rounded-full px-3 py-1  font-semibold text-center  my-1 mr-2">{{ techno }}</span>         
          </div>  
          <div class="text-xl font-black  text-center bg-red-300 rounded-full py-2 text-white" v-if="!isLoggedIn">
            <router-link to="/auth">
<font-awesome-icon  class="text-2xl mr-2" :icon="'lock'" />  
            <p>
                Connectez-vous pour contacter le mentor
            </p>
            </router-link>
            
        </div>
          <div v-if="isLoggedIn" class=" text-center">
            <div  class=" mr-2 no-underline hover:underline" v-for="(social, index) in socials" :key="index">
             
              

                 <a v-if="social.web"  :href="social.web">
                <font-awesome-icon v-if="social.web" class="text-3xl mr-2" :icon="'globe'" />  
  </a>

                 <a v-if="social.github"  :href="social.github">
                <font-awesome-icon v-if="social.github" class="text-3xl mr-2" :icon="['fab', 'github-square']" />  
  </a> 

                 <a v-if="social.twitter"  :href="social.twitter">
                <font-awesome-icon v-if="social.twitter" class="text-3xl mr-2" :icon="['fab', 'twitter-square']" />  
  </a>
                 <a v-if="social.discord"  :href="social.discord">
                <font-awesome-icon v-if="social.discord" class="text-3xl mr-2" :icon="['fab', 'discord']" />  
  </a>
  <a v-if="social.linkedin"  :href="social.linkedin">
                <font-awesome-icon v-if="social.linkedin" class="text-3xl mr-2" :icon="['fab', 'linkedin']" />  
  </a>

            </div>
          </div>
          
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['id','firstName', 'lastName', 'title', 'presentation','avatar', 'disponible', 'technos', 'socials'],
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      },
      mentorsDetailsLink() {
        return this.$route.path + '/' + this.id
      },
      isLoggedIn() {
            return this.$store.getters['isAuth']
      },
      isDisponible() {
			if (this.disponible === 'Oui') {
				return 'Disponible'
			} else {
				return 'Indisponible'
			}
		}
    }
}
</script>

<style scoped>
.height {
  height: 500px;
}
</style>