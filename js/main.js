const tenseContainer = id('tenseContainer')
const practiceContainer = id('practiceContainer')
const summaryContainer = id('summaryContainer')

const sectionBtns = document.querySelectorAll('[data-practice-btn]')
const presentBtn = id('presentBtn')

let chosenSub, questionSet, questionIndex = 0, ansBtnAns, userAnswer, ansArr = []

// Assign question set
sectionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tenseContainer.style.display = 'none'
        practiceContainer.style.display = 'block'
        // Assign user selection to chosenSub variable
        const btnDataSet = btn.dataset.practiceBtn
        if(questions.hasOwnProperty(btnDataSet)) {
            chosenSub = btnDataSet
        } else {
            alert('Sorry, your choice doesn\'t exist yet')
        }
        questionSet = Object.values(questions[chosenSub])
        loadQuestions(questionSet[questionIndex])
    })
})

// Render question next question to screen
function loadQuestions(item) {
    if (questionIndex < questionSet.length) {
        generateTemplate(item)
        const submitBtn = id('submitBtn')
        const nextBtn = id('nextBtn')
        // If a multiple choice question, assign the user's answer to a variable called ansBtnAns
        if (item.type === 'multipleChoice') {
            const userAnsBtn = document.querySelectorAll('[data-ans-btn]')
            userAnsBtn.forEach(ansBtn => {
                ansBtn.addEventListener('click', () => {
                    ansBtnAns = ansBtn.dataset.ansBtn
                    ansBtn.style.backgroundColor = 'red'
                })
            })
        }
        submitBtn.addEventListener('click', () => {
            submitBtn.style.display = 'none'
            assignAnswer(item)
            nextBtn.style.display = 'block'        
        })
    } else {
        practiceContainer.style.display = 'none'
        summary()
        id('header').innerHTML = score(ansArr)
        console.log(ansArr);
        id('finishBtn').addEventListener('click', () => {
            resetState()
            id('header').innerHTML = `<h1>Practice</h1>` // Change to be tense
            summaryContainer.style.display = 'none'
            tenseContainer.style.display = 'block'
        })
    }
}

// Assigns the user answer to a variable
function assignAnswer(item) {
    const userAnswerEl = id('userAnswerEl')
    if (item.type === 'write') {
        userAnswer = userAnswerEl.value
    } else if (item.type === 'multipleChoice') {
        userAnswer = ansBtnAns
    }
    checkAnswer(item)
    nextBtn.addEventListener('click', () => {
        questionIndex++
        id('header').innerHTML = `<h1>Practice</h1>` // Change to be tense
        id('header').style.backgroundColor = ''
        loadQuestions(questionSet[questionIndex])
    })
}

// Checks user answer against actual answer and saves it to object
function checkAnswer(item) {
    const answerObj = {
        instuction: item.instuction,
        question: item.text,
        answer: item.answers.correct,
        userAnswer: userAnswer,
        correct: undefined
    }
    if (userAnswer === item.answers.correct) {
        id('header').innerHTML = `<h1>Correct</h1>`
        id('header').style.backgroundColor = 'var(--correct)'
        answerObj.correct = true
    } else {
        id('header').innerHTML = `<h1>Wrong</h1>`
        id('header').style.backgroundColor = 'var(--incorrect)'
        answerObj.correct = false
    }
    ansArr.push(answerObj)
}

const scoreObj = {
    present: null,
    serEstar: null
}

function score(item) {
    let correctScore = 0
    for (let i = 0; i < item.length; i++) {
        if (item[i].correct === true) {
            correctScore++
        }
    }
    scoreObj[chosenSub] = correctScore
    console.log(scoreObj)
    return `<h1>Score: ${correctScore} / ${item.length}</h1>`
}

// Generates template for each question before rendering to screen
function generateTemplate(item) {
    if(item.type === 'multipleChoice') {
        const multipleChoice = `
        <div class="text-sm">
            <h3 id="titleEl">${item.tense}</h3>
            <div class="flex-col">
                <div>
                    <p>${item.text}</p>
                </div>
                <div class="flex-col">
                    <button class="ans-btn" id="ansBtn" data-ans-btn="${item.answers.other.one}">${item.answers.other.one}</button>
                    <button class="ans-btn" id="ansBtn" data-ans-btn="${item.answers.correct}">${item.answers.correct}</button>
                    <button class="ans-btn" id="ansBtn" data-ans-btn="${item.answers.other.two}">${item.answers.other.two}</button>
                </div>
                <div>
                    <button class="btn btn-submit" id="submitBtn">Submit</button>
                    <button class="btn btn-next" id="nextBtn">Next</button>
                </div>
            </div>
        </div>
        `
        practiceContainer.innerHTML = multipleChoice
    }
    if(item.type === 'write') {
        const write = `
        <div class="text-sm" id="textSmEl">
            <h3 id="titleEl">${item.tense}</h3>
            <div class="flex-col">
                <div class="flex-col translate-box">
                    <p>${item.text}</p>
                    <textarea name="" id="userAnswerEl" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button class="btn btn-submit" id="submitBtn">Submit</button>
                    <button class="btn btn-next" id="nextBtn">Next</button>
                </div>
            </div>
        </div>
        `
        practiceContainer.innerHTML = write
    }
}

// Generates and renders summary to screen after user has answered questions
function summary() {
    ansArr.forEach(ans => {
        const correctHtml= `
        <h4>Correct answer:</h4> 
        <p>${ans.answer}</p>
        `
        const ansCorrect = () => ans.correct === true ? 'correct' : 'incorrect'
        const showCorrect = () => ans.correct === false ? correctHtml : ''
        const summary = `
        <div class="summary-box ${ansCorrect()}">
            <h3>${ans.instuction}</h3>
            <p>${ans.question}</p>
            <h4>Your answer:</h4> 
            <p>${ans.userAnswer}</p>
            ${showCorrect()}
        </div>
        `
        summaryContainer.innerHTML += summary
    })
}

// Reset state
function resetState() {
    chosenSub = ''
    questionSet = ''
    questionIndex = 0
    ansBtnAns = ''
    userAnswer = ''
    ansArr = []
}

/////////////////////////////////////////////
// Helper
function id(id) {
    return document.getElementById(id)
}

const questions = {
    present: {
        one: {
            tense: 'Present',
            type: 'write',
            instuction: 'Translate this word to Spanish',
            text: 'to have',
            answers: {
                correct: 'tener',
                other: null
            }
        },
        two: {
            tense: 'Present',
            type: 'multipleChoice',
            instuction: 'Select the correct word',
            text: 'Yo __________ a mi amigo.',
            answers: {
                correct: 'visito',
                other: {
                    one: 'visita',
                    two: 'visitas'
                }
            }
        }
    },
    serEstar: {
        one: {
            type: 'multipleChoice',
            text: 'Daniel y yo __________ griegos.',
            answers: {
                correct: 'somos',
                other: {
                    one: 'son',
                    two: 'sois'
                }
            }
        },
        two: {
            type: 'write',
            text: 'The book is in my rucksack.',
            answers: {
                correct: 'El libro está en mi mochila',
                other: null
            }
        }
    }
}
