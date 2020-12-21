/* eslint-disable no-console */
<template>
   <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">


      

          

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                
                <ValidationObserver v-slot="{ invalid }">
                 <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="submitForm">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-red-300 sm:p-6">
            <div class="grid grid-cols-6 gap-6 text-gray-700 ">

              <div class="col-span-6  sm:col-span-3">
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


              <div class="col-span-6 sm:col-span-3">
                <label for="avatar" class="block  text-gray-700">Avatar(lien)</label>
                   <input 
          type="file"
          ref="avatar"
          @change="onSelect"
        />
         <p class="text-red-500 italic">{{ message }}</p>
              </div>

              

              <div class="col-span-6 sm:col-span-4">
                <label for="title" class="block ">Titre du profil</label>
                <ValidationProvider rules="alpha_spaces" v-slot="{ errors }">
                <input type="text" required placeholder="Développeur Front" v-model.trim="title" id="title" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block  text-gray-700">Disponible</label>
                <multiselect class="bg-red-300 w-full py-2 px-2" v-model.trim="disponible" :options="disponibility" :multiple="false"  :close-on-select="false" :clear-on-select="false" :preserve-search="true" required placeholder="Etes vous disponible ?"  :allowEmpty="false"  :preselect-first="false"/>       
              </div>


              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block ">Twitter</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%:&\\]*$/ }" v-slot="{ errors }">
                <input  v-model.trim="socials[0].twitter" type="text" name="city" id="twitter" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block ">Linkedin</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%:&\\]*$/ }" v-slot="{ errors }">
                <input  v-model.trim="socials[0].linkedin" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block ">Github</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%:&\\]*$/ }" v-slot="{ errors }">
                <input  v-model.trim="socials[0].github" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block ">Discord</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%:&\\]*$/ }" v-slot="{ errors }">
                <input  v-model.trim="socials[0].discord" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block ">Site perso</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%:&\\]*$/ }" v-slot="{ errors }">
                <input  v-model.trim="socials[0].web" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block ">Technos</label>
                <multiselect class="bg-red-300 w-full py-2 px-2" v-model.trim="technos" :options="allTechnos" :multiple="true" :max="4"  :close-on-select="false" :clear-on-select="false" :preserve-search="true" required placeholder="Choississez 4 technos max"  :allowEmpty="false"  :preselect-first="false"/>       
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="presentation" class="block ">Présentation</label>
                <ValidationProvider :rules="{ regex: /^[^<>*%:&\\]*$/ }" v-slot="{ errors }">
                <textarea v-model.trim="presentation" required  id="presentation" class="w-full px-3 py-2 text-gray-700 border rounded-lg resize-none" rows="4"></textarea>
              <p class="text-red-500 italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>

            </div>
            
          </div>
          <div class="px-4 py-3 bg-red-300 text-right sm:px-6">
            <button 
                :disabled="invalid" 
                :class="invalid ?  'bg-red-500 cursor-not-allowed disabled disabled:opacity-70' : 'bg-red-500'"
                type="submit" 
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
      </ValidationObserver>
            </div>

        

  


</div>

</template>

<script>
  import Multiselect from 'vue-multiselect'
import axios from 'axios';

 

  export default {
  components: {
    Multiselect
  },
    mounted: async function() {
    // eslint-disable-next-line no-console
    console.log('MONTE');
   // this.$store.dispatch('loadMentors')
   // this.$store.dispatch('loadOneMentor');
   this.$store.dispatch('loadMentors');
   this.$store.dispatch('loadOneMentor');
   this.firstName =  this.$store.getters.oneMentor.firstName
   this.lastName =  this.$store.getters.oneMentor.lastName,
   this.disponible =  this.$store.getters.oneMentor.disponible,
  this.title =  this.$store.getters.oneMentor.title,
  this.avatar =  this.$store.getters.oneMentor.avatar,
  this.presentation =  this.$store.getters.oneMentor.presentation,
  this.socials =  this.$store.getters.oneMentor.socials,
  this.technos =  JSON.parse(this.$store.getters.oneMentor.technos)
  
  
  
},
  data () {
    return {
      firstName: '',
      message : '',
      lastName: '',
      title:'',
      avatar: '',
      disponible: '',
      presentation:'',
      technos: [],
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

    created  () {
    
    
  },
  computed : {
      allTechnos() {
            return this.$store.getters['allTechnos']
        },

        Onementor() {
          return this.$store.state.oneMentor
        }
  },
  methods : {  
    onSelect(){
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const avatar = this.$refs.avatar.files[0];
      this.avatar = avatar;
      // eslint-disable-next-line no-console
      console.log(avatar)
      if(!allowedTypes.includes(avatar.type)){
        this.message = "Filetype is wrong!!"
      }
      if(avatar.size>15000000){
        this.message = 'Taille max 500kb, format JPG, JPEG ou PNG'
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
         formData.append('technos' ,this.technos)
         formData.append('socials' , JSON.stringify(this.socials) )
         formData.append('userId' ,this.$store.getters.userId)
        formData.append('avatar',this.avatar, this.avatar.name);
        // eslint-disable-next-line no-console
        console.log(formData)
        await axios.patch(`https://mentor-moi.herokuapp.com/api/mentors/${id}`, formData, {
      headers: {
      // remove headers
    }
    }).then(res => {
    // eslint-disable-next-line no-console
    console.log('RESPONSE' + ' ' + res);
    //this.$store.context.commit('setMentorId', res.data.mentor)
    //this.$store.context.commit('registerMentor', {...formData})
    })
         
        this.$router.replace('/mentors')
        this.$swal('Compte mentor modifié');
        } catch (error) {
          this.error = error.message || 'Erreur'
          this.$swal('Erreurs');
        }

        
      
      
        
      }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
