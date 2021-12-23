const exerciseList = document.getElementById('exercise-list')
const exerciseListBtn = document.getElementById('exercise-list-btn')
const exerciseValue = document.getElementById('exercise-list')
const addSet = document.getElementById('add-set')

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
    let setNum = 1;
    document.getElementById('add-exercise-block').innerHTML =
        '<div class="exercise">\n' +
        '        <h2 id="exercise-name"></h2>\n' +
        '        <div id="set">\n' +
        '            <div id="set-set">set: <p id="set-count"></p></div>\n' +
        '            <div id="set-weight">weight: <p id="set-weight-num"></p></div>\n' +
        '            <div id="set-rep">reps: <p id="set-rep-num"></p></div>\n' +
        '        </div>\n' +
        '        <button id="add-set" onclick="addSetHandler()">Add Set</button>\n ' +
        '</div>'
    document.getElementById('exercise-name').innerHTML = e.target.id

}
exerciseValue.addEventListener('click',addExercise)

function addSetHandler(){
    document.getElementById('add-exercise-block').innerHTML =
            '<div id="set">\n' +
            ' <div id="set-set">set: <p id="set-count"></p></div>\n' +
            ' <div id="set-weight">weight: <p id="set-weight-num"></p></div>\n' +
            ' <div id="set-rep">reps: <p id="set-rep-num"></p></div>\n' +
            ' </div>'
}

function addSetNum (){
    const setDivOne = document.createElement('div').id = 'exercise'
}