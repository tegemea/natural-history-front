
export const state = () => ({
  whatToDoWhens: []
})

export const getters = {
  whatToDoWhens(state) {
    return state.whatToDoWhens
  }
}

export const mutations = {
  SET_WHAT_TO_DO_WHENS: (state, whatToDoWhens) => {
    state.whatToDoWhens = whatToDoWhens
  }
}

export const actions = {
  getWhatToDoWhens: async ({ commit, state }) => { 
    const { data } = await app.$axios.get(`${state.settings.apiURL}/what-to-do-when`)
    commit('SET_WHAT_TO_DO_WHENS', data)
    console.log(data)
  }
}