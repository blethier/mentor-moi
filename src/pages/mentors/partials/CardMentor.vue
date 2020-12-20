<template> 
  <div class="p-4 md:w-1/3">
    <div class="h-full border-2 border-red-300 bg-red-300 rounded-lg overflow-hidden">
      <img class="h-12  w-full object-cover object-center" src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" alt="background">
      <div class="flex bg-red-300  justify-center -mt-8">
        
        <router-link :to="mentorsDetailsLink" >
          <img :src="`https://mentor-moi-prod.herokuapp.com/${avatar}`" class="rounded-full object-cover border-solid border-white object-center h-24 w-24 border-2 -mt-3">		
        </router-link>
       
      </div>
       
      
      <div class="p-6 bg-red-300">

      

  <span :class="disponible === 'Oui' ? 'bg-green-600' : 'bg-red-500' " class=" px-4 py-2  font-bold leading-none text-red-100 transform  rounded-full">{{isDisponible}}</span>

        <router-link :to="mentorsDetailsLink" >
          <h2 class="tracking-widest text-center text-2xl mt-6 font-bold underline mb-1">{{ fullName }}</h2>
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
          <div v-if="isLoggedIn && disponible === 'Oui'" class=" text-center">
            <div  class=" mr-2 no-underline hover:underline" v-for="(social, index) in socialsContact" :key="index">
             
              

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

          <div class="text-xl font-black  text-center bg-red-300 rounded-full py-2 text-white" v-else-if="isLoggedIn">
<font-awesome-icon  class="text-2xl mr-2" :icon="'hand-paper'" />  
            <p>
                Désolé le mentor n'est pas disponible pour le moment
            </p>            
        </div>
          
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['id','firstName', 'name', 'lastName', 'title', 'presentation','avatar', 'disponible', 'technos', 'socials'],
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      },
      socialsContact(){
          return JSON.parse(this.socials)
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