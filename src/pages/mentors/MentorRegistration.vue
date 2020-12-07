<template>
   <div class="container text-gray-800 mx-auto px-4">


      

          

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p class="text-center mb-4 text-3xl">Mentor</p>
                 <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="submitForm">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-red-300 sm:p-6">
            <div class="grid grid-cols-6 gap-6">

              <div class="col-span-6 sm:col-span-3">
                <label for="firstName" class="block text-gray-700">Prénom</label>
                <input type="text" required placeholder="John" id="firstName" v-model.trim="firstName"  class="mt-1 h-6 block py-4 px-2 w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="lastName" class="block  text-gray-700">Nom</label>
                <input type="text" required placeholder="Doe" id="lastName" v-model.trim="lastName" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email" class="block  text-gray-700">Email</label>
                <input type="email" required placeholder="JohnDoe@mentor.fr" v-model.trim="email" id="email" class="mt-1 h-6 block py-4 px-2 w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block  text-gray-700">Statut</label>
                <multiselect class="bg-red-300 w-full py-2 px-2" v-model="role" :options="roleList" :searchable="false" :preselect-first="true"
                    :close-on-select="false"
                    :show-labels="false"
                    placeholder="Selectionner votre statut"/>       
              </div>


              <div class="col-span-6 sm:col-span-3">
                <label for="avatar" class="block  text-gray-700">Avatar(lien)</label>
                <input type="text" id="avatar" v-model.trim="avatar" placeholder="https://images.unsplash.com/photo-1591622414979-6ef6664b2589?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwbGl2ZXMlMjBtYXR0ZXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" class="mt-1 h-6 block w-full shadow-sm py-4 px-2 rounded-md">
              </div>

              

              <div class="col-span-6 sm:col-span-4">
                <label for="title" class="block  text-gray-700">Titre du profil</label>
                <input type="text" required placeholder="Développeur Front" v-model.trim="title" id="title" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block  text-gray-700">Twitter</label>
                <input  v-model.trim="socials[0].twitter" type="text" name="city" id="twitter" class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block  text-gray-700">Linkedin</label>
                <input  v-model.trim="socials[0].linkedin" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block  text-gray-700">Github</label>
                <input  v-model.trim="socials[0].github" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block  text-gray-700">Discord</label>
                <input  v-model.trim="socials[0].discord" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block  text-gray-700">Site perso</label>
                <input  v-model.trim="socials[0].web" type="text"  class="mt-1 h-6 py-4 px-2 block w-full shadow-sm  rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block  text-gray-700">Technos</label>
                <multiselect class="bg-red-300 w-full py-2 px-2" v-model.trim="technos" :options="allTechnos" :multiple="true" :max="4"  :close-on-select="false" :clear-on-select="false" :preserve-search="true" required placeholder="Choississez 4 technos max"  :allowEmpty="false"  :preselect-first="false"/>       
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="presentation" class="block  text-gray-700">Présentation</label>
                <textarea v-model.trim="presentation" required  id="presentation" class="w-full px-3 py-2 text-gray-700 border rounded-lg resize-none" rows="4"></textarea>
              </div>

            </div>
            
          </div>
          <div class="px-4 py-3 bg-red-300 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
            </div>

        

  


</div>

</template>

<script>
  import Multiselect from 'vue-multiselect'

 

  export default {
  components: {
    Multiselect
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      title:'',
      avatar: '',
      presentation:'',
      city: '',
      role: '',
      technos: [],
      socials: [
        {web: '', 
        linkedin: '',
        discord: '',
        twitter: '',
        github: ''
        }
        ],
        roleList: [
          'mentor',
          'alumni'
        ],
        formIsValid: true
    }
  },
  computed : {
      allTechnos() {
            return this.$store.getters['allTechnos']
        }
  },
  methods : {  
      submitForm() {

        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          avatar: this.avatar,
          role: this.role,
          title: this.title,
          presentation: this.presentation,
          technos: this.technos,
          socials: this.socials
        };
        // eslint-disable-next-line no-console
        this.$store.dispatch('registerMentor',formData);
        this.$store.dispatch('loadMentors');
        this.$router.replace('/mentors')
      }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
