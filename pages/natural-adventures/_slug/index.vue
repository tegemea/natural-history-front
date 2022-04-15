<template>
  <div>
    <NaturalAdventure />
  </div>
</template>

<script>
import NaturalAdventure from '@/components/NaturalAdventure'
export default {
  components: {
    NaturalAdventure
  },
  // async asyncData({ app, store, params }) {
  //   if(!store.state.naturalAdventures.naturalAdventures.length) {
  //     const { data } = await app.$axios.get(`${store.state.settings.apiURL}/natural-adventures`);
  //     if(data) store.commit('naturalAdventures/SET_NATURAL_ADVENTURES', data)
  //     const naturalAdventure = data.find(n => n.slug === params.slug)
  //     return { naturalAdventure, naturalAdventures: data }
  //   } else {
  //     return { 
  //       naturalAdventure: store.state.naturalAdventures.naturalAdventures.find(n => n.slug === params.slug),
  //       naturalAdventures: store.state.naturalAdventures.naturalAdventures
  //     }
  //   }
  // },
  // computed: {
  //   baseURL() {
  //     return this.$store.state.settings.baseURL
  //   }
  // }
}
</script>