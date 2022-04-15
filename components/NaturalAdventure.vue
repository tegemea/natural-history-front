<template>
  <div>
    <div class="row text-center">
      <div class="col-12 slider p-0">
        <img :src="`${baseURL}/storage/natural_adventure_photos/${naturalAdventure.photo}`" class="img-fluid" :alt="naturalAdventure.name">
        <h1 class="title">{{ naturalAdventure.name }}</h1>
      </div>
    </div>
    <div class="row py-4 bg-white">
      <div class="container max-1600">
        <div class="row">
          <div v-html="naturalAdventure.description" class="col-md-8 text-justify"></div>
          <div class="col-md-4">
            <div class="list-group list-group-flush sticky-side">
              <div class="list-group-item list-group-heading thin-fonts brand-color">OTHER NATURAL ADVENTURES</div>
              <NuxtLink v-for="a in adventuresWithoutCurrentAdenture" 
                :to="`/natural-adventures/${a.slug}`" 
                class="list-group-item list-group-item-action" 
                :key="a.id"
              >
                {{ a.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ 
      naturalAdventures: 'naturalAdventures/naturalAdventures', 
      baseURL: 'settings/baseURL',
      apiURL: 'settings/apiURL' 
    }),
    naturalAdventure() {
      return this.naturalAdventures.find(n => n.slug === this.$route.params.slug)
    },
    adventuresWithoutCurrentAdenture() {
      return this.naturalAdventures.filter(a => +a.id !== +this.naturalAdventure.id)
    }
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch()
  },
  async fetch() {
    const { data } = await this.$axios.get(`${this.apiURL}/natural-adventures`)
    if(data.length) this.$store.commit('naturalAdventures/SET_NATURAL_ADVENTURES', data)
  },
  head() {
    return {
      title: `${this.naturalAdventure.name} - Natural History Safari`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.naturalAdventure.description
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