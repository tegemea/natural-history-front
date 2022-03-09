export const state = () => ({
  photos : []
})

export const getters = {
  photos(state) {
    return state.photos
  }
}

export const mutations = {
  SET_PHOTOS(state, photos) {
    state.photos = photos
  }
}

export const actions = {
  async getPhotos({ commit, rootState }) {
    const { data } = await this.$axios.get(`${rootState.settings.apiURL}/photos`)
    commit('SET_PHOTOS', data);
  }
}