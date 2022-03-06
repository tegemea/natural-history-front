
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
  async getWhatToDoWhens({ commit, rootState }) {
    const { data } = await this.$axios.get(`${rootState.settings.apiURL}/what-to-do-when`)
    commit('SET_WHAT_TO_DO_WHENS', data)
  }
}