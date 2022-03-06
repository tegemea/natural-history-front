export const state = () => ({
  pages : []
})

export const getters = {
  pages(state) {
    return state.pages
  }
}

export const mutations = {
  set(state, pages) {
    state.pages = pages
  }
}

export const actions = {
  async getPages({ commit, rootState }) {
    const { data } = await this.$axios.get(`${rootState.settings.apiURL}/pages`)
    commit('set', data)
  }
}