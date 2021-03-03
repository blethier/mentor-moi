<template>
    <section class=" darkMode ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-4xl font-bold  mb-4 text-darkSands">
        Quelques métiers du numérique
      </h1>
      
    </div>
    <div class="flex flex-wrap -m-4">
      <div v-for="job in jobs" :key="job.title" class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
        
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center " :src="job.image">
          <div class="px-8 py-10 bg-sands  text-gray-800 relative z-10 w-full border-4 h-64 border-gray-200 darkMode opacity-0 hover:opacity-100">
            <h2 class="tracking-widest   font-bold  mb-1">{{job.title}}</h2>
            
            <p class="leading-relaxed">
             {{job.description}}
            </p>
          </div>
        </div>
      </div>
      
     
     
      
      
      
    </div>
  </div>
</section>
</template>

<script>
export default {
    computed: {
         jobs() {
            return this.$store.getters['allJobs']
        },
    }
}
</script>