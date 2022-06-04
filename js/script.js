const ansBtns = document.querySelectorAll('[data-ans-btn]')
const ansInputs = document.querySelectorAll('[data-ans-input]')
const section = document.querySelectorAll('[data-section]')

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
}

// Helper Functions
function id(id) {
    return document.getElementById(id)
}

// Answers
const answers = {
    sectOne : {
        one: "tener",
        two: "querer",
        three: "vivir",
        four: "cantar",
        five: "escribir",
        six: "pensar"
    },
    sectTwo : {
        one: "visito",
        two: "visitas",
        three: "visita",
        four: "visitamos",
        five: "visitáis",
        six: "visitan"
    }
}
