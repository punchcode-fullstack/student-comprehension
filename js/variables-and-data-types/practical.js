/*
    We use variables to track information
    we can store references to html
    or store numbers to use later
*/

// example 1: weight to kg calculator

function calculateWeight(e) {
    e.preventDefault()
    const lbsEl = document.querySelector('#lbs')
    const userWeightInLbs = Number(lbsEl.value)
    const weightInKg = userWeightInLbs * 2.2
    const kgRounded = weightInKg.toFixed(2)
    const outputEl = document.querySelector('#weightInKg')
    outputEl.innerHTML = kgRounded
}

document.querySelector('#lbForm')
.addEventListener('submit', calculateWeight)

// example 2: todo app

// tracking our list in an array
const todos = []
function makeTodos(e) {
    e.preventDefault()
    const todoEl = document.querySelector('#todo')
    const todoVal = todoEl.value
    if (todoVal) {
        todos.push(todoVal)
        // making a string with a variable based on list
        let html = ''
        for (let i = 0; i < todos.length; i++) {
            html += `<li>${todos[i]}</li>`
        }
        document.querySelector('#todos').innerHTML = html
        todoEl.value = ''
    }
    
}

document.querySelector('#todoForm')
.addEventListener('submit', makeTodos)