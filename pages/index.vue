<template>
  <div>
    <div class="row">
      <div class="col-12 slider p-0 text-center">
        <img src="~/assets/images/cheetah.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="row">
      <div class="container bg-white max-1600">
        <div class="row">
          <div class="col-lg-12 py-3">
            <p class="quote text-center cursive-fonts">
              "I never knew of a morning in Africa when I woke up and was not happy." <br>
              <small class="text-black-50">-- Ernest Hemingway</small>
            </p>
            <p class="welcome text-center">
              We at Natural History Safaris are committed to deliver the best wilderness experience in Africa. The very personal service and outstanding guiding in our small and remote properties offers unforgettable and often life challenging safaris adventures
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container pale-2x-bg max-1600">
        <div class="row">
          <div v-if="whyTravelWithUs" class="col-md-6 py-4 d-flex flex-column align-items-center justify-content-center">
            <h3 class="thin-fonts mb-4 text-center text-uppercase">{{ whyTravelWithUs.name }}</h3>
            <div class="text-center px-0 mx-0 px-lg-5 mx-lg-5"
              v-html="whyTravelWithUs.description.length > 200 
              ? whyTravelWithUs.description.substr(0, 200) + '...' 
              : whyTravelWithUs.description">
            </div>
            <div class="text-center d-none d-md-block d-lg-none px-0 mx-0 px-lg-5 mx-lg-5"
              v-html="whyTravelWithUs.description.length > 70 
              ? whyTravelWithUs.description.substr(0, 70) + '...' 
              : whyTravelWithUs.description">
            </div>
            <NuxtLink :to="whyTravelWithUs.slug" class="btn btn-outline-brand rounded-0 mt-3">Read More</NuxtLink>
          </div>
          <div class="col-md-6 p-0">
            <img src="~/assets/images/boni.jpg" class="img-fluid" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 p-0">
            <img src="~/assets/images/simba.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-md-6 py-4 d-flex flex-column align-items-center justify-content-center">
            <h3 class="thin-fonts mb-4 text-center">WHAT TO DO WHEN IN TANZANIA</h3>
            <div v-if="whatToDoWhen.whatToDoWhens.length" class="row">
              <div v-for="w in whatToDoWhen.whatToDoWhens" class="col-lg-6 px-5 px-sm-1 px-lg-5 text-center" :key="w.id">
                <NuxtLink :to="`/what-to-do-when/${w.slug}`" class="text-black-50 d-inline-block mb-1 thin-fonts" :title="w.name">
                  {{ w.name }}
                </NuxtLink> <br>
                <div v-html="w.description.substr(0, 70) + '...'" class="d-md-none d-lg-block "></div>
              </div>
            </div>
            
            <NuxtLink to="/what-to-do-when" class="btn btn-outline-brand rounded-0 mt-3">View all</NuxtLink>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 py-4 d-flex flex-column align-items-center justify-content-center">
            <h3 class="thin-fonts mb-4 text-center">TANZANIA SAFARI ADVENTURES</h3>
            <div v-if="naturalAdventures.naturalAdventures.length" class="row">
              <div v-for="n in naturalAdventures.naturalAdventures.slice(0,4)" class="col-lg-6 px-5 px-md-1 px-lg-5 mb-2 text-center" :key="n.id">
                <NuxtLink :to="`/natural-adventures/${n.slug}`" class="text-black-50 thin-fonts d-inline-block mb-1" :title="n.name">
                  {{ n.name }}
                </NuxtLink>
                <div v-html="n.description.substr(0, 70) + '...'" class="d-md-none d-lg-block"></div>
              </div>
            </div>
            <NuxtLink to="/natural-adventures" class="btn btn-outline-brand rounded-0 mt-3">View all</NuxtLink>
          </div>
          <div class="col-md-6 p-0">
            <img src="~/assets/images/ndege.jpg" class="img-fluid" alt="">
          </div>
        </div>
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
    if(!this.pages.pages.length) this.getPages();
    if(!this.whatToDoWhen.whatToDoWhens.length) this.getWhatToDoWhens();
    if(!this.naturalAdventures.naturalAdventures.length) this.getNaturalAdventures();
    console.log(window.innerWidth)
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
