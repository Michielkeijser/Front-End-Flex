const buttonAlert = document.getElementById('mybutton')
const buttonColor = document.getElementById('backgroundcolor')
const bodyElement = document.getElementById('body__opdracht')

buttonAlert.addEventListener('click', function() {
  alert('Button clicked!')
})

buttonColor.addEventListener('click', function() {
  bodyElement.classList.toggle ('red-background')
})
