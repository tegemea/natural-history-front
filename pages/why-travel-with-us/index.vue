<template>
  <div>
    <div class="row">
      <div class="col-12 slider p-0">
        <img :src="`${baseURL}/storage/page_photos/${n.photo}`" class="img-fluid" :alt="n.name">
        <h1 class="title">{{ n.name }}</h1>
      </div>
    </div>
    <div class="container mt-5">
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
</template>

<script>
export default {
  async asyncData({ store, app }) {
    if(!store.state.pages.length) {
      const { data } = await app.$axios.get(`${store.state.settings.apiURL}/pages`)
      const n = data.find(p => p.slug === 'why-travel-with-us')
      return { n, pages:data }
    } else {
      const pages = store.state.pages
      const n = pages.find(p => p.slug === 'why-travel-with-us')
      return { n, pages }
    }
  },
  computed: {
    baseURL() {
      return this.$store.state.settings.baseURL
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