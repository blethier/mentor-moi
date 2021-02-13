<template>
<div class="text-gray-600 body-font lg:h-screen h-auto">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-20 bg-indigo-500 text-red-600 rounded"> </div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap  -m-4">
      <div v-for="article in articles" :key="article.name" class="xl:w-1/4  md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 h-72 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" :src="article.image" alt="content">
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{article.name}}</h2>
            <a :href="article.link" target="blank" rel="noreferrer noopener" class="leading-relaxed text-red-600 text-xl overflow-auto">
              Voir la ressource
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
        },
    }
}
</script>