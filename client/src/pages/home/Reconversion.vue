<template>
<div class=" body-font  h-full">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 ">
          Blog
        </h1>
        <div class="h-1 w-20 bg-darkSands text-red-600 rounded"> </div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed ">
          Quelques blogs vraiment utiles pour un développeur junior ou en reconversion,
          on y retrouve conseils, retour d'éxpérience... <br />

        Si vous connaissez d’autres blogs de développeurs(euses), faites moi signe sur<a href="https://twitter.com/MentorMoi" target="blank" rel="noreferrer noopener" class="ml-3 text-xl font-black text-darkSands">Twitter</a>
        , la seule condition il faut que ça soit un blog en Français.
      </p>
    </div>
    <div class="flex flex-wrap  -m-4">
      <div v-for="article in articles" :key="article.name" class="xl:w-1/4  md:w-1/2 p-4">
        <div class="bg-darkSands p-6 h-72 rounded-lg">
          <a target="_blank" rel="noreferrer noopener" :href="article.link">
            <img class="h-40 rounded w-full object-cover object-center mb-6" :src="article.image" alt="content">
          <h2 class="text-lg  font-medium title-font mb-4">{{article.name}}</h2>
            <a :href="article.link" target="_blank" rel="noreferrer noopener" class="leading-relaxed  font-black text-xl overflow-auto">
              Voir la ressource
            </a>
          </a>
          
        </div>
      </div> 
    </div>
  </div>
</div>
</template>

<script>
export default {
    computed: {
         articles() {
            return this.$store.getters['allArticles']
        }
    },
    created() {
      this.articles
    }
}
</script>