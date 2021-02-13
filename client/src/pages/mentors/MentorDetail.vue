<template>
   
    <div class="container md:h-full lg:h-screen h-auto text-gray-900 mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            <!-- Left Side -->
            <div class=" md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="invertedDarkMode p-3 border-t-4 border-green-800">
                    <div class="image overflow-hidden">
                        <img class="h-full w-full mx-auto"
                            :src="mentors.avatar"
                            :alt="mentors.firstName"
                            >
                    </div>
                    <h1 class="text-gray-900 font-bold text-center text-xl leading-8 my-1">
                     {{mentors.firstName + ' ' + mentors.firstName}}
                      </h1>
                    <h3 class=" font-lg text-semibold leading-6">
                      {{mentors.title}}
                      </h3>
                    <p class="  hover: leading-6">
                       {{mentors.presentation}}
                    </p>
                    <ul
                        class="bg-gray-100  hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Statut</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white ">{{isDisponible}}</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Membre depuis</span>
                            <span class="ml-auto">{{date}}</span>
                        </li>
                    </ul>
                </div>
                <!-- End of profile card -->
                <div class="my-4"></div>
                <!-- Friends card -->
                
               
                <!-- End of friends card -->
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 ">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="invertedDarkMode w-full p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide text-lg">A propos</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 ">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">{{mentors.firstName}}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">{{mentors.lastName}}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Ville</div>
                                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                            <div  v-for="(social, index) in socialsContact" :key="index">

                            <div class="grid grid-cols-2" v-if="social.web" >
                              <p class="px-4 py-2 font-semibold">Site web</p>
                              <a :href="social.web" class="px-4 py-2">{{social.web}}</a>
                            </div>

                            <div class="grid grid-cols-2" v-if="social.twitter" >
                              <p class="px-4 py-2 font-semibold">Twitter</p>
                              <a :href="social.twitter" class="px-4 py-2">{{social.twitter}}</a>
                            </div>

                            <div class="grid grid-cols-2" v-if="social.github" >
                              <p class="px-4 py-2 font-semibold">Github</p>
                              <a :href="social.github" class="px-4 py-2">{{social.github}}</a>
                            </div>

                            <div class="grid grid-cols-2" v-if="social.linkedin" >
                              <p class="px-4 py-2 font-semibold">Linkedin</p>
                              <a :href="social.linkedin" class="px-4 py-2">{{social.linkedin}}</a>
                            </div>

                            <div class="grid grid-cols-2" v-if="social.discord" >
                              <p class="px-4 py-2 font-semibold">Discord</p>
                              <a :href="social.discord" class="px-4 py-2">{{social.discord}}</a>
                            </div>


                            </div>
                        </div>
                    </div>
                    <div class="invertedDarkMode p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Techno</span>
                            </div>
                            <ul class="list-inside flex-row flex ">
                                <li v-for="(technos, index) in technoss" :key="index">
                                    <div class="text-base mr-4 font-semibold inline-block py-1 px-2 uppercase rounded  bg-sands last:mr-0">
                                      {{technos}}
                                    </div>
                                    
                                </li>
          
                            </ul>
                        </div>
                    </div> 
                    </div>
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
                
                    <!-- End of Experience and education grid -->
                
                <!-- End of profile tab -->
            </div>
        </div>
    </div>
  
</template>

<script>
import axios from 'axios';


export default {

     data () {
    return {
     thisMentor: {},
     mentor: {},
     isPending: false
   }
  },
created() {

this.mentorProfil()

  },
  mounted () {

  },
  computed : {
      isAuth(){
          return this.$store.getters.isAuth
      },
      mentors(){
        return JSON.parse(JSON.stringify(this.mentor))
      },
      isDisponible() {
			if (this.mentors.disponible === 'Oui') {
				return 'Disponible'
			} else {
				return 'Indisponible'
			}
        },
        date() {
          const event = new Date(this.mentors.date)
          return event.toLocaleString()
        },
        socialsContact(){
          return JSON.parse(this.mentors.socials ?? null)
      },
      technoss(){
           return JSON.parse(this.mentors.technos ?? null)
      },
  },
  methods : {
      async mentorProfil(){
        await axios.get(`https://mentor-moi.herokuapp.com/api/mentor/${this.$route.params.id}`, {
    headers: {
      // remove headers
    }
    }).then(res => {
    // eslint-disable-next-line no-console
    console.log('RESPONSE' + ' ' + JSON.stringify(res.data)  );
    this.mentor = res.data
    }).catch(err => {
         // eslint-disable-next-line no-console
         console.log(err.response);
       });
      }
  }

}
</script>

<style scoped>
div /deep/ h2 {
      text-decoration: none;
      cursor: default;
    }
div /deep/ img {
      text-decoration: none;
      cursor: default;
    }



</style>