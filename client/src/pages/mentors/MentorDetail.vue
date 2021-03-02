<template>
   
    <div class="container h-full mx-auto my-5 p-5">
        <Hero>
             <template v-slot:title>
        <span class="block xl:inline">Trouvez le </span>
            <span class="block text-darkSands xl:inline">mentor idéal</span>
      </template>
      <template v-slot:content>
        <ul class="list-disc lg:ml-4 ml-12">
            <li>
                Prenez contact avec le mentor sur l'un des réseaux qu'il aura renseigné
            </li>
            <li>
                Faites part de vos objectifs (Souvenez-vous que ce n'est pas un professeur)
            </li>
            <li>
                Convenez avec lui sur quel support vos sessions se dérouleront (Meet, Slack, Discord....)
            </li>
            <li>
                Profitez de vos sessions de mentorat 🚀🚀 
            </li>
        </ul>
      </template>
         <template v-slot:image>
         <img  class="h-56 hidden lg:block w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../../../src/assets/img/visio.jpg"  alt=""/>
      </template>
      
        </Hero>
        <div class="md:flex mt-4  no-wrap md:-mx-2 ">
            <!-- Left Side -->
            <div class=" md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="invertedDarkMode p-3 border-t-4 border-darkSands">
                    <div class="image overflow-hidden">
                        <img class="h-full w-full mx-auto"
                            :src="mentors.avatar"
                            :alt="mentors.firstName"
                            >
                    </div>
                    <h1 class="underline font-bold text-center text-xl leading-8 my-1">
                     {{mentors.firstName + ' ' + mentors.lastName}}
                      </h1>
                    <h3 class=" font-lg my-6 text-semibold leading-6">
                      Rôle: {{mentors.title}}
                      </h3>
                    <p class="  hover: leading-6">
                       {{mentors.presentation}}
                    </p>
                    <ul
                        class="  hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Statut</span>
                            <span class="ml-auto"><span
                                    class=" py-1 px-2 rounded text-white " :class="mentors.disponible === 'Oui' ? 'bg-green-700' : 'bg-red-700' ">{{isDisponible}}</span></span>
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
            <div class="w-full md:w-9/12  ">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="invertedDarkMode w-full p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold  leading-8">
                        <span clas="text-green-500">
                            <svg class="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide text-lg">A propos</span>
                    </div>
                    <div>
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
                                <div class="px-4 py-2">{{mentors.city}}</div>
                            </div>
        
                            <div v-if="mentors.disponible === 'Oui'">
                            <div v-for="(social, index) in socialsContact" :key="index">

                            <div class="grid grid-cols-2" v-if="social.web" >
                              <p class="px-4 py-2 font-semibold">Site web</p>
                              <a v-if="isAuth" :href="social.web" target="blank" rel="noreferrer noopener" class="px-4 py-2">{{social.web}}</a>
                              <p v-else class="px-4 py-2">
                                  <router-link to="/login">
                                      Connectez-vous pour contacter le mentor
                                  </router-link>
                               </p>    
                            </div>

                            <div class="grid grid-cols-2" v-if="social.twitter" >
                              <p class="px-4 py-2 font-semibold">Twitter</p>
                              <a v-if="isAuth" :href="`https://twitter.com/${social.twitter}`" target="blank" rel="noreferrer noopener" class="px-4 py-2">{{social.twitter}}</a>
                              <p v-else class="px-4 py-2">
                                  <router-link class="underline" to="/login">
                                      Connectez-vous pour contacter le mentor
                                  </router-link>
                              </p>
                            </div>

                            <div class="grid grid-cols-2" v-if="social.github" >
                              <p class="px-4 py-2 font-semibold">Github</p>
                              <a v-if="isAuth" :href="`https://github.com/${social.github}`" target="blank" rel="noreferrer noopener" class="px-4 py-2">{{social.github}}</a>
                              <p v-else class="px-4 py-2"> 
                                  <router-link class="underline" to="/login">
                                      Connectez-vous pour contacter le mentor
                                  </router-link>
                                </p>
                            </div>

                            <div class="grid grid-cols-2" v-if="social.linkedin" >
                              <p class="px-4 py-2 font-semibold">Linkedin</p>
                              <a v-if="isAuth" :href="`https://www.linkedin.com/in/${social.linkedin}`" target="blank" rel="noreferrer noopener" class="px-4 py-2">{{social.linkedin}}</a>
                              <p v-else class="px-4 py-2">
                                  <router-link class="underline" to="/login">
                                      Connectez-vous pour contacter le mentor
                                  </router-link>
                              </p>
                            </div>

                            <div class="grid grid-cols-2" v-if="social.discord" >
                              <p class="px-4 py-2 font-semibold">Discord</p>
                              <a v-if="isAuth" :href="social.discord" target="blank" rel="noreferrer noopener" class="px-4 py-2">{{social.discord}}</a>
                              <p v-else class="px-4 py-2">
                                  <router-link class="underline" to="/login">
                                      Connectez-vous pour contacter le mentor
                                  </router-link>
                              </p>
                            </div>


                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="invertedDarkMode p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold  leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Techno</span>
                            </div>
                            <ul class="list-inside  align-middle lg:flex-row lg:flex ">
                                <li v-for="(technos, index) in technoss" :key="index">
                                    <div class="text-base lg:mr-4 font-semibold inline-block py-1 px-2 uppercase rounded  bg-darkSands last:mr-0">
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
import Hero from '../../components/Hero'


export default {
components: {Hero},
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
        await axios.get(`https://mevn-mentor-moi.herokuapp.com/api/mentor/${this.$route.params.id}`, {
    headers: {
      // remove headers
    }
    }).then(res => {
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