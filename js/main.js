import { questions } from './questionSet.js'

const tenseContainer = id('tenseContainer')
const practiceContainer = id('practiceContainer')
const summaryContainer = id('summaryContainer')

const sectionBtns = document.querySelectorAll('[data-practice-btn]')

const headerEl = id('header')
const scoreEls = document.querySelectorAll('[data-score-el]')
const totalEls = document.querySelectorAll('[data-total-el]')


// The questions variable (pulled from questionSet.js) + chosenSub. eg... questions.present
let questionSet
// The questions variable + chosenSub + position of current item in the chosenSub. eg... questions.present[0]
let questionIndex = 0
// User's answer to each questions is assigned to this variable
let userAnswer
// After user answers question, it is pushed to this array
let ansArr = []
// Last 10 wrong answers
let wrongAnsHist = []



// Fix scoring
// Refactor template function
// Fill out question set
// Responsive design

// Assign question set
sectionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const btnDataSet = btn.dataset.practiceBtn
        if(questions.hasOwnProperty(btnDataSet)) {
            questionSet = Object.values(questions[btnDataSet])
            loadQuestions(questionSet[questionIndex])
            tenseContainer.style.display = 'none'
            practiceContainer.style.display = 'block'
        } else {
            alert('Sorry, your choice doesn\'t exist yet')
        }
    })
})

// Render question next question to screen
function loadQuestions(item) {
    if (questionIndex < questionSet.length) {
        // generateTemplate(item)
        genTemp(item)
        const submitBtn = id('submitBtn')
        const nextBtn = id('nextBtn')
        // If a multiple choice question, assign the user's answer to a variable called userAnswer
        const userAnswerEl = id('userAnswerEl')
        if (item.type === 'multipleChoice') {
            const userAnsBtn = document.querySelectorAll('[data-ans-btn]')
            userAnsBtn.forEach(ansBtn => {
                ansBtn.addEventListener('click', () => {
                    ansBtn.style.backgroundColor = 'red'
                    userAnswer = ansBtn.dataset.ansBtn
                })
            })
        }
        submitBtn.addEventListener('click', () => {
            if (item.type === 'write') userAnswer = userAnswerEl.value
            submitBtn.style.display = 'none'
            assignAnswer(item)
            nextBtn.style.display = 'block'        
        })
    } else {
        practiceContainer.style.display = 'none'
        summary()
        headerEl.innerHTML = score(ansArr)
        id('finishBtn').addEventListener('click', () => {
            resetState()
            id('finishBtn').style.display = 'none'
            summaryContainer.innerHTML = ''
            headerEl.innerHTML = `<h1>Practice</h1>` // Change to be tense
            summaryContainer.style.display = 'none'
            tenseContainer.style.display = 'block'
            wrongAnsHistTemp()
        })
    }
}

// Assigns the user answer to a variable
function assignAnswer(item) {
    checkAnswer(item)
    nextBtn.addEventListener('click', () => {
        questionIndex++
        headerEl.innerHTML = `<h1>Practice</h1>` // Change to be tense
        headerEl.style.backgroundColor = ''
        loadQuestions(questionSet[questionIndex])
    })
}

// Checks user answer against actual answer and saves it to object
function checkAnswer(item) {
    questionSet[questionIndex].userAnswer = userAnswer
    if (userAnswer === questionSet[questionIndex].answers.correct) {
        headerEl.innerHTML = `<h1>Correct</h1>`
        headerEl.style.backgroundColor = 'var(--correct)'
        questionSet[questionIndex].correct = true
        playaudio(item.fullText, 1)
    } else {
        headerEl.innerHTML = `<h1>Wrong</h1>`
        headerEl.style.backgroundColor = 'var(--incorrect)'
        questionSet[questionIndex].correct = false
        wrongAnsHist.push(questionSet[questionIndex])
        console.log(wrongAnsHist)
    }
    ansArr.push(questionSet[questionIndex])
}

function score(item) {
    let correctScore = 0
    for (let i = 0; i < item.length; i++) {
        if (item[i].correct === true) {
            correctScore++
        }
    }
    return `<h1>Score: ${correctScore} / ${item.length}</h1>`
}

// Generates template for each question before rendering to screen
function genTemp(item) {
    const tempType = () => {
        if(item.type === 'write') {
            return `
                <textarea name="" id="userAnswerEl" cols="30" rows="10"></textarea>
            </div>
            `
        }    
        if(item.type === 'multipleChoice') {
            return `
            </div>
            <div class="flex-col">
                <button class="ans-btn" id="ansBtn" data-ans-btn="${item.answers.other.one}">${item.answers.other.one}</button>
                <button class="ans-btn" id="ansBtn" data-ans-btn="${item.answers.correct}">${item.answers.correct}</button>
                <button class="ans-btn" id="ansBtn" data-ans-btn="${item.answers.other.two}">${item.answers.other.two}</button>
            </div>
            `
        }
    }

    const html = `
    <div class="text-sm" id="textSmEl">
        <h3 id="titleEl">${item.instuction}</h3>
        <div class="flex-col">
            <div class="flex-col translate-box">
                <p>${item.text}</p>
                ${tempType()}
            <div>
                <button class="btn btn-submit" id="submitBtn">Submit</button>
                <button class="btn btn-next" id="nextBtn">Next</button>
            </div>
        </div>
    </div>
    `
    practiceContainer.innerHTML = html
}

// Generates and renders summary to screen after user has answered questions
function summary() {
    summaryContainer.style.display = 'block'
    ansArr.forEach(ans => {
        const correctHtml= `
        <h4>Correct answer:</h4> 
        <p>${ans.answers.correct}</p>
        `
        const ansCorrect = () => ans.correct === true ? 'correct' : 'incorrect'
        const showCorrect = () => ans.correct === false ? correctHtml : ''
        const summary = `
        <div class="summary-box ${ansCorrect()}">
            <h3>${ans.instuction}</h3>
            <p>${ans.fullText}</p>
            <h4>Your answer:</h4> 
            <p>${ans.userAnswer}</p>
            ${showCorrect()}
        </div>
        `
        summaryContainer.innerHTML += summary
    })
    id('finishBtn').style.display = 'block'
}

function wrongAnsHistTemp() {
    if (wrongAnsHist.length > 0) {
        id('wrongAns').innerHTML = `<button class="btn btn-submit">Practice</button>`
    }
    console.log(wrongAnsHist.length)
}

function playaudio(text, speed) {
    const speech = new SpeechSynthesisUtterance()
    if(speechSynthesis.speaking) return
    speech.lang = 'es-ES'
    speech.text = text
    speech.rate = speed || 1
    speechSynthesis.speak(speech)
}

// Reset state
function resetState() {
    questionSet = ''
    questionIndex = 0
    userAnswer = ''
    ansArr = []
}

/////////////////////////////////////////////
// Helper
function id(id) {
    return document.getElementById(id)
}