export const state = () => ({
  menuIsActive : false
})

export const getters = {
  menuStatus(state) { return state.menuIsActive }
}

export const mutations = {
  ACTIVATE_MENU(state) { state.menuIsActive = true },
  DEACTIVATE_MENU(state) { state.menuIsActive = false }
}