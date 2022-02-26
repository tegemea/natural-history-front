(() => {
  let scrollV = '', nav = document.querySelector('#nav');

  window.onscroll = () => {
    scrollV = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollV > 10) {
      nav.classList.add('scrolled-nav')
    } else {
      nav.classList.remove('scrolled-nav')
    }
  }
})();