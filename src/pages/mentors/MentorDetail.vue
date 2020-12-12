<template>
 
    <div class="font-sans leading-tight   p-8">
  <div class="max-w-sm mx-auto text-gray-800 bg-red-300 rounded-lg overflow-hidden shadow-lg">
    <div class="bg-cover h-40" style="background-image: url('https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80');"></div>
    <div class="border-b px-4 pb-6">
        <div class="text-center sm:text-left sm:flex mb-4">
            <img class="h-28 w-28 rounded-full border-4 border-white -mt-16 mr-4" :src="user.avatar" alt="">
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
        <div v-for="techno in user.technos" :key="techno" class="flex items-center text-grey-darker mb-4">
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2  font-bold leading-none text-red-100 bg-red-700 rounded-full">
                {{techno}}
            </span>
        </div>
        <div class="flex">
            <div v-for="(social, index)  in user.socials" :key="index" class="mr-4  p-3 text-center">
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
    </div>
  </div>
</div>
     
  
</template>

<script>
import axios from 'axios'
export default {
     data () {
    return {
     user: {},
   }
  },

  mounted () {

  axios.get('http://localhost:5000/api/mentor/' + this.$route.params.id)
  .then((result) => {
   this.user = result.data;
   // eslint-disable-next-line no-console
   console.log(this.user);

   })
  },
  computed : {
      name() {
          return this.user.firstName + ' ' + this.user.lastName
      }
  }
}
</script>