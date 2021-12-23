const exerciseList = document.getElementById('exercise-list')
const exerciseListBtn = document.getElementById('exercise-list-btn')
const exerciseValue = document.getElementById('exercise-list')
const addSet = document.getElementById('add-set-btn')

addWorkoutName()
function addWorkoutName(){
    document.getElementById('workout-name').innerHTML = window.localStorage.getItem('customInput')
}

function toggleExerciseList(){
    if(exerciseList.style.display === 'none'){
        exerciseList.style.display = "block"
    } else {
        exerciseList.style.display = 'none'
    }

}
exerciseListBtn.addEventListener('click', toggleExerciseList)

window.onclick = function (event){
    if(event.target === document.body){
        exerciseList.style.display = "none"
    }
}
let setNum = 1;
function addExercise(e){
    document.getElementById('add-exercise-block').innerHTML =
        '<div class="exercise">\n' +
        '        <h2 id="exercise-name"></h2>\n' +
        '        <div id="add-set"></div>\n' +
        '        <button id="add-set-btn" onclick="addSetHandler()">Add Set</button>\n ' +
        '</div>'
    document.getElementById('exercise-name').innerHTML = e.target.id
}
exerciseValue.addEventListener('click',addExercise)

function addSetHandler(){
    document.getElementById('add-set').insertAdjacentHTML("beforeend",
        '<div id="add-set-set">\n' +
        '            <div id="set-set">\n' +
        '               <div>set:</div>\n' +
        '               <p id="set-set-count">'+setNum+'</p>\n'+
        '            </div>\n' +
        '            <div id="set-weight">\n' +
        '               <div>weight:</div>\n' +
        '               <input id="set-weight-num" type="number"/>\n'+
        '            </div>\n'+
        '            <div id="set-rep">\n' +
        '               <div>reps:</div>\n' +
        '               <input id="set-rep-num" type="number"/>\n'+
        '            </div>\n'+
        ' </div>')
    setNum++;
}

