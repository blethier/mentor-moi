<template>
    <div class="container text-gray-800 h-screen mx-auto">
			<div class="flex justify-center px-6 my-12">
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<div class="w-full h-auto bg-red-400 hidden lg:block lg:w-1/2 bg-cover bg-center rounded-l-lg"
						:style="{ backgroundImage: 'url(' + require('../../assets/img/jay.jpg') + ')' }"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-sands p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl  text-center">Connectez vous</h3>
						<ValidationObserver v-slot="{ invalid }">
						<form @submit.prevent="submitForm" class="px-8 pt-6 pb-8 mb-4  rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold " for="username">
									Email
								</label>
								<ValidationProvider rules="email" v-slot="{ errors }">
		
								<div class="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
              <input required v-model.trim="email" class="w-full text-xs  bg-gray-50 outline-none" type="email" placeholder="name@email.com">
              
            </div>
  <p class="text-red-700 italic">{{ errors[0] }}</p>
</ValidationProvider>
<p class="text-red-500 italic"> {{error}} </p>
							</div>

							
							
							<div  class="mb-4">
								<label class="block mb-2 text-sm font-bold " for="password">
									Mot de passe
								</label>
								<ValidationProvider rules="min:6" v-slot="{ errors }">
							
								<div class="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
              <input :type="passwordFieldType" required v-model.trim="password" class="w-full text-xs bg-gray-50 outline-none" placeholder="Votre mot de passe" data-kwimpalastatus="alive" data-kwimpalaid="1613148787270-12">
              <span class=" cursor-pointer" type="password" @click="switchVisibility">
                <svg class="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </span>
            </div>
								<p class="text-red-500 italic">{{ errors[0] }}</p>
								</ValidationProvider>
							</div>

							

							

					

							
							
							
							
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline"
									:class="invalid ?  'bg-darkSands cursor-not-allowed disabled disabled:opacity-50' : 'bg-darkSands'"
									type="submit"
									:disabled="invalid"
								>
									Se connecter
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<router-link to="signup"	
									class="inline-block cursor-pointer text-black font-black text-base align-baseline "
									
								>
									Pas de compte ? inscrivez vous
								</router-link>
							</div>
							
						
						</form>
						</ValidationObserver>
					</div>
				</div>
			</div>
		</div>
</template>

<script>

export default {
	data() {
		return {
			email: '',
			password: '',
			passwordSignup: '',
			repeatPassword: '',
			passwordFieldType: 'password',
			value: '',
			error : null,
			formIsValid: null,
		
		}
	},
	
	methods: {
		switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
  },
		async submitForm() {
		
			
			
			try {
        await this.$store.dispatch('login', {
					email: this.email,
					password: this.password
				})
                this.$router.replace('/mentors')
                 this.$toast.success('Connexion réussie', {
  position: 'bottom-right',
  duration: 5000

})

			} catch (error) {
				// eslint-disable-next-line no-console
			
			this.error = error.message || 'Erreur';
			this.$toast.error('Veuillez corriger vos erreurs', {
  position: 'bottom-right',
  duration: 5000

})
	
	
      }
 
			
			},

		async loadMentors() {
            this.isPending = true
            await this.$store.dispatch('loadMentors');
            this.isPending = false
        }
	}
}
</script>