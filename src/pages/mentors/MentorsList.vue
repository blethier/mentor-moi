<template>
    <div class="container mx-auto px-4">
        <div class="relative text-gray-600">
            <input type="search" name="serch" placeholder="Filtrer les mentors par techno" v-model="search" class="bg-red-400 placeholder-gray-800 text-gray-800 w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
             <button @click="loadMentors" type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded-full ">Recharger</button>
        </div>
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
                                                                                :role="mentor.role"
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
        isPending: false
        };
    },
    created() {
        this.loadMentors()
    },
    computed: {
        filteredMentors() {
            const mentors = this.$store.getters['allUsers']
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
        },
        hasRole() {
            return this.$store.getters['role']
        }
    },
    methods: {
        async loadMentors() {
            this.isPending = true
            await this.$store.dispatch('loadMentors');
            this.isPending = false
        }
    }
    }

</script>