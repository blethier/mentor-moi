<template> 
   <div class="mb-6   px-3">
          <div class="py-24 h-full w-80 invertedDarkMode rounded shadow text-center">
            
          

               
  <span v-if="isLoggedIn" class="mr-2">{{isDisponible}}</span>
  <span v-if="isLoggedIn" class="inline-flex items-center animate-pulse justify-center px-2 py-2 text-xs font-bold leading-none rounded-full" :class="disponible === 'Oui' ? 'bg-green-700' : 'bg-red-700' "></span>
            
           
   
   <router-link :to="mentorsDetailsLink" >
            <img class="mx-auto mt-4 mb-8 w-32 h-32 rounded-full object-cover" :src="avatar" alt="">
            </router-link>
            <router-link :to="mentorsDetailsLink" >
            <h4 class="mb-2 text-2xl  font-bold font-heading">
              {{ fullName }}
            </h4>
   </router-link>
    <p class=" italic">
              {{ city }}
            </p>
            <p class=" italic">
              {{ title }}
            </p>
            <p>
              {{presentation}}
            </p>

            <div class="flex flex-wrap justify-center my-6" >
                <div v-for="(technos, index) in technoss" :key="index">
                  <span class=" mr-2 px-2 py-1  font-bold leading-none text-white bg-darkSands rounded-full">
                    {{technos}}
                  </span>
                </div>
            </div>

<div v-if="isLoggedIn && disponible === 'Oui'" class=" text-center">
            <div  class="mt-8 mr-2 text-darkSands no-underline hover:underline" v-for="(social, index) in socialsContact" :key="index">
             
              

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

<div class="text-xl font-black  text-center  py-2 text-darkSands" v-else-if="isLoggedIn">
<font-awesome-icon  class="text-2xl mr-2" :icon="'hand-paper'" />  
            <p>
                Désolé le mentor n'est pas disponible pour le moment
            </p>            
        </div>



            
          </div>
        </div>
</template>

<script>
export default {
    props: ['id','firstName', 'name', 'city','lastName', 'title', 'presentation','avatar', 'disponible', 'technos', 'socials', 'mentor'],
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
        return 'bg-green-700 text-green-100'
      } else {
        return 'bg-red-700 text-red-100'
      }
    }
    },
}
</script>

<style scoped>
.height {
  height: 500px;
}
.blurry {
  -webkit-filter: blur(5px);
-moz-filter: blur(5px);
-o-filter: blur(5px);
-ms-filter: blur(5px);
filter: blur(5px);

}
</style>