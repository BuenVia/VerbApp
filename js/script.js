import { answers } from "./present_answers.js"

const ansBtns = document.querySelectorAll('[data-ans-btn]')
const ansInputs = document.querySelectorAll('[data-ans-input]')
const ansSelects = document.querySelectorAll('[data-ans-sel]')

let ansBtnIndex

// When 'Submit' button clicked, assign index to ansBtnIndex
ansBtns.forEach(ansBtn => {
    ansBtn.addEventListener('click', () => {
        ansBtnIndex = ansBtn.dataset.ansBtn
        checkAnsInput()
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
    const x = input.dataset.section
    const y = input.dataset.ansInput
    console.log(input.dataset.section, input.dataset.ansInput, input.value, answers[x][y]);
    if (input.value == answers[x][y]) {
        input.style.backgroundColor = 'green'
    } else {
        input.style.backgroundColor = 'red'
    }
    input.value = answers[x][y]
}

// Helper Functions
function id(id) {
    return document.getElementById(id)
}

