/* eslint-disable no-console */
<template>
   <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">


      

          

            <div class="flex flex-col md:justify-start my-auto pt-8 md:pt-0 px-8 ">
                
                <ValidationObserver v-slot="{ invalid }">
  

      <div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">

    <div class="mt-5 md:mt-0 md:col-span-2">
      
      <form  @submit.prevent="submitForm">
        <div class="shadow  overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-sands text-gray-800 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="firstName" class="block">Prénom</label>
                <ValidationProvider rules="alpha_spaces" v-slot="{ errors }">
                <input type="text" required placeholder="John" id="firstName" v-model.trim="firstName"  class="mt-1 h-6 block py-4 px-2 w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3">
               <label for="lastName" class="block ">Nom</label>
                <ValidationProvider rules="alpha_spaces" v-slot="{ errors }">
                <input type="text" required placeholder="Doe" id="lastName" v-model.trim="lastName" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
               <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="city" class="block  ">Ville</label>
               
                <Places :options="options" required placeholder="Ville" v-model.trim="city" id="city" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label class="block">
                Avatar
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-4 border-white border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-800" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-800">
                    <label for="file-upload" class="relative cursor-pointer bg-gray-800 py-2 px-2 rounded-md font-medium text-white  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Télécharger une image</span>
                      <input type="file"
          required
          ref="avatar"
          @change="onSelect" id="file-upload" name="file-upload"  class="sr-only">
                    </label>
                    <p class="pl-1 text-red-600">{{message}}</p>
                  </div>
                  <p class="text-xs text-gray-800">
                    PNG, JPG ou JPEG max 10MB
                  </p>
                  <p>
                    {{avatar.name}}
                  </p>
                </div>
              </div>
              </div>

              <div class="col-span-6">
                <label for="title" class="block ">Titre du profil</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%&\\]*$/ }" v-slot="{ errors }">
                <input type="text" required placeholder="Développeur Front" v-model.trim="title" id="title" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block ">Twitter</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%&\\]*$/ }" v-slot="{ errors }">
                <input placeholder="Nom d'utilisateur"  v-model.trim="socials[0].twitter" type="text" name="city" id="twitter" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
               <label for="state" class="block ">Linkedin</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%&\\]*$/ }" v-slot="{ errors }">
                <input placeholder="Nom d'utilisateur"  v-model.trim="socials[0].linkedin" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                
                 <label for="state" class="block ">Github</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%&\\]*$/ }" v-slot="{ errors }">
                <input placeholder="Nom d'utilisateur"  v-model.trim="socials[0].github" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="state" class="block ">Discord</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%&\\]*$/ }" v-slot="{ errors }">
                <input placeholder="Lien"  v-model.trim="socials[0].discord" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="state" class="block ">Site perso</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%&\\]*$/ }" v-slot="{ errors }">
                <input placeholder="Lien"   v-model.trim="socials[0].web" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              
                 <label for="country" class="block  text-gray-700">Disponible</label>
                <multiselect class=" w-full py-2 px-2" v-model.trim="disponible" :options="disponibility" :multiple="false"  :close-on-select="false" :clear-on-select="false" :preserve-search="true" required placeholder="Etes vous disponible ?"  :allowEmpty="false"  :preselect-first="false"/>       
              </div>


            </div>

             <div class="col-span-6">
                <label for="country" class="block ">Technos</label>
                <multiselect class=" w-full py-2 px-2" v-model.trim="technos" :options="allTechnos" :multiple="true" :max="5"  :close-on-select="false" :clear-on-select="false" :preserve-search="true" required placeholder="Choississez 5 technos max"  :allowEmpty="false"  :preselect-first="false"/>       
              </div>

               <div class="col-span-6">
              <label for="presentation" class="block ">Présentation</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%&\\]*$/ }" v-slot="{ errors }">
                <textarea v-model.trim="presentation" required  id="presentation" class="w-full px-3 py-2 text-gray-700 border rounded-lg resize-none" rows="4"></textarea>
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
          </div>
          <div class="px-4 py-3 bg-sands text-right sm:px-6">
            <button 
                :disabled="invalid || message.length > 1" 
                :class="invalid || message.length > 1 ?  'bg-red-500 cursor-not-allowed disabled disabled:opacity-70' : 'bg-red-500'"
                type="submit" 
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
      </ValidationObserver>
            </div>

        

  


</div>

</template>

<script>
  import Multiselect from 'vue-multiselect'
import axios from 'axios';
import Places from 'vue-places';


  export default {
  components: {
    Multiselect,
    Places
  },
    mounted: async function() {
    // eslint-disable-next-line no-console
   this.$store.dispatch('loadMentors');
   await this.$store.dispatch('loadOneMentor');
   this.firstName =  this.$store.getters.oneMentor.firstName
   this.lastName =  this.$store.getters.oneMentor.lastName,
   this.disponible =  this.$store.getters.oneMentor.disponible,
  this.title =  this.$store.getters.oneMentor.title,
  this.city =  this.$store.getters.oneMentor.city,
  this.price =  this.$store.getters.oneMentor.price,
  this.avatar =  this.$store.getters.oneMentor.avatar,
  this.presentation =  this.$store.getters.oneMentor.presentation,
  this.socials =  JSON.parse(this.$store.getters.oneMentor.socials),
  this.technos =  JSON.parse(this.$store.getters.oneMentor.technos)
  
  
  
},
  data () {
    return {
      firstName: '',
      message : '',
      lastName: '',
      title:'',
      avatar: '',
      city: '',
      disponible: '',
      presentation:'',
      technos: [],
      options: {
        appId: 'plLTZK09YPDA',
        apiKey: '97d61c2265bc0e13758407c8b69dfde6',
        type: 'city',
      },
      socials: [
        {web: '', 
        linkedin: '',
        discord: '',
        twitter: '',
        github: ''
        }
        ],
        formIsValid: true,
        disponibility : [
          'Oui',
          'Non'
        ]
    }
  },

    async created  () {
     // eslint-disable-next-line no-console
     // this.$store.dispatch('loadOneMentor');
   this.$store.dispatch('loadMentors');
   
   
   this.firstName =  localStorage.getItem('firstName'),
   this.lastName =  localStorage.getItem('lastName'),
   this.disponible =  localStorage.getItem('disponible'),
  this.title =  localStorage.getItem('title'),
  this.city =  localStorage.getItem('city'),
  this.avatar =  localStorage.getItem('avatar'),
  this.presentation =  localStorage.getItem('presentation'),
  this.socials =  JSON.parse(localStorage.getItem('socials')),
  this.technos =  JSON.parse(localStorage.getItem('technos'))
  },
  computed : {
      allTechnos() {
            return this.$store.getters['allTechnos']
        },

        Onementor() {
          return this.$store.state.oneMentor
        },
        
  },
  methods : {  
    onSelect(){
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const avatar = this.$refs.avatar.files[0];
      this.avatar = avatar;
      if(!allowedTypes.includes(avatar.type)){
        this.message = "Le format est incorrect"
      }
      if(allowedTypes.includes(avatar.type)){
        this.message = " "
      }
      if(avatar.size> 2 * 1024 * 1024 * 1024){
        this.message = 'Taille max 2MB'
      }
    },
    firstLetter(word) {

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
},
       async submitForm() {


        try {
          const id = this.$store.getters.mentorId;
         const formData = new FormData();
         formData.append('firstName',this.firstLetter(this.firstName));
         formData.append('lastName',this.firstLetter(this.lastName));
         formData.append('disponible' ,this.disponible)
         formData.append('title', this.firstLetter(this.title))
         formData.append('presentation', this.presentation)
          formData.append('city', this.city)
         formData.append('technos' ,JSON.stringify(this.technos))
         formData.append('socials' , JSON.stringify(this.socials) )
         formData.append('userId' ,this.$store.getters.userId)
        formData.append('avatar',this.avatar, this.avatar.name);
  
        await axios.patch(`https://mevn-mentor-moi.herokuapp.com/api/mentors/${id}`, formData, {
      headers: {
      // remove headers
    }
    // eslint-disable-next-line no-unused-vars
    }).then(res => {
  
    })
         
        this.$router.replace('/mentors')
        this.$toast.success('Profil modifié avec succès', {
  position: 'bottom-left',
  duration: 5000

})
        } catch (error) {
          this.error = error.message || 'Erreur'
          this.$toast.error('Une erreur est survenue,veuillez vérifiez le formulaire', {
  position: 'bottom-left',
  duration: 5000

})
        }

        
      
      
        
      }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
