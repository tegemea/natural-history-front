export const state = () => {
  counter: 0
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async nuxtServerInit({ commit, rootState }) {
    const { data: naturalAdventures } = await this.$axios.get(`${rootState.settings.apiURL}/natural-adventures`);
    const { data: whatToDoWhens } = await this.$axios.get(`${rootState.settings.apiURL}/what-to-do-when`);
    const { data: photos } = await this.$axios.get(`${rootState.settings.apiURL}/photos`);
    const { data: pages } = await this.$axios.get(`${rootState.settings.apiURL}/pages`);

    if(naturalAdventures.length) commit('naturalAdventures/SET_NATURAL_ADVENTURES', naturalAdventures);
    if(whatToDoWhens.length) commit('whatToDoWhen/SET_WHAT_TO_DO_WHENS', whatToDoWhens);
    if(photos.length) commit('photos/SET_PHOTOS', photos);
    if(pages.length) commit('pages/SET_PAGES', pages);
    
  }
}