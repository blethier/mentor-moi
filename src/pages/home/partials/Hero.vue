<template>
    <section class="darkMode ">
    <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="font-sans sm:text-4xl text-3xl mb-4 font-bold text-red-400">
            Progresser avec un mentor
        </h1>
        <p class="mb-4 leading-relaxed">
            Connecter les Développeurs Juniors (ou pas) avec des mentors expérimentés spécialisés dans leurs domaines, afin de progresser grâce à l'entraide.
        </p>
        <p class="mb-8 leading-relaxed">
          
          Le mentorat offre la possibilité de poser des questions, de demander des conseils ou de l'aide pour développer leurs compétences et leurs connaissances en développement Web
        </p>
        <div class="flex justify-center">
          <router-link to="/mentors" class="inline-flex text-gray-800 bg-red-400 border-0 py-2 px-6 focus:outline-none rounded text-lg">Voir les mentors</router-link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-full">
        <img class="object-cover object-center rounded" alt="hero" src="../../../assets/img/hero.svg"/>
      </div>
    </div>
  </section>
</template>