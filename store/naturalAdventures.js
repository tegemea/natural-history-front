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