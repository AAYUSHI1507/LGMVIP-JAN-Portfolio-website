const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')
const headercontenth2 = document.querySelector('.header-content h2')
const sendbtn = document.querySelector('#send-btn')

menuBtn.addEventListener('click', () => {
  navlinks.classList.toggle('mobile-menu')
  headercontenth2.classList.toggle('header-content1')
})

sendbtn.addEventListener('click', () => {
  window.alert('Successfully sent')
})
