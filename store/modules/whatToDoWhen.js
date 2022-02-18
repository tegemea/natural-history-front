export const state = () => ({
  whatToDoWhens = []
})

export const getters = {
  whatToDoWhens(state) {
    return state.whatToDoWhens
  }
}

export const mutations = {
  set(state, whatToDoWhens) {
    state.whatToDoWhens = whatToDoWhens
  }
}