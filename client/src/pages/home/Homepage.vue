<template>
<div>
    <Hero />
   <Waves />
    <Presentation />
    <Job />
    <Waves />
</div>
</template>

<script>
import Presentation from './partials/Presentation'
import Job from './partials/Job'
import Waves from '../../components/Waves'
import Hero from './partials/Hero'

export default {
    components: {
      Presentation,
      Job,
      Waves,
      Hero
    },
}
</script>