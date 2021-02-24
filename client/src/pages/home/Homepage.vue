<template>
<div class="container mx-auto">
    <Hero>
      <template v-slot:title>
        <span class="block xl:inline">Boostez votre carrière avec </span>
            <span class="block text-darkSands xl:inline">un Mentor</span>
      </template>
      <template v-slot:content>
        <p>
          Mentor Moi est une plateforme gratuite qui vise à connecter les développeurs moins expérimentés avec des mentors.
        </p>
        <p class="mt-4">
            Tout le monde peut s'inscrire en tant que mentors, vous n’avez pas besoin d’être un expert pour devenir mentor, juste avoir la volonté de partager ses connaissances.
        </p> 
      </template>
      <template v-slot:cta>
         <router-link to="/mentors" class="w-full mt-6 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 bg-darkSands text-white md:text-lg md:px-10">
                Voir les mentors
              </router-link>
      </template>
      <template v-slot:image>
         <img  class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../../../src/assets/img/home.jpg"  alt=""/>
      </template>
    </Hero>
   <Waves />
    <Presentation />
    <Job />
    <Waves />
</div>
</template>

<script>
import Presentation from './partials/Presentation'
import Job from './partials/Job'
import Waves from '../../components/Waves'
import Hero from '../../components/Hero'
import { page } from 'vue-analytics'


export default {
  name: 'Homepage',
    components: {
      Presentation,
      Job,
      Waves,
      Hero
    },
  methods: {
    track () {
      page('/')
    }
  }
}
</script>