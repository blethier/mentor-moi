<template>
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-red-300">
              
              <div  :style="{'background-image':`url('https://images.unsplash.com/photo-1602525658150-4cf45e12c9ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')`}"
              class="block bg-cover bg-top bg-no-repeat
              py-2 px-2 relative h-48 rounded overflow-hidden">
              </div>

              <div class="-mt-4 bg-green-700 text-center">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Saison : 3
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium"> {{ mentor.firstName }} </h2>
                <p class="mt-1">Yes</p>
          
    

              </div>
            </div>
</template>

<script>
export default {
    props: ['mentor'],
}
</script>