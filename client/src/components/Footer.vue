<template>
   <footer class=" mb-12 lg:mb-0 body-font text-lg">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <router-link to="/" class="flex  font-medium items-center md:justify-start justify-center ">
       <img class="block   h-12 w-auto" src="../assets/img/minilogo.svg" alt="logo">
    </router-link>
    <p class=" text-xl text-darkSands font-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-darkSands sm:py-2 sm:mt-0 mt-4">
      © 2020 Mentor moi  
    </p>
    <router-link @click="scrollToTop" class="text-darkSands hidden lg:block font-black ml-4 underline" to="/cookie-consent">
        Cookies
    </router-link>

    <router-link @click="$scrollToTop" class="text-darkSands hidden lg:block font-black ml-4 underline" to="/terms">
        Termes et conditions
    </router-link>

    <router-link @click="$scrollToTop" class="text-darkSands hidden lg:block font-black ml-4 underline" to="/code-of-conduct">
        Mentions légales
    </router-link>



    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <a href="https://www.buymeacoffee.com/maans" target="blank" rel="noreferrer noopener" class="ml-3">
        <img class="h-8" src="../assets/img/bmc-button.png" alt="" srcset="">
      </a>

      <a href="https://twitter.com/MentorMoi" target="blank" rel="noreferrer noopener" class="ml-3 ">
       <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8 text-darkSands" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
      </a>

    </span>
    <CookieLaw buttonText="Accepter les cookies" theme="dark-lime">
      <div slot="message">
    Nous utilisons des cookies pour améliorer l’expérience utilisateur et pour analyser la 
    fréquentation du site. Pour ces raisons, il est possible que nous partagions vos données 
    d’utilisation du site avec nos partenaires de web analytique. En cliquant sur « Accepter 
    les cookies », vous consentez au stockage sur votre appareil de toutes les technologies 
    décrites dans notre <router-link class="text-darkSands font-black underline" to="/cookie-consent">Politique en matière de cookies.</router-link>
  </div>
    </CookieLaw>
  </div>
</footer>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw },
    methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        }

}
</script>