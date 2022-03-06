<template>
  <div>
    <div class="row">
      <footer class="col-12 p-0">
        <div class="container max-1600">
          <div class="row">
            <div class="col-md-3">
              <h4 class="thin-fonts">Quick Links</h4>
              <NuxtLink v-for="footerP in pages" 
                :to="`/${footerP.slug}`"
                class="d-block text-black-50"
                :key="footerP.id"
              >
                {{ footerP.name }}
              </NuxtLink>
            </div>
            <div class="col-md-3">
              <h4 class="thin-fonts">What to do When</h4>
              <NuxtLink v-for="footerW in whatToDoWhens" 
                :to="`/what-to-do-when/${footerW.slug}`"
                class="d-block text-black-50"
                :key="footerW.id"
              >
                {{ footerW.name }}
              </NuxtLink>
            </div>
            <div class="col-md-3">
              <h4 class="thin-fonts">Natural Adventures</h4>
              <NuxtLink v-for="footerN in naturalAdventures.slice(0,8)"
                :to="`/natural-adventures/${footerN.slug}`"
                class="d-block text-black-50"
                :key="footerN.id"
              >
                {{ footerN.name }}
              </NuxtLink>
            </div>
            <div class="col-md-3">
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
export default {
  data() {
    return {
      pages: [],
      whatToDoWhens: [],
      naturalAdventures: []
    }
  },
  async fetch() {
    const storeHasPages = this.$store.state.pages.pages.length > 0;
    const storeHasWhatToDoWhens = this.$store.state.whatToDoWhen.whatToDoWhens.length > 0;
    const storeHasNaturalAdventures = this.$store.state.naturalAdventures.naturalAdventures.length > 0;

    if(!storeHasPages) {
      this.pages = await this.$axios.$get(`${this.$store.state.settings.apiURL}/pages`);
    } else {
      this.pages = this.$store.state.pages.pages
    }

    if(!storeHasWhatToDoWhens) {
      this.whatToDoWhens = await this.$axios.$get(`${this.$store.state.settings.apiURL}/what-to-do-when`);
    } else {
      this.whatToDoWhens = this.$store.state.whatToDoWhen.whatToDoWhens
    }
    
    if(!storeHasNaturalAdventures) {
      this.naturalAdventures = await this.$axios.$get(`${this.$store.state.settings.apiURL}/natural-adventures`);
    } else {
      this.naturalAdventures = this.$store.state.naturalAdventures.naturalAdventures
    }
  }
}
</script>