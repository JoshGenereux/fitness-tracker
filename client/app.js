let modal = document.getElementById('create-modal')
const createBtn = document.getElementById('custom-button')
const closeBtn = document.getElementById('close')
let customInput = document.getElementById('custom-input')

createBtn.onclick = function (){
   modal.style.display = "block";
}
function closeModal(e){
   modal.style.display = "none";
}
window.onclick = function (e){
   if(e.target === modal){
      modal.style.display = "none";
   }
}
function customInputHandler(e){
   e.preventDefault()
   window.open('workout.html', "_self")
}

customInput.addEventListener('submit', customInputHandler)
closeBtn.addEventListener('click', closeModal)