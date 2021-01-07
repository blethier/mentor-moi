<template>
    <div class="font-sans lg:h-screen container flex justify-center leading-tight   p-8">
       
  <CardMentor   :firstName="thisMentor.firstName"
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


import CardMentor from './partials/CardMentor.vue'


export default {
    components : { CardMentor},
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