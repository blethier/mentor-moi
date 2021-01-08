<template>
    <section class="text-black mt-12 ">
    <div class="relative bg-sands overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-sands sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-sands transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        
      </div>

    

      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <slot name="title"></slot>
          </h1>
          <p class="mt-3 text-xl sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5  lg:mx-0">
            <slot name="content"></slot>
          </p>
          
            
            
             <slot name="cta"></slot>
           
         
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
   <slot name="image"></slot>
  </div>
</div>
  </section>
</template>

<script>
export default {

}
</script>