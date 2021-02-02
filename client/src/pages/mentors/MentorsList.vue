<template>
    <div class="container  mt-6 mx-auto px-4">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/3875096/pexels-photo-3875096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-darkSands">Knausgaard typewriter readymade marfa</h1>
      <p class="mb-8 leading-relaxed">Chillwaggg&ave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <div v-if="isLoggedIn" class="relative mr-4 lg:w-full xl:w-1/2 w-2/4" >
          <input type="search" v-model="search" class="w-full bg-sands bg-opacity-50 rounded border-2 border-green-700 focus:ring-2 focus:ring-sand  focus:border-green-700 text-base outline-none darkMode py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-kwimpalastatus="alive" data-kwimpalaid="1609853631472-5">
        </div>
    
      </div>
      
      
    </div>
  </div>

    
        <p v-if="loading" class="text-center">
      <font-awesome-icon class="animate-spin text-darkSands text-5xl" icon="sync-alt" />
    </p>
        <section class="text-gray-700 body-font">
            <div class="">
                <div  class="flex flex-wrap -m-4">
                    <section class="text-gray-700 body-font">
                        <div class=" px-5 py-12 mx-">
                            <div v-if="hasMentors" class="flex flex-wrap -m-4">
                                <CardMentor  v-for="mentor in filteredMentors" :key="mentor._id" :firstName="mentor.firstName"
                                                                            :lastName="mentor.lastName"
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
import CardMentor from './partials/CardMentor'



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