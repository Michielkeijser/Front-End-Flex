let toggleNav = false
const btnFa = document.querySelector('.fas')
const colorMenu = document.querySelectorAll('.color__picker li')
const btnBlue = document.querySelector('.color__picker--blue')
const btnLightBlue = document.querySelector('.color__picker--lightblue')
const btnGreen = document.querySelector('.color__picker--green')
const btnYellow = document.querySelector('.color__picker--yellow')
const btnOrange = document.querySelector('.color__picker--orange')

btnFa.addEventListener('click', function() {
  if (toggleNav === false) {
    for (let i = 0; i < colorMenu.length; i++) {
      colorMenu[i].style.left = '0px'
    }
    toggleNav = true
  } else if (toggleNav === true) {
    for (let i = 0; i < colorMenu.length; i++) {
      colorMenu[i].style.left = '-240px'
    }
    toggleNav = false
  }
})

btnBlue.addEventListener('click', function() {
  document.body.style.background = '#00bcd4'
  document.querySelector('.color__text').innerHTML = '<h1>Blue</h1>Hex: #00bcd4'
  if (toggleNav === true) {
    for (let i = 0; i < colorMenu.length; i++) {
      colorMenu[i].style.left = '-240px'
    }
    toggleNav = false
  }
})

btnLightBlue.addEventListener('click', function() {
  document.body.style.background = '#7fdbda'
  document.querySelector('.color__text').innerHTML = '<h1>Light Blue</h1>Hex: #7fdbda'
  if (toggleNav === true) {
    for (let i = 0; i < colorMenu.length; i++) {
      colorMenu[i].style.left = '-240px'
    }
    toggleNav = false
  }
})

btnGreen.addEventListener('click', function() {
  document.body.style.background = '#ade498'
  document.querySelector('.color__text').innerHTML = '<h1>Green</h1>Hex: #ade498'
  if (toggleNav === true) {
    for (let i = 0; i < colorMenu.length; i++) {
      colorMenu[i].style.left = '-240px'
    }
    toggleNav = false
  }
})

btnYellow.addEventListener('click', function() {
  document.body.style.background = '#ede682'
  document.querySelector('.color__text').innerHTML = '<h1>Yellow</h1>Hex: #ede682'
  if (toggleNav === true) {
    for (let i = 0; i < colorMenu.length; i++) {
      colorMenu[i].style.left = '-240px'
    }
    toggleNav = false
  }
})

btnOrange.addEventListener('click', function() {
  document.body.style.background = '#febf63'
  document.querySelector('.color__text').innerHTML = '<h1>Orange</h1>Hex: #febf63'
  if (toggleNav === true) {
    for (let i = 0; i < colorMenu.length; i++) {
      colorMenu[i].style.left = '-240px'
    }
    toggleNav = false
  }
})
