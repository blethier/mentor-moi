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
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
						<form @submit.prevent="submitForm" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									v-model.trim="email"
									type="email"
									placeholder="JohnDoe@gmail.com"
								/>
							</div>
							<p v-if="!formIsValid" > Corrige !</p>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Mot de passe
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									v-model.trim="password"
									type="password"
									placeholder="******************"
								/>
							</div>
							
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									{{submitButtonText}}
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a	@click="switchAuthMode"
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									
								>
									{{switchModeButton}}
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./forgot-password.html"
								>
									Forgot Password?
								</a>
							</div>
						</form>
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
			formIsValid: true,
			mode: 'login'
		}
	},
	computed: {
		submitButtonText() {
			if (this.mode === 'login') {
				return 'Login;'
			} else {
				return 'Signup'
			}
		},
		switchModeButton() {
			if (this.mode === 'login') {
				return 'Signup Instead;'
			} else {
				return 'Login instead'
			}
		}
	},
	methods: {
		submitForm() {
			this.formIsValid = true;
			if (this.email === '' || !this.email.includes('@') || this.password.length < 6 ){
				this.formIsValid = false
			}
			//Send Form to the back
		},
		switchAuthMode() {
			if (this.mode === 'login') {
				this.mode = 'signup';
			} else {
				this.mode = 'login';
			}
		}
	}
}
</script>