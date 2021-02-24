<template>
    <div class="container text-gray-800 h-screen mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover bg-center rounded-l-lg"
						:style="{ backgroundImage: 'url(' + require('../../assets/img/jay.jpg') + ')' }"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-sands p-5 rounded-lg lg:rounded-l-none">
					
						<h3 class="pt-4 text-2xl  text-center">Inscrivez vous</h3>
						<ValidationObserver v-slot="{ invalid }">
						<form @submit.prevent="submitForm" class="px-8 pt-6 pb-8 mb-4  rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold " for="username">
									Email
								</label>
								<ValidationProvider rules="email" v-slot="{ errors }">
								<input
									class="w-full px-3 py-2 text-sm leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									required
									v-model.trim="email"
									type="email"
									placeholder="JohnDoe@gmail.com"
								/>
  <p class="text-red-700 italic">{{ errors[0] }}</p>
</ValidationProvider>
<p class="text-red-500 italic"> {{error}} </p>
							</div>

							
							
							

							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold " for="password">
									Mot de passe
								</label>
								<ValidationProvider rules="confirmed:confirmation" v-slot="{ errors }">
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight  border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									required
									v-model.trim="passwordSignup"
									type="password"
									placeholder="Votre mot de passe"
								/>
								<p class="text-red-700 italic">{{ errors[0] }}</p>
								</ValidationProvider>
							</div>

							

							<div  class="mb-4">
								<label class="block mb-2 text-sm font-bold " for="password">
									Confirmez Mot de passe
								</label>
								<ValidationProvider v-slot="{ errors }" vid="confirmation">
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight  border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									v-model="repeatPassword"
									
									type="password"
									placeholder="Confirmez votre mot de passe"
								/>
								<span>{{ errors[0] }}</span>
								</ValidationProvider>
							</div>


							
							
							
							
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline"
									:class="invalid ?  'bg-darkSands cursor-not-allowed disabled disabled:opacity-50' : 'bg-darkSands'"
									type="submit"
									:disabled="invalid"
								>
									S'inscrire
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<router-link to="/login"
									class="inline-block cursor-pointer text-black font-black text-base align-baseline "
									
								>
									Déjà un compte ? Connectez vous
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
			value: '',
			error : null,
			formIsValid: null,
		}
	},
	
	methods: {
		async submitForm() {
		
			
				
			
			


		try {
			await this.$store.dispatch('signup', {
					email: this.email,
					password: this.passwordSignup
				})
                this.$router.replace('/login')
                  this.$toast.success('Inscription réussie', {
  position: 'bottom-right',
  duration: 5000

})
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error)
			this.error = error.message || 'Erreur'
			this.$toast.success('Veuillez corriger vos erreurs', {
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