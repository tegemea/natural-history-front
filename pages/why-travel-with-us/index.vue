<template>
  <div>
    <div class="row text-center">
      <div class="col-12 slider p-0">
        <img :src="`${baseURL}/storage/page_photos/${n.photo}`" class="img-fluid" :alt="n.name">
        <h1 class="title">{{ n.name }}</h1>
      </div>
    </div>
    <div class="row bg-white py-4">
      <div class="container max-1600">
        <div class="row">
          <div v-html="n.description" class="col-md-8 text-justify"></div>
          <div class="col-md-4">
            <div class="list-group list-group-flush sticky-side">
              <div class="list-group-item list-group-heading thin-fonts brand-color">OTHER COMPANY PAGES</div>
              <NuxtLink v-for="p in pages" 
                :to="`/${p.slug}`" 
                class="list-group-item list-group-item-action" 
                :key="p.id"
              >
                {{ p.name }}
              </NuxtLink>
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
      pages: 'pages/pages',
      baseURL: 'settings/baseURL',
      apiURL: 'settings/apiURL' }),
      n() {
        return this.pages.find(p => p.name.includes('Why travel with'))
      }
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch()
  },
  async fetch() {
    const { data } = await this.$axios.get(`${this.apiURL}/pages`)
    if(data.length) this.$store.commit('pages/SET_PAGES', data)
  },
  head() {
    return {
      title: `Why Travel with us - Natural History Safari`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky-side {
  position: sticky;
  top: 100px;
}
</style>