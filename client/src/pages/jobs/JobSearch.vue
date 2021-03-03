<template>

         <div class="container mx-auto">
    <Hero>
      <template v-slot:title>
        <span class="block xl:inline">Trouvez le poste </span>
            <span class="block text-green-800 xl:inline">idéal</span>
      </template>
      <template v-slot:content>
        Rechercher les postes ouverts en renseignant le métier et la localisation souhaité.
      </template>
    
      <template v-slot:image>
         <img  class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../../../src/assets/img/jobs.jpg"  alt=""/>
      </template>
    </Hero>
    <form @submit.prevent="fetchJobs" class="flex my-14 lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full" data-children-count="1">
        <input  required type="search" placeholder="Poste"  v-model="searchJobs" class="w-full bg-sands placeholder-black rounded border-4 border-darkSands focus:border-darkSands  focus:ring-2 focus:ring-indigo-200 text-lg italic font-black outline-none text-black py-1 px-3 leading-8 " >
      </div>
      <div class="relative flex-grow w-full" data-children-count="1">
        <Places
          class="w-full bg-sands font-black rounded border-4 border-darkSands focus:border-darkSands placeholder-black focus:ring-2 focus:ring-indigo-200 text-lg italic font-black outline-none text-black h-12 py-1 px-3 leading-8 "
    v-model="city"
    placeholder="Ville"
   
    :options="options">
  </Places>
      
      </div>
      <button type="submit" class="text-white font-black bg-darkSands border-0 py-2 px-8 focus:outline-none  rounded text-lg">Rechercher</button>
      <button type="button"  @click="clear" class="text-white font-black bg-green-700 border-0 py-2 px-8 focus:outline-none  rounded text-lg">Effacer</button>
    </form>

    

    <p v-if="loading" class="text-center">
      <font-awesome-icon class="animate-spin text-darkSands text-5xl" icon="sync-alt" />
    </p>

    <div class="flex justify-center" v-if="showJobs.length === 0">
      <img class=" h-96" src="../../assets/img/empty.svg" alt="">
    </div>

        <div class="container my-12 mx-auto px-4 md:px-12">
            <div :key="job.id" v-for="job in showJobs"  class="flex flex-wrap -mx-1 mb-6 lg:-mx-4">
            
     
                <!-- component  -->
<div class="w-full lg:flex">
  
  <div class="border-r w-full border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light  invertedDarkMode rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-lg italic  flex items-center">
        {{job.company.display_name}}
      </p>
       <p class="text-lg italic  flex items-center">
        {{job.location.display_name}}
      </p>
      <div v-html="job.title" class=" font-bold text-xl mb-2"> {{job.title}} </div>
      <p v-html="job.description" class=" text-base">
        {{job.description}}
      </p>
      <a class="text-red-500" :href="job.redirect_url" target="_blank" rel="noopener noreferrer">
      En savoir plus...
      </a>
    </div>
    <div class="flex items-center">
      <p class="text-lg italic  flex items-center"> Postée le :  {{ job.created | formatDate}} </p>
     
    </div>
  </div>
</div>

            </div>
             <!-- pagination  -->
            <div v-if="lastPage" class="flex justify-center items-center">
    <button @click="prevPage" :disabled="prevIsDisabled" class="border border-teal-500 text-teal-500  rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
        <svg class="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
            <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
        </svg>
        Page précédente
    </button>
    <p class="text-darkSands font-black text-xl">{{ page }} of {{ lastPage }} </p>
    <button @click="nextPage" :disabled="nextIsDisabled" class="border  rounded-sm font-bold py-4 px-6 ml-2 flex items-center">
        Page suivante
        <svg class="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
        <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
        </svg>
    </button>
</div>
 <!-- /pagination  -->
        </div>
    </div>     
</template>
<script>
import axios from 'axios'
import Places from 'vue-places';
import Hero from '../../components/Hero'


export default {
    components: {
        Places,
        Hero
    },
    data() {
        return {
            jobs:[],
            searchJobs: '',
            page: 1,
            perPage: 10,
            city: '',
            loading: false,
             form: {
        country: {
          label: null,
          data: {},
        },
      },
               options: {
        appId: 'plLTZK09YPDA',
        apiKey: '97d61c2265bc0e13758407c8b69dfde6',
        countries: ['FR'],
        type: 'city'
      },
      
        }
    },
    computed: {
showJobs () {
    let start = (this.page - 1) * this.perPage
    let end = start + this.perPage
    return  this.jobs.slice(start, end)
  },
  lastPage () {
 let length = this.jobs.length 

 return Math.round(length / this.perPage)
},
nextIsDisabled() {
  return this.page === this.lastPage || this.lastPage === 0 
},
prevIsDisabled() {
  return this.page === 1
}
    },
    methods: {
      
        fetchJobs() {
          this.loading = true
            axios.get(`https://api.adzuna.com/v1/api/jobs/fr/search/${this.page}?app_id=efa0cea7&app_key=f9f5a984f67f6477312f48226670b1da&results_per_page=100&what=${this.searchJobs}&where=${this.city}&distance=15&sort_by=date` )
                .then(response => {
                    
                    
                    
                    
                    
                    
                    this.jobs = response.data.results
                    this.loading = false
                    this.searchJobs = ''
                    this.city = ''
                }).catch(e => {
                    // eslint-disable-next-line no-console
                    console.log(e)
                })
        },
        
        clear(){
            this.jobs = []
        },
         prevPage () {
  this.page--
},
nextPage () {
  this.page++
},
 

    }

    
}
</script>
<style >
.ap-dataset-places{
  background-color: #A67C50;
}
.ap-name, .ap-address {
  color: white;
  font-weight: 800;
  box-shadow: black;
}

.ap-cursor{
  background-color: black;
}
.ap-input-icon svg  {
  display: none;
}
</style>