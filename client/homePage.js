
let modal = document.getElementById('create-modal')
const createBtn = document.getElementById('custom-button')
const closeBtn = document.getElementById('close')
let customInput = document.getElementById('custom-input')

function customWorkoutFunc(){
   modal.style.display = "block";
}
createBtn.addEventListener('click', customWorkoutFunc)

function closeModal(){
   modal.style.display = "none";
}

function customInputHandler(e){
   e.preventDefault()
   let userInput = document.getElementById('custom-input-text')
   window.localStorage.setItem('customInput', userInput.value)
   window.open('workout.html', "_self")
}

customInput.addEventListener('submit', customInputHandler)
closeBtn.addEventListener('click', closeModal)
