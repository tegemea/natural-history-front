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
      <div class="col-md-6 py-4 d-flex flex-column align-items-center justify-content-center">
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
        <p class="text-justify px-4">million wildebeest… each one driven by the same ancient rhythm, fulfilling its instinctive role in the inescapable cycle of life: a frenzied three-week bout of territorial conquests and mating; survival of the fittest as 40km (25 mile) long columns plunge through crocodile-infested waters on the annual exodus north; replenishing the species in a brief population explosion that produces more than 8,000 calves daily before the 1,000 km (600 mile) pilgrimage begins again...</p>
        <NuxtLink to="/what-to-do-when" class="btn btn-outline-brand rounded-0 mt-3">Read More</NuxtLink>
      </div>
    </div>
    <div class="row pale-bg">
      <div class="col-md-6 py-4 d-flex flex-column align-items-center justify-content-center">
        <h3 class="thin-fonts mb-4 text-center">TANZANIA SAFARI ADVENTURES</h3>
        <p class="text-justify px-4">million wildebeest… each one driven by the same ancient rhythm, fulfilling its instinctive role in the inescapable cycle of life: a frenzied three-week bout of territorial conquests and mating; survival of the fittest as 40km (25 mile) long columns plunge through crocodile-infested waters on the annual exodus north; replenishing the species in a brief population explosion that produces more than 8,000 calves daily before the 1,000 km (600 mile) pilgrimage begins again...</p>
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
  async asyncData() {
    //
  },
  computed: {
    ...mapState(['pages']),
    baseURL() { return this.$store.state.settings.baseURL },
    whyTravelWithUs() { 
      return this.pages.pages.find(p => p.slug === 'why-travel-with-us')
    }
  },
  mounted() {
    if(!this.pages.pages.length) this.getPages();
  },
  methods: {
    ...mapActions({ getPages: 'pages/getPages' })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main'

</style>
