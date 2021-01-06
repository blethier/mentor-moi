<template>
    <form>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading"><h1><strong>Lista de nombres</strong></h1></div>
        </div>
        <br />
        <p> {{usuarios}} </p>
        <div class="form-group">
            <div class="input-group">
                <input type="search" class="form-control" v-model="busqueda" placeholder="Buscar usuario" />
                <button type="submit" class="btn btn-default" @submit="buscarUsuario">Buscar</button>
            </div>
        </div>
      
    </div>
</form>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            usuarios:[],
            busqueda: ''
        }
    },

    methods: {
        buscarUsuario() {
            axios.get(`https://api.adzuna.com/v1/api/jobs/fr/search/1?app_id=efa0cea7&app_key=f9f5a984f67f6477312f48226670b1da&results_per_page=100&what=${this.busqueda}&where=paris` )
                .then(response => {
                    // eslint-disable-next-line no-console
                    console.log(response.data)
                    this.usuarios = response.data
                }).catch(e => {
                    // eslint-disable-next-line no-console
                    console.log(e)
                })
        },


    },

    created() {
            this.buscarUsuario()
    }

    
}
</script>