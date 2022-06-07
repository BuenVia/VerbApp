export const questions = {
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
