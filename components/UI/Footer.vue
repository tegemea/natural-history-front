<template>
  <div>
    <div class="row">
      <footer class="col-12 p-0">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h4 class="thin-fonts">About us</h4>
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
      whatToDoWhens: [],
      naturalAdventures: []
    }
  },
  async fetch() {
    const storeHasWhatToDoWhens = this.$store.state.whatToDoWhen.whatToDoWhens.length > 0;
    const storeHasNaturalAdventures = this.$store.state.naturalAdventures.naturalAdventures.length > 0;

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