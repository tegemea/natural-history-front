(() => {
  let 
  scrollV = '', 
  nav = document.querySelector('#nav'), 
  logo = document.querySelector('#logo');

  console.log(logo.getAttribute('src'))

  window.onscroll = () => {
    scrollV = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollV > 10) {
      nav.classList.add('scrolled-nav')
      // logo.setAttribute('src', '../assets/images/logos/transparent-pale.png')
    } else {
      nav.classList.remove('scrolled-nav')
      // logo.setAttribute('src', '../assets/images/logos/transparent-brand.png')
    }
  }
})();