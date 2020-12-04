<template>
    <div class="container mx-auto px-4">
        <input class="w-full h-10 pl-3 pr-6 bg-red-400 placeholder-gray-800 text-gray-800 border rounded-lg appearance-none focus:shadow-outline" placeholder="Chercher un Mentor par techno" type="text" v-model="search">
        <router-link to="/register">Inscrire mentor</router-link>
        <section class="text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div v-if="hasMentors" class="flex flex-wrap -m-4">
                    <section class="text-gray-700 body-font">
                        <div class="container px-5 py-12 mx-auto">
                            <div class="flex flex-wrap -m-4">
                                <CardMentor v-for="mentor in filteredMentors" :key="mentor.id" :firstName="mentor.firstName"
                                                                            :lastName="mentor.lastName"
                                                                                :title="mentor.title"
                                                                                :presentation="mentor.presentation"
                                                                                :city="mentor.city"
                                                                                :technos="mentor.technos"
                                                                                :socials="mentor.socials"
                                                                                :id="mentor.id" /> 
                                </div>
                            </div>
                    </section>                        
                </div>
                <div v-else class="container px-5 py-24 mx-auto">
                    <h1>TODO view no mentors</h1>
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
        items: [
       {name: 'Stackoverflow', type: 'development'},
       {name: 'Game of Thrones', type: 'serie'},
       {name: 'Jon Snow', type: 'actor'}
     ]
        };
    },
    computed: {
        filteredMentors() {
            const mentors = this.$store.getters['allMentors']
                if (!this.search)
                    return mentors
            const filterValue = this.search.toLowerCase()
            const filter = event => 
                event.title.toLowerCase().includes(filterValue) ||
                event.technos.some(tag => tag.toLowerCase().includes(filterValue))
      
            return mentors.filter(filter)
        },
        hasMentors() {
            return this.$store.getters['hasMentors']
        }
  
  }
    }

</script>