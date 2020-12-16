<template>
    <div class="font-sans container flex justify-center leading-tight   p-8">
        <pulse-loader v-if="isPending" color="#F87171" class="text-center text-red-500" ></pulse-loader>
  <CardMentor  :firstName="user.firstName"
                                                                            :lastName="user.lastName"
                                                                                :title="user.title"
                                                                                :avatar="user.avatar"
                                                                                :role="user.role"
                                                                                :disponible="user.disponible"
                                                                                :presentation="user.presentation"
                                                                                :city="user.city"
                                                                                :technos="user.technos"
                                                                                :socials="user.socials"
                                                                                :id="user._id" /> 
</div>
     
  
</template>

<script>
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import CardMentor from './partials/CardMentor.vue'


export default {
    components : {PulseLoader, CardMentor},
     data () {
    return {
     user: {},
     isPending: false
   }
  },

  mounted () {

  axios.get('https://mentor-moi.herokuapp.com/api/mentor/' + this.$route.params.id)
  .then((result) => {
      this.isPending = true
   this.user = result.data;
   this.isPending = false
   // eslint-disable-next-line no-console
   console.log(this.user);

   })
  },
  computed : {
      name() {
          return this.user.firstName + ' ' + this.user.lastName
      },
      isAuth(){
          return this.$store.getters.isAuth
      },
      isDisponible() {
			if (this.user.disponible === 'Oui') {
				return 'Disponible'
			} else {
				return 'Indisponible'
			}
		}
  },

}
</script>

<style scoped>
div /deep/ p {
      background-color: red;
    }


</style>