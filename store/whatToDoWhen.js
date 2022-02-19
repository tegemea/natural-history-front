import { NuxtAxiosInstance } from "@nuxtjs/axios"

export const state = () => ({
  whatToDoWhens: []
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

export const actions = {
  getWhatToDoWhens: async ({ rootState }) => {
    console.log('Now trying to get something via API...')
    const { data } = NuxtAxiosInstance.get(`${rootState.settings.apiURL}/what-to-do-when`)
    console.log('Received Data : ', data)
  }
}