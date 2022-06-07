export const questions = {
    infinitive: {
        // To be determined
    },
    present: {
        one: {
            tense: 'Present',
            type: 'write',
            instuction: 'Translate this word to Spanish',
            text: 'to have',
            answers: {
                correct: 'tener',
                other: null
            }, 
            fullText: 'tener'
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
            },
            fullText: 'Yo visito a mi amigo'
        }
    },
    serEstar: {
        one: {
            tense: 'Ser and Estar',
            type: 'multipleChoice',
            instuction: 'Select the correct word',
            text: 'Daniel y yo __________ griegos.',
            answers: {
                correct: 'somos',
                other: {
                    one: 'son',
                    two: 'sois'
                }
            },
            fullText: 'Daniel y yo somos griegos'
        },
        two: {
            tense: 'Ser and Estar',
            type: 'write',
            instuction: 'Translate this word to Spanish',
            text: 'The book is in my rucksack.',
            answers: {
                correct: 'El libro está en mi mochila',
                other: null
            },
            fullText: 'El libro está en mi mochila'
        }
    }
}
