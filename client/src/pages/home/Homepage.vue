<template>
<div class="container mx-auto">
    <Hero>
      <template v-slot:title>
        <span class="block xl:inline">Boostez votre carrière avec </span>
            <span class="block text-darkSands xl:inline">un Mentor</span>
      </template>
      <template v-slot:content>
        Vous êtes étudiant, en reconversion professionnelle ou même déja en poste ? On ne cesse d'apprendre dans le milieu de l'informatique, optez pour le mentorat pour booster votre carrière.
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

export default {
  name: 'Homepage',
    components: {
      Presentation,
      Job,
      Waves,
      Hero
    },
}
</script>