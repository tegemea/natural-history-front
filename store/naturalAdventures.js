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
  getNaturalAdventures: async ({ commit, state }) => { 
    const { data } = await app.$axios.get(`${state.settings.apiURL}/natural-adventures`)
    commit('SET_NATURAL_ADVENTURES', data)
    console.log(data)
  }
}