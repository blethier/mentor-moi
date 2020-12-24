<template>
    <div class="container h-screen mt-12 mx-auto px-4">
        <div class="relative text-gray-600">
            <input type="search" name="serch" placeholder="Filtrer les mentors par techno" v-model="search" class="bg-red-300 placeholder-gray-800 text-gray-800 w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
            
        </div>
    
        <pulse-loader v-if="isPending" color="#F87171" class="text-center text-red-500" ></pulse-loader>
        <section class="text-gray-700 body-font">
            <div class="container px-5  mx-auto">
                <div  class="flex flex-wrap -m-4">
                    <section class="text-gray-700 body-font">
                        <div class="container px-5 py-12 mx-auto">
                            <div v-if="hasMentors" class="flex flex-wrap -m-4">
                                <CardMentor  v-for="mentor in filteredMentors" :key="mentor._id" :firstName="mentor.firstName"
                                                                            :lastName="mentor.lastName"
                                                                                :title="mentor.title"
                                                                                :avatar="mentor.avatar"
                                                                                :role="mentor.role"
                                                                                :disponible="mentor.disponible"
                                                                                :presentation="mentor.presentation"
                                                                                :city="mentor.city"
                                                                                :technos="mentor.technos"
                                                                                :socials="mentor.socials"
                                                                                :id="mentor._id" /> 
                                                         
                                </div>
                              
                                    <div v-if="noMentor" class="darkMode mt-10 text-center body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="../../assets/img/dev.svg">
    <div class="text-center lg:w-2/3 w-full">
      <h4 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">Aucun mentor</h4>
      
      
    </div>
  </div>
</div>
                                
                            </div>
                    </section>                        
                </div>
                
            </div>
        </section>

    </div>
</template>

<script>
import CardMentor from './partials/CardMentor'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


export default {
    components: {CardMentor, PulseLoader},
    data() {
    return {
        search : '',
        isPending: false
        };
    },
    mounted(){
        //this.loadMentors(),
        this.loadOneMentor()
        
    },
    computed: {
        filteredMentors() {
          return  this.filter()
        },
        hasMentors() {
           
            const  mentors =  this.$store.state.mentors
            return  mentors && mentors.length > 0
        },
        hasRole() {
            return this.$store.getters['role']
        },
        isLoggedIn() {
            return this.$store.getters['isAuth']
        },
        mentorId() {
            return this.$store.getters.mentorId
        },
        noMentor(){
            return this.filteredMentors.length === 0
        }
        
    },
    methods: {
             
        filter(){
const mentors = this.$store.getters.allMentors
                if (!this.search)
                
                    return mentors

            const filterValue = this.search.toLowerCase()
            const filter = event => 
                
                event.technos.some(tag => tag.toLowerCase().includes(filterValue))
      
            return mentors.filter(filter)
        },
        async loadMentors() {
            
        this.isPending = true    
         this.$store.dispatch('loadMentors');
        this.isPending = false
        },
        async loadOneMentor() {
            if(this.mentorId !== undefined) {
        this.$store.dispatch('loadOneMentor');        
            }



 
    

            
        }
    }
    }

</script>