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