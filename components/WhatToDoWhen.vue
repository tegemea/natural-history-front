<template>
  <div>
    <div class="row">
      <div class="col-12 slider p-0">
        <img :src="`${baseURL}/storage/what_to_do_when_photos/${whatToDoWhen.photo}`" class="img-fluid" :alt="whatToDoWhen.name">
        <h1 class="title">{{ whatToDoWhen.name }}</h1>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div v-html="whatToDoWhen.description" class="text-justify"></div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="list-group list-group-flush">
              <NuxtLink v-for="w in whatToDoWhens" :to="`/what-to-do-when/${w.slug}`" 
                class="list-group-item list-group-item-action" :key="w.id">
                {{ w.name }}
              </NuxtLink>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['whatToDoWhen', 'whatToDoWhens'],
  computed: {
    baseURL() {
      return this.$store.state.settings.baseURL
    }
  }
}
</script>