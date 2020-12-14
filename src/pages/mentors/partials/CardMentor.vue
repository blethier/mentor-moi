<template> 
  <div class="p-4 md:w-1/3">
    <div class="h-full border-2 border-red-400 bg-red-400 rounded-lg overflow-hidden">
      <img class="h-12  w-full object-cover object-center" src="https://images.unsplash.com/photo-1470290449668-02dd93d9420a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="background">
      <div class="flex bg-red-400  justify-center -mt-8">
        <router-link :to="mentorsDetailsLink" >
          <img :src="avatar" class="rounded-full object-cover border-solid border-white object-center h-24 w-24 border-2 -mt-3">		
        </router-link>
      </div>
      
      <div class="p-6 bg-red-400">
        <router-link :to="mentorsDetailsLink" >
          <h2 class="tracking-widest text-center text-2xl font-bold underline mb-1">{{ fullName }}</h2>
        </router-link>
          <h1 class="text-center italic text-xl font-medium mb-3">{{ title }}</h1>
          <p class="text-center text-xl mb-3">{{presentation}} </p>
          <div class="flex items-center flex-wrap mb-6">
            <span v-for="(techno, index) in technos" :key="index" class="inline-block bg-gray-700 text-white rounded-full px-3 py-1  font-semibold  my-1 mr-2">{{ techno }}</span>         
          </div>  
          <router-link to="/auth" v-if="!isLoggedIn" class=" bg-red-700 rounded-lg text-center ">
              <p class="text-white">
                  Connectez-vous pour contacter le mentor
              </p>
          </router-link>
          <div v-if="isLoggedIn" class="flex items-center flex-wrap ">
            <div  class="flex items-center mr-2 no-underline hover:underline" v-for="(social, index) in socials" :key="index">
             
              

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
    props: ['id','firstName', 'lastName', 'title', 'presentation','avatar', 'city', 'technos', 'socials'],
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      },
      mentorsDetailsLink() {
        return this.$route.path + '/' + this.id
      },
      isLoggedIn() {
            return this.$store.getters['isAuth']
        }
    }
}
</script>

<style scoped>
.height {
  height: 500px;
}
</style>