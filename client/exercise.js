const exerciseList = document.getElementById('exercise-list')
const exerciseListBtn = document.getElementById('exercise-list-btn')
const exerciseValue = document.getElementById('exercise-list')

addWorkoutName()
function addWorkoutName(){
    document.getElementById('workout-name').innerHTML = window.localStorage.getItem('customInput')
}

function toggleExerciseList(){
    exerciseList.style.display = "block"
}
exerciseListBtn.addEventListener('click', toggleExerciseList)

window.onclick = function (event){
    if(event.target === document.body){
        exerciseList.style.display = "none"
    }
}

function addExercise(e){
    const elementValue = e.target.id;
    console.log(elementValue)
    let exerciseSelector = document.queryCommandValue('')
    console.log(exerciseSelector)
    document.getElementById('exercise-name').innerHTML = elementValue
}
exerciseValue.addEventListener('click',addExercise)