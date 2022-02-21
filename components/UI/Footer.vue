<template>
  <div>
    <div class="row">
      <footer class="col-12 p-0">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h4 class="thin-fonts">About us</h4>
            </div>
            <div class="col-md-3">
              <h4 class="thin-fonts">What to do When</h4>
              <NuxtLink v-for="footerW in whatToDoWhens" 
                :to="`/what-to-do-when/${footerW.slug}`"
                class="d-block text-black-50"
                :key="footerW.id"
              >
                {{ footerW.name }}
              </NuxtLink>
            </div>
            <div class="col-md-3">
              <h4 class="thin-fonts">Natural Adventures</h4>
            </div>
            <div class="col-md-3">
              <h4 class="thin-fonts">Get in Touch</h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    whatToDoWhens() {
      return this.$store.state.whatToDoWhen.whatToDoWhens
    }
  }
}
</script>