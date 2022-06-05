import { answers } from "./present_answers.js"

const ansBtns = document.querySelectorAll('[data-ans-btn]')
const ansInputs = document.querySelectorAll('[data-ans-input]')
const ansSelects = document.querySelectorAll('[data-ans-sel]')
const score = document.querySelectorAll('[data-score]')
const total = document.querySelectorAll('[data-total]')

let x, y
let ansBtnIndex
let currentAnswer = 0, totalAnswer = 0

// When 'Submit' button clicked, assign index to ansBtnIndex
ansBtns.forEach(ansBtn => {
    ansBtn.addEventListener('click', () => {
        currentAnswer = 0
        ansBtnIndex = ansBtn.dataset.ansBtn
        checkAnsInput()
        score.innerText = currentAnswer
    })
})

// Identify which inputs are relevant to the ansBtnIndex
function checkAnsInput() {
    ansInputs.forEach(ansInput => {
            if(ansInput.dataset.section === ansBtnIndex) {
                checkAns(ansInput)
            }
    })
    ansSelects.forEach(ansSelect => {
        console.log(ansSelect);
    })
}

// Check answers
function checkAns(input) {
    x = input.dataset.section
    y = input.dataset.ansInput
    if (input.value == answers[x][y].answer) {
        input.style.backgroundColor = 'green'
        answers[x][y].correct = true
        currentAnswer++
        totalAnswer++
    } else {
        input.style.backgroundColor = 'red'
    }
    input.value = answers[x][y].answer
    // if(answers[x][y].correct === true) console.log(answers[x][y]);
}

total.forEach(total => {
    const questNum = total.dataset.total
    total.innerText = Object.keys(answers[questNum]).length
})

// Helper Functions
function id(id) {
    return document.getElementById(id)
}

