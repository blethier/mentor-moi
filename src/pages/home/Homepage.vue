<template>
<div>
    <p class="text-red-500">{{mentorId}}</p>
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
    //created() {
    //    this.loadMentors()
    //},
    computed: {
mentorId() {
            return this.$store.getters['mentorId']
        },
    },
    methods: {
        async loadMentors() {
            this.isPending = true
            await this.$store.dispatch('loadMentors');
            this.isPending = false
        }
    }
}
</script>