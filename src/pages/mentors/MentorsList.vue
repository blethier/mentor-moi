<template>
    <div class="container mx-auto px-4">
        <p>FILTRER</p>
        <h1>MENTOR LISTS</h1>
        <router-link to="/register">Inscrire mentor</router-link>
    <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">

          <div v-if="hasMentors" class="flex flex-wrap -m-4">
              <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
             <CardMentor v-for="mentor in filteredMentors" :key="mentor.id" :firstName="mentor.firstName"
                                                                           :lastName="mentor.lastName"
                                                                            :title="mentor.title"
                                                                            :presentation="mentor.presentation"
                                                                            :city="mentor.city"
                                                                            :technos="mentor.technos"
                                                                            :socials="mentor.socials" /> 
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
import CardMentor from '../../components/CardMentor'

export default {
    components: {CardMentor},
    computed: {
        filteredMentors() {
            return this.$store.getters['allMentors']
        },
        hasMentors() {
            return this.$store.getters['hasMentors']
        }
    }
}
</script>