export const state = () => ({
  naturalAdventures: []
})

export const getters = {
  naturalAdventures(state) {
    return state.naturalAdventures
  }
}

export const mutations = {
  SET_NATURAL_ADVENTURES: (state, naturalAdventures) => {
    state.naturalAdventures = naturalAdventures
  }
}

export const actions = {
  async getNaturalAdventures({ rootState }) { 
    // const { data } = await 
    // this.$axios.get(`${rootState.settings.apiURL}/natural-adventures`)
    // commit('SET_NATURAL_ADVENTURES', data)
  }
}