<template>
  <div>
    <div class="row text-center">
      <div class="col-12 slider p-0">
        <img :src="`${baseURL}/storage/natural_adventure_photos/${randomNaturalAdventure.photo}`" class="img-fluid" alt="Natural Adventure">
        <h1 class="text-center title">Photo Gallery</h1>
      </div>
    </div>
    <div class="row bg-white">
      <div class="container mt-3 max-1600">
        <div class="row">
          <div class="col-12">
            <div class="card-columns">
              <div v-for="photo in photos" class="card photo" :key="photo.id">
                <div class="card-img-top">
                  <img :src="`${baseURL}/storage/gallery/${photo.photo}`" class="img-fluid" :alt="photo.name">
                </div>
                <div class="card-body">
                  <h5 class="thin-fonts brand-color mb-0">{{ photo.name }}</h5>
                  <div v-if="photo.description" class="card-text mt-3">{{ photo.description }}</div>
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
export default {
  data() {
    return {
      naturalAdventures: [],
      photos: []
    }
  },
  async fetch() {
    const natAdventures = this.$store.state.naturalAdventures.naturalAdventures;
    const photos = this.$store.state.photos.photos;

    if(!natAdventures.length) {
      this.naturalAdventures = await this.$axios.$get(`${this.$store.state.settings.apiURL}/natural-adventures`);
      if(this.naturalAdventures.length) this.$store.commit('naturalAdventures/SET_NATURAL_ADVENTURES', this.naturalAdventures)
    } else {
      this.naturalAdventures = this.$store.state.naturalAdventures.naturalAdventures;
    }

    if(!photos.length) {
      this.photos = await this.$axios.$get(`${this.$store.state.settings.apiURL}/photos`);
      if(this.photos.length) this.$store.commit('photos/SET_PHOTOS', this.photos)
    } else {
      this.photos = this.$store.state.photos.photos
    }
  },
  computed: {
    baseURL() {
      return this.$store.state.settings.baseURL
    },
    randomNaturalAdventure() {
      return this.naturalAdventures[Math.floor(Math.random() * this.naturalAdventures.length)]
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

<style lang="scss" scoped>
.photo {
  transition: all .3s ease;
  overflow: hidden;
  cursor: default;

  &:hover {
    box-shadow: 0 1px 3px #000;
    transform: translateY(-3px);
    border: 1px solid white;
  }
}
</style>