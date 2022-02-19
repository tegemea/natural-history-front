<template>
  <div class="container-fluid">
    <UIHeader />
    <Nuxt keep-live />
    <UIFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch() {
    if(!this.whatToDoWhens.length) {
      return this.getWhatToDoWhens();
    }
  },
  computed: {
    ...mapGetters('whatToDoWhen',['whatToDoWhens'])
  },
  methods: {
    ...mapActions('whatToDoWhen',['getWhatToDoWhens'])
  }
}
</script>