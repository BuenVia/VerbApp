const tenseContainer = id('tenseContainer')

const sectionBtns = document.querySelectorAll('[data-practice-btn]')
const presentBtn = id('presentBtn')

const practiceContainer = id('practiceContainer')


let chosenSub, questionSet, questionIndex = 0, ansBtnAns, userAnswer, ansArr = []
/////////////////////////////////////////////

sectionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tenseContainer.style.display = 'none'
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
        practiceContainer.innerHTML = 'Completed'
        console.log(ansArr);
    }
}

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

function checkAnswer(item) {
    const answerObj = {
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

/////////////////////////////////////////////

function id(id) {
    return document.getElementById(id)
}

const questions = {
    present: {
        one: {
            tense: 'Present',
            type: 'write',
            text: 'to have',
            answers: {
                correct: 'tener',
                other: null
            }
        },
        two: {
            type: 'multipleChoice',
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
