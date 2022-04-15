<template>
  <div>
    <div class="row text-center">
      <div class="col-12 slider p-0">
        <img src="~/assets/images/cheetah.jpg" class="img-fluid" alt="">
        <h1 class="text-center title">What to do When in Tanzania</h1>
      </div>
    </div>
    <div class="row bg-white py-4">
      <div class="container max-1600">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ 
      whatToDoWhens: 'whatToDoWhen/whatToDoWhens',
      baseURL: 'settings/baseURL',
      apiURL: 'settings/apiURL' 
    }),
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch()
  },
  async fetch() {
    const { data } = await this.$axios.get(`${this.apiURL}/what-to-do-when`)
    if(data.length) this.$store.commit('whatToDoWhen/SET_WHAT_TO_DO_WHENS', data)
  },
  head() {
    return {
      title: `What to do when in Tanzania - Natural History Safari`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
}
</script>