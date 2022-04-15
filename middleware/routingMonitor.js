export default function({ store }) {
  store.app.router.beforeEach((to, from, next) => {
    store.commit('menu/DEACTIVATE_MENU');
    next();
  })
}