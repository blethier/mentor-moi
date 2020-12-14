<template>
    <div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-red-400 hidden lg:block lg:w-1/2 bg-cover bg-center rounded-l-lg"
						:style="{ backgroundImage: 'url(' + require('../../assets/img/auth.svg') + ')' }"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-red-200 p-5 rounded-lg lg:rounded-l-none">
						<h3 v-if="mode === 'login'" class="pt-4 text-2xl text-red-600 text-center">Connectez vous</h3>
						<h3 v-if="mode === 'signup'" class="pt-4 text-2xl text-red-600 text-center">Inscrivez vous</h3>
						<ValidationObserver v-slot="{ handleSubmit }">
						<form @submit.prevent="handleSubmit(submitForm)" class="px-8 pt-6 pb-8 mb-4  rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<ValidationProvider rules="email" v-slot="{ errors }">
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									v-model.trim="email"
									type="email"
									placeholder="JohnDoe@gmail.com"
								/>
  <p class="text-green-700 italic">{{ errors[0] }}</p>
</ValidationProvider>
							</div>

							
							
							<div v-if="mode === 'login'" class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Mot de passe
								</label>
								<ValidationProvider rules="length:6" v-slot="{ errors }">
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									v-model.trim="password"
									type="password"
									placeholder="******************"
								/>
								<p class="text-green-700 italic">{{ errors[0] }}</p>
								</ValidationProvider>
							</div>

							<div v-if="mode === 'signup'" class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									COON Mot de passe
								</label>
								<ValidationProvider rules="confirmed:confirmation" v-slot="{ errors }">
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									v-model.trim="passwordSignup"
									type="password"
									placeholder="******************"
								/>
								<p class="text-green-700 italic">{{ errors[0] }}</p>
								</ValidationProvider>
							</div>

							

							<div v-if="mode === 'signup'" class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Confirmez Mot de passe
								</label>
								<ValidationProvider v-slot="{ errors }" vid="confirmation">
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									v-model="repeatPassword"
									
									type="password"
									placeholder="******************"
								/>
								<span>{{ errors[0] }}</span>
								</ValidationProvider>
							</div>


							
							
							
							
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
									
								>
									{{submitButtonText}}
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a	@click="switchAuthMode"
									class="inline-block cursor-pointer text-red-500 align-baseline "
									
								>
									{{switchModeButton}}
								</a>
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
			formIsValid: null,
			mode: 'login'
		}
	},
    created() {
        this.loadMentors()
    },
	computed: {
		submitButtonText() {
			if (this.mode === 'login') {
				return 'Se connecter'
			} else {
				return "S'inscrire"
			}
		},
		switchModeButton() {
			if (this.mode === 'login') {
				return 'Pas de compte ? Inscrivez-vous;'
			} else {
				return 'Déja un compte ? Connectez-vous'
			}
		}
	},
	methods: {
		submitForm() {
	
			if (this.mode === 'login'){

         this.$store.dispatch('login', {
					email: this.email,
					password: this.password
				})
				this.$router.replace('/mentors')
      }
 
			
       else {
		this.$store.dispatch('signup', {
					email: this.email,
					password: this.passwordSignup
				})
      }
			}



				
			
		,
		switchAuthMode() {
			if (this.mode === 'login') {
				this.mode = 'signup';
			} else {
				this.mode = 'login';
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