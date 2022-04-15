<template>
  <div>
    <div class="row text-center">
      <div class="col-12 slider p-0">
        <img src="~/assets/images/cheetah.jpg" class="img-fluid" alt="">
        <h1 class="text-center title">Natural Adventures</h1>
      </div>
    </div>
    <div class="row py-4 bg-white">
      <div class="container max-1600">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch()
  },
  async fetch() {
    const { data } = await this.$axios.get(`${this.apiURL}/natural-adventures`);
    if(data.length) this.$store.commit('naturalAdventures/SET_NATURAL_ADVENTURES', data);
  },
  computed: {
    ...mapGetters({ naturalAdventures: 'naturalAdventures/naturalAdventures', apiURL: 'settings/apiURL' }),
    baseURL() {
      return this.$store.state.settings.baseURL
    }
  },
  head() {
    return {
      title: `Natural Adventures - Natural History Safari`,
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