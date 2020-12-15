<template>
 
    <div class="font-sans leading-tight   p-8">
        <pulse-loader v-if="isPending" color="#F87171" class="text-center text-red-500" ></pulse-loader>
  <div class="max-w-sm mx-auto text-gray-800 bg-red-300 rounded-lg overflow-hidden shadow-lg">
    <div class="bg-cover h-40" style="background-image: url('https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80');"></div>
    <div class="border-b px-4 pb-6">
        <div class="text-center sm:text-left sm:flex mb-4">
            <img class="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4" :src="user.avatar" alt="">
            <div class="py-2">
                <h3 class="font-bold text-2xl mb-1">{{name}}</h3>
                <div class="inline-flex  sm:flex items-center">
                    {{user.title}}
                </div>
            </div>
        </div>
        <div class="flex">
            <p class="flex-1 rounded-full text-xl antialiased font-bold hover:bg-blue-dark px-4 py-2 mr-2">
                {{user.presentation}}
            </p>

        </div>
    </div>
    <div class="px-4 py-4">
        <div v-for="techno in user.technos" :key="techno" class=" items-center text-grey-darker mb-4">
            <span class="flex items-center justify-center px-2 py-1 mr-2  font-bold leading-none text-red-100 bg-red-700 rounded-full">
                {{techno}}
            </span>
        </div>
        <div v-if="isAuth">
            
            <div  v-for="(social, index)  in user.socials" :key="index" class="mr-4  p-3 text-center">
                      <a v-if="social.linkedin"  :href="social.linkedin">
                <font-awesome-icon v-if="social.linkedin" class="text-3xl mr-2" :icon="['fab', 'linkedin']" />  
  </a>

  <a v-if="social.discord" :href="`https://www.linkedin.com/in//${social.discord}`">
                <font-awesome-icon v-if="social.discord" class="text-3xl mr-2" :icon="['fab', 'discord']" />  
  </a>

  <a v-if="social.twitter" :href="`https://www.linkedin.com/in//${social.twitter}`">
                <font-awesome-icon v-if="social.twitter" class="text-3xl mr-2" :icon="['fab', 'twitter-square']" />  
  </a>

    <a v-if="social.github" :href="`https://www.linkedin.com/in//${social.github}`">
                <font-awesome-icon v-if="social.github" class="text-3xl mr-2" :icon="['fab', 'github-square']" />  
  </a>

    <a v-if="social.web" :href="`https://www.linkedin.com/in//${social.web}`">
                <font-awesome-icon v-if="social.web" class="text-3xl mr-2" :icon="'globe'" />  
  </a>


  
                    </div>
        </div>
        <div class="text-center text-xl font-black bg text-red-600" v-if="!isAuth">
            <router-link to="/auth">
<font-awesome-icon  class="text-2xl mr-2" :icon="'lock'" />  
            <p>
                Connectez-vous pour contacter le mentor
            </p>
            </router-link>
            
        </div>
    </div>
  </div>
</div>
     
  
</template>

<script>
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


export default {
    components : {PulseLoader},
     data () {
    return {
     user: {},
     isPending: false
   }
  },

  mounted () {

  axios.get('https://mentor-moi.herokuapp.com/api/mentor/' + this.$route.params.id)
  .then((result) => {
      this.isPending = true
   this.user = result.data;
   this.isPending = false
   // eslint-disable-next-line no-console
   console.log(this.user);

   })
  },
  computed : {
      name() {
          return this.user.firstName + ' ' + this.user.lastName
      },
      isAuth(){
          return this.$store.getters.isAuth
      }
  },

}
</script>