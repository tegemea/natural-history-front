export const state = () => ({
  pages : []
})

export const getters = {
  pages(state) {
    return state.pages
  }
}

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
    // console.log(pages.length)
  }
}

export const actions = {
  async getPages({ rootState }) {
    // const { data } = await 
    // this.$axios.get(`${rootState.settings.apiURL}/pages`);
    // commit('SET_PAGES', data)
  }
}