<template>
  <div>
    <div class="row text-center">
      <div class="col-12 slider p-0">
        <img :src="`${baseURL}/storage/what_to_do_when_photos/${whatToDoWhen.photo}`" class="img-fluid" :alt="whatToDoWhen.name">
        <h1 class="title">{{ whatToDoWhen.name }}</h1>
      </div>
    </div>
    <div class="row bg-white py-4">
      <div class="container max-1600">
        <div class="row">
          <div class="col-md-8">
            <div v-html="whatToDoWhen.description" class="text-justify"></div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="list-group list-group-flush">
                <NuxtLink v-for="w in whatToDoWhens" :to="`/what-to-do-when/${w.slug}`" 
                  class="list-group-item list-group-item-action" :key="w.id">
                  {{ w.name }}
                </NuxtLink>
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
    whatToDoWhen() {
      return this.whatToDoWhens.find(w => w.slug === this.$route.params.slug)
    }
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
      title: `${this.whatToDoWhen.seo_title ? this.whatToDoWhen.seo_title : this.whatToDoWhen.name} - Natural History Safari`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.whatToDoWhen.description
        }
      ]
    }
  }
}
</script>