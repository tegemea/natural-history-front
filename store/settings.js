export const state = () => ({
  apiURL: 'https://naturalhistorysafari.com/core/api/v1',
  baseURL: 'https://naturalhistorysafari.com'
})

export const getters = {
  apiURL: state => { return state.apiURL },
  baseURL: state => { return state.baseURL }
}