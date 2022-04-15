<template>
  <div>
    <div class="row">
      <footer class="col-12 p-0">
        <div class="container max-1600">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4">
              <h4 class="thin-fonts">Quick Links</h4>
              <NuxtLink v-for="footerP in pages" 
                :to="`/${footerP.slug}`"
                class="d-block text-black-50"
                :key="footerP.id"
              >
                {{ footerP.name }}
              </NuxtLink>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
              <h4 class="thin-fonts">What to do When</h4>
              <NuxtLink v-for="footerW in whatToDoWhens" 
                :to="`/what-to-do-when/${footerW.slug}`"
                class="d-block text-black-50"
                :key="footerW.id"
              >
                {{ footerW.name }}
              </NuxtLink>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
              <h4 class="thin-fonts">Natural Adventures</h4>
              <NuxtLink v-for="footerN in naturalAdventures.slice(0,8)"
                :to="`/natural-adventures/${footerN.slug}`"
                class="d-block text-black-50"
                :key="footerN.id"
              >
                {{ footerN.name }}
              </NuxtLink>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
              <h4 class="thin-fonts">Get in Touch</h4>
              <address>
                <h5 class="mb-2">Natural History Safari</h5>
                <span>P. O. Box 12044 Arusha</span> <br>
                <span>Tanzania, United Republic</span>
                <p class="mt-0">
                  Tel(TZ): <a href="tel:+255753306061" class="text-black-50">+255753306061</a> <br>
                  Tel(US): <a href="tel:+1 (760) 272-1913" class="text-black-50">+1 (760) 272-1913</a> <br>
                  <a href="mailto:info@naturalhistorysafari.com" class="text-black-50">info@naturalhistorysafari.com</a> <br>
                  <a href="mailto:mchedester@livingdesert.org" class="text-black-50">mchedester@livingdesert.org</a> <br>
                  <a href="mailto:boni@naturalhistorysafari.com" class="text-black-50">boni@naturalhistorysafari.com</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters({
      pages: 'pages/pages',
      whatToDoWhens: 'whatToDoWhen/whatToDoWhens',
      naturalAdventures: 'naturalAdventures/naturalAdventures'
    })
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch()
  },
  async fetch() {
    const { data: pages } = await this.$axios.get(`${this.$store.state.settings.apiURL}/pages`);
    const { data: whatToDoWhens } = await this.$axios.get(`${this.$store.state.settings.apiURL}/what-to-do-when`);
    const { data: naturalAdventures } = await this.$axios.get(`${this.$store.state.settings.apiURL}/natural-adventures`);

    if(pages.length) this.$store.commit('pages/SET_PAGES', pages);
    if(whatToDoWhens.length) this.$store.commit('whatToDoWhen/SET_WHAT_TO_DO_WHENS', whatToDoWhens);
    if(naturalAdventures.length) this.$store.commit('naturalAdventures/SET_NATURAL_ADVENTURES', naturalAdventures);
  }
}
</script>