<template>
  <div>
    <div class="row">
      <div class="col-12 slider p-0">
        <img src="~/assets/images/cheetah.jpg" class="img-fluid" alt="">
        <h1 class="text-center title">Natural Adventures</h1>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div v-for="adventure in naturalAdventures" class="col-md-4" :key="adventure.id">
          <div class="card mb-4">
            <div class="card-body p-0">
              <NuxtLink :to="`/natural-adventures/${adventure.slug}`">
                <img :src="`${baseURL}/storage/natural_adventure_photos/${adventure.photo}`" class="img-fluid" :alt="adventure.name">
              </NuxtLink>
            </div>
            <div class="card-body">
              <h5 class="thin-fonts mb-3">
                <NuxtLink :to="`/natural-adventures/${adventure.slug}`" class="brand-color">{{ adventure.name }}</NuxtLink>
              </h5>
              <div 
                v-html="adventure.description.length > 150 
                ? adventure.description.substr(0, 200) + '...' 
                : adventure.description" class="text-justify">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, store }) {
    if(!store.state.naturalAdventures.naturalAdventures.length) {
      const { data } = await app.$axios.get(`${store.state.settings.apiURL}/natural-adventures`);
      if(data) store.commit('naturalAdventures/SET_NATURAL_ADVENTURES', data)
      return { naturalAdventures: data }
    } else {
      return { naturalAdventures: store.state.naturalAdventures.naturalAdventures }
    }
  },
  computed: {
    baseURL() {
      return this.$store.state.settings.baseURL
    }
  },
}
</script>