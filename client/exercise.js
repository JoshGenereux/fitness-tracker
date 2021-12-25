const exerciseList = document.getElementById('exercise-list')
const exerciseListBtn = document.getElementById('exercise-list-btn')
const exerciseValue = document.getElementById('exercise-list')
const deleteBtn = document.getElementById('delete-set')
const finishBtn = document.getElementById('finish')
const modal = document.getElementById('create-modal')
const cancelBtn = document.getElementById('cancel-btn')
const saveBtn = document.getElementById('save-workout')
const saveWeight = document.getElementById('set-weight-num')
exerciseValue.addEventListener('click', addExercise)

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
        modal.style.display = "none"
    }
}


let setNum = 1;
let count = 0;

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


function addSetHandler(){
    document.getElementById(`add-set`).insertAdjacentHTML("beforeend",
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
        '            <div>\n' +
        '               <button id="delete-set">Delete</button>\n'+
        '            </div>\n'+
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

function saveInfo(){
    let test = document.getElementById('set-weight-num')
    if(test.innerHTML !== null){
        window.localStorage.setItem('set number', test.value)
    }
    console.log("save wweigth")
}
saveWeight.addEventListener('input', saveInfo)

// saveBtn.addEventListener('click', ()=>{
//     axios
//         .post(/)
// })