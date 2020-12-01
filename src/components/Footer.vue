<template>
    <footer class=" darkMode mt-10 py-10 text-base">
            <div class="max-w-5xl mx-auto pb-8 mb-6 border-b border-red-400 px-4 lg:px-0">
                <div class="flex flex-wrap items-start justify-start">
                    <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
                        <h5 class="font-semibold mb-2">Comment ça marche ?</h5>
                    </div>

                    <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
                        <h5 class="font-semibold  mb-2">Conditions</h5>
                    </div>

                    <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
                        <h5 class="font-semibold mb-2">
                            <a href="https://breakingbadapi.com/" target="_blank">
                                RGPD
                            </a>
                        </h5>
                    </div>

                    <div class="lg:w-1/4 w-full">
                        <div class="flex items-baseline justify-start mb-2">
                            <a href="https://www.linkedin.com/in/mansour-mahamat-salle-138b73138/"
                                class="mr-2"
                                target="_blank">
                                <font-awesome-icon class="linkSocial" :icon="['fab', 'linkedin']" />
                            </a>

                            <a href="https://github.com/mansmahamat" target="_blank" class="mr-2">
                                 <font-awesome-icon class="linkSocial" :icon="['fab', 'github-square']" />
                            </a>

                            <a href="http://mansour-mahamat.fr/" target="_blank">
                                <font-awesome-icon class="linkSocial" icon="globe" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="max-w-5xl mx-auto flex items-center px-4 lg:px-0">
                <i class="fas fa-award text-xl  "></i>
                <p class=" font-medium text-base pl-2">
                    &copy; 2020 Mentor-Moi All rights reserved.</p>
            </div>
        </footer>
</template>

<script>
export default {
    
}
</script>