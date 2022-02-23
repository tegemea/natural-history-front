<template>
  <div>
    <div class="row">
      <div class="col-12 slider p-0">
        <img :src="`${baseURL}/storage/natural_adventure_photos/${naturalAdventure.photo}`" class="img-fluid" :alt="naturalAdventure.name">
        <h1 class="title">{{ naturalAdventure.name }}</h1>
      </div>
    </div>
    <div class="container mt-5">
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
</template>

<script>
export default {
  props: ['naturalAdventure', 'naturalAdventures'],
  computed: {
    baseURL() {
      return this.$store.state.settings.baseURL
    },
    adventuresWithoutCurrentAdenture() {
      return this.naturalAdventures.filter(a => +a.id !== +this.naturalAdventure.id)
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