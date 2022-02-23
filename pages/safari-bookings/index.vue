<template>
  <div>
    <div class="row">
      <div class="col-12 slider p-0">
        <img :src="`${baseURL}/storage/natural_adventure_photos/${naturalAdventure.photo}`" class="img-fluid" :alt="naturalAdventure.name">
        <h1 class="text-center title">Safari Bookings to Tanzania</h1>
      </div>
    </div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <address>
                <h5 class="thin-fonts mb-2">Natural History Safari</h5>
                P.O. Box 12044 <br>
                Arusha, Tanzania <br>
                Phone: <a href="tel:+255753306061" class="brand-color">+255753306061</a> <br>
                Email: <a href="mailto:info@naturalhistorysafari.com" class="brand-color">info(at)naturalhistorysafari.com</a>
              </address>
            </div>
            <div class="col-md-6">
              <h5 class="thin-fonts mb-2">U.S.A. Office</h5>
              Phone: <a href="tel+1 (760) 272-1913" class="brand-color">+1 (760) 272-1913</a> <br>
              Email: <a href="mailto:mchedester@livingdesert.org" class="brand-color">mchedester@livingdesert.org</a>
            </div>
            <!-- <div class="col-md-4">asdasd</div> -->
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body pb-0">
              <h5 class="thin-fonts brand-color">Enter your details to make booking!</h5><hr>
              <form ref="bookingForm" id="bookingForm">
                <div class="form-group">
                  <label for="name">Enter your Full name</label>
                  <input type="text" name="name" v-model="tourist.name" id="name" class="form-control">
                </div>
                <div class="row">
                  <div class="form-group col-lg-6">
                    <label for="email">Enter your Email Address</label>
                    <input type="email" name="email" v-model="tourist.email" id="name" class="form-control">
                  </div>
                  <div class="form-group col-lg-6">
                    <label for="phone">Enter your Phone#</label> <small class="text-black-50">(optional)</small>
                    <input type="tel" name="phone" v-model="tourist.phone" id="tel" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label for="adventure">Select Your Natural Adventure</label>
                  <select name="adventure" v-model="tourist.adventure" id="adventure" class="form-control">
                    <option value="" selected disabled>--- Select Natural Adventure ---</option>
                    <option v-for="a in naturalAdventures" :value="a.id" :key="a.id">{{ a.name }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="description">Your Description</label>
                  <textarea 
                    name="description" v-model="tourist.description" 
                    id="description" cols="30" rows="3" class="form-control"
                  ></textarea>
                </div>
                <div class="form-group mt-4 d-flex">
                  <button @click.prevent="validateData" 
                    class="btn btn-lg btn-warning thin-fonts text-white flex-grow-1">
                    BOOK FOR YOUR SAFARI
                  </button>
                  <button @click.prevent="clearForm()" class="btn btn-lg btn-outline-secondary thin-fonts ml-3">CLEAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body p-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15931.366596758107!2d36.68493515!3d-3.38882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1645618689032!5m2!1sen!2stz" width="100%" height="550" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tourist: {
        name: '', email: '', phone:'', adventure:'', description:''
      }
    }
  },
  async asyncData({ app, store }) {
    if(!store.state.naturalAdventures.naturalAdventures.length) {
      const { data } = await app.$axios.get(`${store.state.settings.apiURL}/natural-adventures`)
      if(data) store.commit('naturalAdventures/SET_NATURAL_ADVENTURES', data)
      return { 
        naturalAdventure: await data[Math.floor(Math.random() * data.length)],
        baseURL: await store.state.settings.baseURL,
        naturalAdventures: data
      }
    } else {
      let storeData = store.state.naturalAdventures.naturalAdventures;
      return {
        naturalAdventure: storeData[Math.floor(Math.random() * storeData.length)],
        baseURL: store.state.settings.baseURL,
        naturalAdventures: storeData
      }
    }
  },
  methods: {
    validateData() {
      this.sendBooking()
    },
    sendBooking() {
      console.log('Booking Sent..!')
    },
    clearForm() {
      this.tourist.name = ''; this.tourist.email = ''; 
      this.tourist.adventure = ''; this.tourist.description = '';
      document.querySelector('#bookingForm').reset();
    }
  }
}
</script>