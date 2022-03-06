<template>
  <div>
    <div class="row">
      <div class="col-12 slider p-0">
        <img src="~/assets/images/cheetah.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="container main">
      <div class="row">
        <div class="col-lg-12 py-3">
          <p class="quote text-center cursive-fonts">
            "I never knew of a morning in Africa when I woke up and was not happy." <br>
            <small class="text-black-50">-- Ernest Hemingway</small>
          </p>
          <p class="welcome">
            We at Natural History Safaris are committed to deliver the best wilderness experience in Africa. The very personal service and outstanding guiding in our small and remote properties offers unforgettable and often life challenging safaris adventures
          </p>
        </div>
      </div>
    </div>
    <div class="row pale-bg">
      <div v-if="whyTravelWithUs" class="col-md-6 py-4 d-flex flex-column align-items-center justify-content-center">
        <h3 class="thin-fonts mb-4 text-center text-uppercase">{{ whyTravelWithUs.name }}</h3>
        <div class="text-justify px-4" v-html="whyTravelWithUs.description.length > 300 ? whyTravelWithUs.description.substr(0, 300) + '...' : whyTravelWithUs.description"></div>
        
        <NuxtLink :to="whyTravelWithUs.slug" class="btn btn-outline-brand rounded-0 mt-3">Read More</NuxtLink>
      </div>
      <div class="col-md-6 p-0">
        <img src="~/assets/images/boni.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="row pale-bg">
      <div class="col-md-6 p-0">
        <img src="~/assets/images/simba.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-md-6 py-4 d-flex flex-column align-items-center justify-content-center">
        <h3 class="thin-fonts mb-4 text-center">WHAT TO DO WHEN IN TANZANIA</h3>
        <div v-if="whatToDoWhen.whatToDoWhens.length" class="row">
          <div v-for="w in whatToDoWhen.whatToDoWhens" class="col-lg-6 px-5" :key="w.id">
            <NuxtLink :to="`/what-to-do-when/${w.slug}`" class="text-black-50 thin-fonts"><strong>{{ w.name }}</strong></NuxtLink> <br>
            <div v-html="w.description.substr(0, 100) + '...'" class=""></div>
          </div>
        </div>
        
        <NuxtLink to="/what-to-do-when" class="btn btn-outline-brand rounded-0 mt-3">Read More</NuxtLink>
      </div>
    </div>
    <div class="row pale-bg">
      <div class="col-md-6 py-4 d-flex flex-column align-items-center justify-content-center">
        <h3 class="thin-fonts mb-4 text-center">TANZANIA SAFARI ADVENTURES</h3>
        <div v-if="naturalAdventures.naturalAdventures.length" class="row">
          <div v-for="n in naturalAdventures.naturalAdventures.slice(0,6)" class="col-lg-4 mb-2" :key="n.id">
            <NuxtLink :to="`/natural-adventures/${n.slug}`" class="text-black-50 thin-fonts">{{ n.name }}</NuxtLink>
            <div v-html="n.description.substr(0, 70) + '...'"></div>
          </div>
        </div>
        <!-- <button class="btn btn-outline-brand rounded-0 mt-3">Read More</button> -->
        <NuxtLink to="/natural-adventures" class="btn btn-outline-brand rounded-0 mt-3">Read More</NuxtLink>
      </div>
      <div class="col-md-6 p-0">
        <img src="~/assets/images/ndege.jpg" class="img-fluid" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['pages','whatToDoWhen', 'naturalAdventures']),
    baseURL() { return this.$store.state.settings.baseURL },
    whyTravelWithUs() { 
      return this.pages.pages.find(p => p.slug === 'why-travel-with-us')
    },
  },
  mounted() {
    // FIXME: There seems to be a waiting problem, pages loads but refreshing causes error
    if(!this.pages.pages.length) this.getPages();
    if(!this.whatToDoWhen.whatToDoWhens.length) this.getWhatToDoWhens();
    if(!this.naturalAdventures.naturalAdventures.length) this.getNaturalAdventures();
  },
  methods: {
    ...mapActions({ 
      getPages: 'pages/getPages',
      getWhatToDoWhens: 'whatToDoWhen/getWhatToDoWhens',
      getNaturalAdventures: 'naturalAdventures/getNaturalAdventures'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main'

</style>
