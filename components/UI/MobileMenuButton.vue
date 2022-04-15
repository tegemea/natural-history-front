<template>
  <div ref="mobileButton" class="mobile-button">
    <span class="top"></span>
    <span class="middle"></span>
    <span class="bottom"></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ menuStatus: 'menu/menuStatus' })
  },
  methods: {
    handleClick(instructions) {
      if(instructions === 'activate') { 
        this.$refs.mobileButton.classList.add('active');
      } else { 
        this.$refs.mobileButton.classList.remove('active');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/main.scss';

.mobile-button {
  margin-right: 15px;
  display: flex;
  flex-direction: column;

  .top, .middle, .bottom {
    display: inline-block;
    height: 2px;
    width: 26px;
    margin: 3px 0;
    background: $pale-brand;
    transition: all .3s ease;
  }
}
.active {
  .middle { 
    opacity: 0;
    transform: translateX(10px);
    // visibility: hidden; 
  }
  .top { 
    transform: rotate(-45deg) translateY(11px);
    background: red;
    width: 38px;
  }
  .bottom { 
    transform: rotate(45deg) translateY(-11px); 
    background: red;
    width: 38px;
  }
}
</style>