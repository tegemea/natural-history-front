<template>
  <div>
    <div class="row">
      <div class="col-12 slider p-0">
        <img src="~/assets/images/cheetah.jpg" class="img-fluid" alt="">
        <h1 class="text-center title">What to do When in Tanzania</h1>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div v-for="whatToDoWhen in whatToDoWhens" class="col-md-4" :key="whatToDoWhen.id">
          <div class="card">
            <div class="card-body p-0">
              <NuxtLink :to="`/what-to-do-when/${whatToDoWhen.slug}`">
                <img :src="`${baseURL}/storage/what_to_do_when_photos/${whatToDoWhen.photo}`" class="img-fluid" :alt="whatToDoWhen.name">
              </NuxtLink>
            </div>
            <div class="card-body">
              <h5 class="mb-3">
                <NuxtLink :to="`/what-to-do-when/${whatToDoWhen.slug}`" 
                  class="brand-color thin-fonts">
                  {{ whatToDoWhen.name }}
                </NuxtLink>
              </h5>
              <div 
                v-html="whatToDoWhen.description.length > 100 
                ? whatToDoWhen.description.substr(0, 100) + '...'
                : whatToDoWhen.description" 
                class="text-justify">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  async asyncData({ app, store }) {
    if(!store.state.whatToDoWhen.whatToDoWhens.length) {
      const { data } = await app.$axios.get(`${store.state.settings.apiURL}/what-to-do-when`)
      if(data.length) store.commit('whatToDoWhen/SET_WHAT_TO_DO_WHENS', data);
      return { whatToDoWhens: data }
    } else {
      return { whatToDoWhens: store.state.whatToDoWhen.whatToDoWhens }
    }
    
    
  },
  computed: {
    baseURL() {
      return this.$store.state.settings.baseURL
    }
  },
  methods: {
    ...mapMutations(['whatToDoWhen',['SET_WHAT_TO_DO_WHENS']])
  }
}
</script>