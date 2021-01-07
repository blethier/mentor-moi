<template> 
  <div class="p-4 md:w-1/3">
    <div class=" h-500 border-4 border-darkSands  bg-sands rounded-lg overflow-hidden">
      <img class="h-12  w-full bg-red-800 object-cover object-center" src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8anVuZ2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="background">
      <div class="flex bg-sands  justify-center -mt-8">
        
        <router-link :to="mentorsDetailsLink" >
          <img :src="avatar" class="rounded-full object-cover object-top border-solid border-white  h-24 w-24 border-2 -mt-3">		
        </router-link>
       
      </div>
       
      
      <div class="p-6 bg-sands">

      
<!-- component -->
<!-- This is an example component -->

<div
    class="px-4 h-6 w-32 rounded-full  font-semibold flex items-center cursor-pointer"
    :class="disponibleColor"
  >
    <span  class="w-3 h-3 animate-pulse rounded-full mr-1" :class="disponible === 'Oui' ? 'bg-green-500' : '' "></span>
   {{isDisponible}}
  </div>
  

        <router-link :to="mentorsDetailsLink" >
          <h2 class="tracking-widest text-center text-2xl mt-6 font-bold underline mb-1">{{ fullName }}</h2>
        </router-link>
          <h1 class="text-center italic text-xl font-medium mb-3">{{ title }}</h1>
          <p class="text-center text-xl mb-3">{{presentation}} </p>
          <div class="text-center mb-6">
            <span v-for="(techno, index) in technoss" :key="index" class="inline-block bg-gray-700 text-white rounded-full px-3 py-1  font-semibold text-center  my-1 mr-2">{{ techno }}</span>         
          </div>  
          <div class="text-xl font-black  text-center bg-sands rounded-full py-2 text-white" v-if="!isLoggedIn">
            <router-link to="/auth">
<font-awesome-icon  class="text-2xl mr-2" :icon="'lock'" />  
            <p>
                Connectez-vous pour contacter le mentor
            </p>
            </router-link>
            
        </div>
          <div v-if="isLoggedIn && disponible === 'Oui'" class=" text-center">
            <div  class=" mr-2 no-underline hover:underline" v-for="(social, index) in socialsContact" :key="index">
             
              

                 <a v-if="social.web" target="_blank" rel="noopener" :href="social.web">
                <font-awesome-icon v-if="social.web" class="text-3xl mr-2" :icon="'globe'" />  
  </a>

                 <a v-if="social.github" target="_blank" rel="noopener" :href="`https://github.com/${social.github}`">
                <font-awesome-icon v-if="social.github" class="text-3xl mr-2" :icon="['fab', 'github-square']" />  
  </a> 

                 <a v-if="social.twitter" target="_blank" rel="noopener" :href="`https://twitter.com/${social.twitter}`">
                <font-awesome-icon v-if="social.twitter" class="text-3xl mr-2" :icon="['fab', 'twitter-square']" />  
  </a>
                 <a v-if="social.discord" target="_blank" rel="noopener" :href="social.discord">
                <font-awesome-icon v-if="social.discord" class="text-3xl mr-2" :icon="['fab', 'discord']" />  
  </a>
  <a v-if="social.linkedin" target="_blank" rel="noopener" :href="`https://linkedin.com/in/${social.linkedin}`">
                <font-awesome-icon v-if="social.linkedin" class="text-3xl mr-2" :icon="['fab', 'linkedin']" />  
  </a>

            </div>
          </div>

          <div class="text-xl font-black  text-center bg-sands rounded-full py-2 text-white" v-else-if="isLoggedIn">
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
      technoss(){
           return JSON.parse(this.technos ?? null)
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
    }, 
    disponibleColor(){
      if (this.disponible === 'Oui'){
        return 'bg-green-100 text-green-500'
      } else {
        return 'bg-red-100 text-red-500'
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