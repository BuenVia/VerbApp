export const qs = {
    present: {
        tense: 'Present',
        questions: [
            {
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
            {
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
        ]
    },
    serEstar: {
        tense: 'Ser and Estar',
        questions: [
            {
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
            {
                type: 'write',
                instuction: 'Translate this word to Spanish',
                text: 'The book is in my rucksack.',
                answers: {
                    correct: 'El libro está en mi mochila',
                    other: null
                },
                fullText: 'El libro está en mi mochila'
            }
        ]
    }
}