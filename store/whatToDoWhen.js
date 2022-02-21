
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