<template>
  <div>
    <header class="row">
      <nav id="nav">
        <div class="logo-container">
          <NuxtLink to="/" title="Natural History Safaris">
            <img src="~/assets/images/logos/transparent-pale.png" id="logo" class="logo" alt="Logo">
          </NuxtLink>
        </div>
        <div class="menu-right" ref="menuForMobile">
          <ul class="list-unstyled">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/we-are-nature-lovers">We Are Nature Lovers</NuxtLink></li>
            <li @mouseenter="mouseEnter($event)" @mouseleave="mouseLeave($event)">
              <NuxtLink to="/what-to-do-when">What to do When</NuxtLink>
                <div class="dropdown">
                  <ul class="dropdown-content">
                    <li v-for="w in whatToDoWhens" :key="w.id">
                      <NuxtLink :to="`/what-to-do-when/${w.slug}`">{{ w.name }}</NuxtLink>
                    </li>
                  </ul>
                </div>
            </li>
            <li @mouseenter="mouseEnter($event)" @mouseleave="mouseLeave($event)">
              <NuxtLink to="/natural-adventures">Natural Adventures</NuxtLink>
                <div class="dropdown">
                  <ul class="dropdown-content">
                    <li v-for="n in naturalAdventures" :key="n.id">
                      <NuxtLink :to="`/natural-adventures/${n.slug}`">{{ n.name }}</NuxtLink>
                    </li>
                  </ul>
                </div>
            </li>
            <li><NuxtLink to="/why-travel-with-us">Why Travel with us</NuxtLink></li>
            <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
            <li><NuxtLink to="#">Blog</NuxtLink></li>
            <li><NuxtLink to="/safari-bookings" class="booking mt-3">Safari Booking</NuxtLink></li>
          </ul>
        </div>
        <div class="menu-button d-md-none" @click.prevent="handleClick">
          <UIMobileMenuButton ref="UIMobileButton" />
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      apiURL: 'settings/apiURL',
      baseURL: 'settings/baseURL',
      naturalAdventures: 'naturalAdventures/naturalAdventures',
      whatToDoWhens: 'whatToDoWhen/whatToDoWhens',
      menuStatus: 'menu/menuStatus'
    })
  },
  created() {
    if(this.$fetchState.timestamp > Date.now() - 30000) this.$fetch()
  },
  async fetch() {
    const { data: whatToDoWhens } = await this.$axios.get(`${this.apiURL}/what-to-do-when`);
    const { data: naturalAdventures } = await this.$axios.get(`${this.apiURL}/natural-adventures`);

    if(whatToDoWhens.length) this.$store.commit('whatToDoWhen/SET_WHAT_TO_DO_WHENS', whatToDoWhens);
    if(naturalAdventures.length) this.$store.commit('naturalAdventures/SET_NATURAL_ADVENTURES', naturalAdventures);
  },
  watch: {
    menuStatus(status) {
      if(status === false) this.closeMenu();
    }
  },
  methods: {
    handleClick() {
      if(this.menuStatus === false) {
        this.$refs.menuForMobile.firstChild.classList.add('active');
        this.$store.commit('menu/ACTIVATE_MENU');
        this.$refs.UIMobileButton.handleClick('activate');
      } else {
        this.$refs.menuForMobile.firstChild.classList.remove('active');
        this.$store.commit('menu/DEACTIVATE_MENU');
        this.$refs.UIMobileButton.handleClick('deactivate');
      }
    },
    closeMenu() {
      this.$refs.menuForMobile.firstChild.classList.remove('active');
      this.$refs.UIMobileButton.handleClick('deactivate');
    },
    mouseEnter(e) {
      e.target.children[1].classList.add('active');
    },
    mouseLeave(e) {
      e.target.children[1].classList.remove('active');
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  visibility: visible !important;
  opacity: 1 !important;
}
</style>