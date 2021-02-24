<template>
    <div class="container  h-full  mt-6 mx-auto px-4">
        
    

   <div class="flex w-full my-8 justify-center items-end">
        <div v-if="isLoggedIn" class="relative mr-4 lg:w-full xl:w-1/2 w-2/4" >
          <input type="search" placeholder="Filtrer les mentors par technologies" v-model="search" class=" bg-darkSands w-full bg-opacity-75 rounded border-2 border-green-700 focus:ring-2 focus:ring-sand  focus:border-green-700 text-base outline-none darkMode py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-kwimpalastatus="alive" data-kwimpalaid="1609853631472-5">
        </div>
    
      </div>

        <h4 class="text-center text-xl my-10">
            Il y {{allMentors}} mentors inscrits.
        </h4>
    
        <p v-if="loading" class="text-center">
      <font-awesome-icon class="animate-spin text-darkSands text-5xl" icon="sync-alt" />
      <span class="italic text-sm text-darkSands">Chargement des mentors...</span>
    </p>
        <section class="text-gray-700 body-font">
            <div class="">
                <div  class="flex flex-wrap -m-4">
                    <section class="text-gray-700 body-font">
                        <div class=" px-5 py-12 mx-">
                            <div v-if="hasMentors" class="flex flex-wrap -m-4">
                                <CardMentor class="md:w-1/2 p-4"  v-for="mentor in filteredMentors" :key="mentor._id" :firstName="mentor.firstName"
                                                                            :lastName="mentor.lastName"
                                                                            :mentor="mentor"
                                                                                :title="mentor.title"
                                                                                :avatar="mentor.avatar"
                                                                                :role="mentor.role"
                                                                                :price="mentor.price"
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
import CardMentor from './partials/CardMentor';




export default {
    components: {CardMentor},
    data() {
    return {
        search : '',
        loading: false
        };
    },
    mounted(){
        this.loadMentors(),
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
        allMentors() {
            const mentors= this.$store.getters['allMentors']
            return mentors.length
        },
        mentorId() {
            return this.$store.getters.mentorId
        },
        noMentor(){
            return this.filteredMentors?.length === 0
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
            
        this.loading = true    
        await this.$store.dispatch('loadMentors');
        this.loading = false
        },
        async loadOneMentor() {
            if(this.mentorId !== undefined) {
        this.$store.dispatch('loadOneMentor');        
            }  
        }
    }
    }

</script>