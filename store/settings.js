export const state = () => ({
  apiURL: 'http://localhost:8000/api/v1',
  baseURL: 'http://localhost:8000'
})

export const getters = {
  apiURL: state => { return state.apiURL },
  baseURL: state => { return state.baseURL }
}