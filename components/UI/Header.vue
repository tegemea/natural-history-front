<template>
  <div>
    <header class="row">
      <nav id="nav">
        <div class="logo-container">
          <NuxtLink to="/" title="Natural History Safaris">
            <img src="~/assets/images/logos/transparent-pale.png" id="logo" class="logo" alt="Logo">
          </NuxtLink>
        </div>
        <div class="menu-right">
          <ul class="list-unstyled">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/we-are-nature-lovers">We Are Nature Lovers</NuxtLink></li>
            <li @mouseenter="mouseEnter($event)" @mouseleave="mouseLeave($event)">
              <NuxtLink to="/what-to-do-when">What to do When</NuxtLink>
              <!-- <transition name="fade"> -->
                <div class="dropdown">
                  <ul class="dropdown-content">
                    <li v-for="w in whatToDoWhens" :key="w.id">
                      <NuxtLink :to="`/what-to-do-when/${w.slug}`">{{ w.name }}</NuxtLink>
                    </li>
                  </ul>
                </div>
              <!-- </transition> -->
            </li>
            <li @mouseenter="mouseEnter($event)" @mouseleave="mouseLeave($event)">
              <NuxtLink to="/natural-adventures">Natural Adventures</NuxtLink>
              <!-- <transition name="fade"> -->
                <div class="dropdown">
                  <ul class="dropdown-content">
                    <li v-for="n in naturalAdventures" :key="n.id">
                      <NuxtLink :to="`/natural-adventures/${n.slug}`">{{ n.name }}</NuxtLink>
                    </li>
                  </ul>
                </div>
              <!-- </transition> -->
            </li>
            <li><NuxtLink to="/why-travel-with-us">Why Travel with us</NuxtLink></li>
            <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
            <li><NuxtLink to="#">Blog</NuxtLink></li>
            <li><NuxtLink to="/safari-bookings" class="booking mt-3">Safari Booking</NuxtLink></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whatToDoWhens: [],
      naturalAdventures: [],
    }
  },
  async fetch() {
    const storeHasWhatToDoWhens = this.$store.state.whatToDoWhen.whatToDoWhens.length > 0;
    const storeHasNaturalAdventures = this.$store.state.naturalAdventures.naturalAdventures.length > 0;

    if(!storeHasWhatToDoWhens) {
      this.whatToDoWhens = await this.$axios.$get(`${this.$store.state.settings.apiURL}/what-to-do-when`);
    } else {
      this.whatToDoWhens = this.$store.state.whatToDoWhen.whatToDoWhens
    }
    
    if(!storeHasNaturalAdventures) {
      this.naturalAdventures = await this.$axios.$get(`${this.$store.state.settings.apiURL}/natural-adventures`);
    } else {
      this.naturalAdventures = this.$store.state.naturalAdventures.naturalAdventures
    }
  },
  methods: {
    mouseEnter(e) {
      // console.log(e.target.children[1])
      e.target.children[1].classList.add('active')
    },
    mouseLeave(e) {
      // console.log(e.target.children[1])
      e.target.children[1].classList.remove('active')
    }
  }
}
</script>

<style lang="scss" scoped>
// .fade-enter {
//   opacity: 0;
// }

// .fade-enter-active {
//   transition: all 3s ease;
//   opacity: 1;
// }

// .fade-leave {
//   //
// }

// .fade-leave-active {
//   transition: all 1s;
//   opacity: 0;
// }

.active {
  visibility: visible !important;
  opacity: 1 !important;
}
</style>