<template>
    <div class="font-sans lg:h-screen container flex justify-center leading-tight   p-8">
        <pulse-loader v-if="isPending" color="#F87171" class="text-center text-red-500" ></pulse-loader>
  <CardMentor  :firstName="thisMentor.firstName"
                                                                            :lastName="thisMentor.lastName"
                                                                                :title="thisMentor.title"
                                                                                :avatar="thisMentor.avatar"
                                                                                :role="thisMentor.role"
                                                                                :disponible="thisMentor.disponible"
                                                                                :presentation="thisMentor.presentation"
                                                                                :technos="thisMentor.technos"
                                                                                :socials="thisMentor.socials"
                                                                                :id="thisMentor._id" /> 
</div>
     
  
</template>

<script>

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import CardMentor from './partials/CardMentor.vue'


export default {
    components : {PulseLoader, CardMentor},
     data () {
    return {
     thisMentor: {},
     isPending: false
   }
  },

  mounted () {
this.mentorProfile()
  },
  computed : {
      isAuth(){
          return this.$store.getters.isAuth
      },
      isDisponible() {
			if (this.user.disponible === 'Oui') {
				return 'Disponible'
			} else {
				return 'Indisponible'
			}
        },
  },
  methods : {
      mentorProfile(){
          const mentorId = this.$store.getters.allMentors
          const thisMentor = mentorId.filter(mentor => mentor._id === this.$route.params.id)
          this.thisMentor = thisMentor[0]
      }
  }

}
</script>

<style scoped>
div /deep/ h2 {
      text-decoration: none;
      cursor: default;
    }
div /deep/ img {
      text-decoration: none;
      cursor: default;
    }



</style>