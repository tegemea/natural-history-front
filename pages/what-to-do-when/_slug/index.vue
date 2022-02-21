<template>
  <div>
    <WhatToDoWhen :whatToDoWhen="whatToDoWhen" :whatToDoWhens="whatToDoWhens" />
  </div>
</template>

<script>
import WhatToDoWhen from '@/components/WhatToDoWhen'

export default {
  components: { WhatToDoWhen },
  async asyncData({ app, store, params }) {
    if(!store.state.whatToDoWhen.whatToDoWhens.length) {
      const { data } = await app.$axios.get(`${store.state.settings.apiURL}/what-to-do-when`)
      const whatToDoWhen = data.find(w => w.slug === params.slug);
      store.commit('whatToDoWhen/SET_WHAT_TO_DO_WHENS', data);
      return { 
        whatToDoWhen,
        whatToDoWhens: data
      }
    } else {
      return { 
        whatToDoWhen: store.state.whatToDoWhen.whatToDoWhens.find(w => w.slug === params.slug),
        whatToDoWhens: store.state.whatToDoWhen.whatToDoWhens
      }
    }
  },
  computed: {
    // 
  },
}
</script>