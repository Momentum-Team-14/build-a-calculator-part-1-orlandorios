console.log('connected!')
// get number to display in display
// operation to display in display
// perform calculation
// clear display
let numbers = document.querySelectorAll('.number')
let operation = document.querySelectorAll('.op')
let display = document.querySelector('.display')

for (let number of numbers) {
  number.addEventListener('click', function(event){
  // display.innerText = display.innerText + event.target.textContent 
  display.innerText += event.target.textContent
  console.log(event.target.textContent)
  }
  )
}