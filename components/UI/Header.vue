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
            <li><NuxtLink to="/we-are-natural">We Are Natural</NuxtLink></li>
            <li><NuxtLink to="/what-to-do-when">What to do When</NuxtLink></li>
            <li><NuxtLink to="/natural-adventures">Natural Adventures</NuxtLink></li>
            <li><NuxtLink to="#">Why Travel with us</NuxtLink></li>
            <li><NuxtLink to="#">Blog</NuxtLink></li>
            <li><NuxtLink to="#" class="booking mt-3">Safari Booking</NuxtLink></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
// 
</style>