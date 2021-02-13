<template>
<div class="container mx-auto">
    <Hero>
        <template v-slot:title>
        Code de conduite
      </template>

      <template v-slot:content>
          Chez Mentor-moi, nous apprécions tous nos mentors, mentorés et contributeurs. 
          Notre objectif est d'en faire un espace sûr où les développeurs nouveaux et expérimentés 
          peuvent se connecter et apprendre les uns des autres. Par conséquent, nous ne tolérons 
          aucune forme de harcèlement ou de préjugé. Ce code de conduite s'applique à tous les 
          espaces Mentor-moi, y compris, mais sans s'y limiter, Slack, la correspondance par 
          courrier électronique et les réseaux sociaux.
      </template>

      <template v-slot:image>
           <img  class="h-56 w-full object-cover object-left sm:h-72 md:h-96 lg:w-full lg:h-full" src="../../../src/assets/img/loi.jpg"  alt=""/>
      </template>
    </Hero>

    <section class=" body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h2 class="sm:text-2xl text-xl font-medium text-center title-font mb-4">
          Le harcèlement comprend, mais sans s'y limiter:
        </h2>
    
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="rounded flex p-4 h-full items-center">
          <span class="title-font font-medium">
              Commentaires offensants liés au sexe, à l'identité et à l'expression de genre, à l'orientation sexuelle, au handicap, à la maladie mentale, à l'apparence physique, à la taille du corps, à l'âge, à la race ou à la religion.
          </span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" rounded flex p-4 h-full items-center">
        
          <span class="title-font font-medium">
              Menaces de violence.
          </span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" rounded flex p-4 h-full items-center">
        
          <span class="title-font font-medium">
              Incitation à la violence envers toute personne, y compris encourager une personne à se suicider ou à s'automutiler.
          </span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" rounded flex p-4 h-full items-center">
         
          <span class="title-font font-medium">
              Intimidation délibérée.
          </span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" rounded flex p-4 h-full items-center">
         
          <span class="title-font font-medium">
              Attention sexuelle indésirable, comme des images ou des comportements sexuels.
          </span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" rounded flex p-4 h-full items-center">
          
          <span class="title-font font-medium">
              Communication individuelle continue après les demandes de cessation.
          </span>
        </div>
      </div>


      


    </div>
    
  </div>
</section>

    
</div>
</template>

<script>
import Hero from '../../components/Hero'
export default {
    components: {
        Hero
    }
}
</script>