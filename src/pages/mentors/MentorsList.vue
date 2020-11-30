<template>
    <div class="container mx-auto px-4">
        <p>FILTRER</p>
        <h1>MENTOR LISTS</h1>
        <router-link to="/register">Inscrire mentor</router-link>
        {{ filteredMentors }}
    <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex  flex-wrap -m-4">
             <CardMentor v-for="mentor in filteredMentors" :key="mentor.id" :mentor="mentor" /> 
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
        }
    }
}
</script>