const bars = document.querySelector('.bars')
const close = document.querySelector('.close')
const sidebar = document.querySelector('.sidebar_container')

close.addEventListener('click', () => {
  sidebar.setAttribute('style', 'display: none')
  bars.setAttribute('style', 'display: block')
})

bars.addEventListener('click', () => {
  sidebar.setAttribute('style', 'display: flex')
  bars.setAttribute('style', 'display: none')
})
