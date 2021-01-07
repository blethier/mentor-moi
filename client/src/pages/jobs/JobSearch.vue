<template>
    <form>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading"><h1><strong>Lista de nombres</strong></h1></div>
        </div>
        <br />
        <p v-if="loading === true" class="bg-red-500 text-xl text-yellow-100"> LOADING... </p>
        <p> {{jobs}} </p>
        <div class="form-group">
            <form @submit.prevent="buscarUsuario" class="input-group">
                <input required type="search" class="text-red-700 mr-10" v-model="searchJobs" placeholder="Buscar usuario" />
                <input required type="search" class="text-red-700 mr-10" v-model="city" placeholder="villes" />
                <button type="submit" class=" bg-blue-400  mr-8">Buscar</button>
                <button type="button" @click="clear" class="bg-green-400">clear</button>
            </form>
        </div>
      
    </div>
</form>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            jobs:[],
            searchJobs: '',
            city: '',
            loading: false
        }
    },
    methods: {
        buscarUsuario() {
            axios.get(`https://api.adzuna.com/v1/api/jobs/fr/search/1?app_id=efa0cea7&app_key=f9f5a984f67f6477312f48226670b1da&results_per_page=150&what=${this.searchJobs}&where=${this.city}` )
                .then(response => {
                    
                    
                    // eslint-disable-next-line no-console
                    console.log(response.data)
                    this.loading = true
                    this.jobs = response.data
                    this.loading = false
                }).catch(e => {
                    // eslint-disable-next-line no-console
                    console.log(e)
                })
        },
        clear(){
            this.jobs = null
        }


    }

    
}
</script>