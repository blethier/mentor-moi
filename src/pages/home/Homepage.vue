<template>
<div>
    <Hero />
   <Waves />
    <Presentation />
    <Waves />
</div>
</template>

<script>
import Presentation from './partials/Presentation'
import Waves from '../../components/Waves'
import Hero from './partials/Hero'

export default {
    components: {
      Presentation,
      Waves,
      Hero
    },
    created(){
this.loadMentors()
this.loadOneMentor()
    },

    methods: {
        async loadMentors() {
            this.isPending = true
            await this.$store.dispatch('loadMentors');
            this.isPending = false
        },
         async loadOneMentor() {
            if(this.mentorId !== undefined) {
        this.$store.dispatch('loadOneMentor');        
            }  
        }
    }
}
</script>