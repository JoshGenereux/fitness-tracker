const exerciseList = document.getElementById('exercise-list')
const exerciseListBtn = document.getElementById('exercise-list-btn')
const exerciseValue = document.getElementById('exercise-list')
const finishBtn = document.getElementById('finish')
const modal = document.getElementById('modal-overlay')
const cancelBtn = document.getElementById('cancel-btn')
const saveBtn = document.getElementById('save-workout')
exerciseValue.addEventListener('click', addExercise)
exerciseListBtn.addEventListener('click', toggleExerciseList)
const baseURL = 'Http:://localhost:8000/live-fitness'
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

let setNum = 1;
function addExercise(e){
    document.getElementById('add-exercise-block').insertAdjacentHTML("afterend",
        '<div class="exercise">\n' +
        '        <h2 id="exercise-name"></h2>\n' +
        '        <div id="add-set"></div>\n' +
        '        <button id="add-set-btn" >Add Set</button>\n ' +
        '</div>')
    document.getElementById('exercise-name').innerHTML = e.target.id
    addSetBtn()
    toggleExerciseList()
}

function addSetBtn(){
    document.getElementById('add-set-btn').addEventListener('click', addSetHandler)
}

function addSetHandler() {
    document.getElementById(`add-set`).insertAdjacentHTML("beforeend",
        '<div id="add-set-set">\n' +
        '            <div id="set-set">\n' +
        '               <div>set:</div>\n' +
        '               <p id="set-set-count" onchange="saveSet()">' + setNum + '</p>\n' +
        '            </div>\n' +
        '            <div id="set-weight">\n' +
        '               <div>weight:</div>\n' +
        '               <input id="set-weight-num" type="number" onchange="saveWeight()"/>\n' +
        '            </div>\n' +
        '            <div id="set-rep">\n' +
        '               <div>reps:</div>\n' +
        '               <input id="set-rep-num" type="number" onchange="saveReps()"/>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '               <button id="delete-set">Delete</button>\n' +
        '            </div>\n' +
        ' </div>')
    setNum++;
    document.getElementById('delete-set').addEventListener('click', deleteSet)
}

function deleteSet(){
    document.getElementById('add-set').remove()
}

finishBtn.addEventListener('click', ()=>{
    modal.style.display = 'block'
})

cancelBtn.addEventListener('click', ()=>{
    modal.style.display = "none"
})

function saveWeight(){
    let test = document.getElementById('set-weight-num')
    console.log(`weight = ${test.value}`)
    window.localStorage.setItem('saveWeight', test.value)
}

function saveSet(){
    let test = document.getElementById('set-weight-num')
    console.log(`set = ${test.value}`)
    window.localStorage.setItem('saveSet', test.value)
}

function saveReps(){
    let test = document.getElementById('set-weight-num')
    console.log(`reps = ${test.value}`)
    window.localStorage.setItem('saveReps', test.value)
}


// saveBtn.addEventListener('click', ()=>{
//     // let saved = document.getElementsByTagName('html')[0].innerHTML
//     let test = 'Josh'
//     axios
//         .post(test)
//             .then('info saved')
//         .catch((err)=>console.log(err))
// })