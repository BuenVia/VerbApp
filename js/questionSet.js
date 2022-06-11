const w = 'write'
const mc = 'multipleChoice'
const tranSp = 'Translate this word to Spanish'
const tranEn = 'Translate this word to English'
const sel = 'Select the correct word'

const quesTemp = class{
    constructor(type, instruction, text, answers, fullText) {
        this.type = type
        this.instuction = instruction
        this.text = text
        this.answers = answers
        this.fullText = fullText
    }
}

// new quesTemp(, , '', { correct: '', other: null}, ''),

export const qs = {
    infinitive: {
        tense: 'Infinite',
        questions : [
            new quesTemp(w, tranSp,'to be (permanent)', { correct: 'ser', other: null },'ser'),
            new quesTemp(w, tranSp,'to be (temporary)', { correct: 'estar', other: null },'estar'),
            new quesTemp(w, tranSp, 'to do', { correct: 'hacer', other: null }, 'hacer'),
            new quesTemp(w, tranSp, 'to say', { correct: 'decir', other: null }, 'decir'),
            new quesTemp(w, tranSp, 'to have', { correct: 'tener', other: null }, 'tener'),
        ]
    },
    present: {
        tense: 'Present',
        questions: [
            new quesTemp(mc, sel, 'Yo __________ a mi amigo', { correct: 'visito', other: ['visita', 'visitas'] }, 'Yo visito a mi amigo'),
            new quesTemp(w, tranSp, 'You drink (sing. inf.)', { correct: 'bebes', other: null}, 'bebes'),
            new quesTemp(mc, sel, 'Sita y Raúl __________ muchas cartas', { correct: 'escriben', other: ['escribes', 'escribimos']}, 'Sita y Raúl escriben muchas cartas'),
            new quesTemp(w, tranEn, 'El coche cuesta mil libras', { correct: 'The car costs a thousand pounds', other: null }, 'The car costs a thousand pounds'),
            new quesTemp(mc, sel, 'Yo no __________ lo que esta pensando', { correct: 'sé', other: ['sabes', 'saben'] }, 'Yo no sé lo que esta pensando')
        ]
    },
    serEstar: {
        tense: 'Ser and Estar',
        questions: [
            new quesTemp(mc, sel, 'Daniel y yo __________ giregos', { correct: 'somos', other: ['estamos', 'son']}, 'Daniel y yo somos griegos'),
            new quesTemp(w, tranSp, 'The book is in my rucksack', { correct: 'El libro está en mi mochila', other: null}, 'El libro está en mi mochila'),
            new quesTemp(w, tranSp, 'I am in the garden', { correct: 'Estoy en el jardín', other: null}, 'Estoy en el jardín'),
            new quesTemp(mc, sel, 'Hola _________ Matt', { correct: 'soy', other: ['estoy', 'sea'] }, 'Hola soy Matt'),
            new quesTemp(mc, sel, 'Todas mis primos __________ peluqueras. ¡Qué raro!', { correct: 'son', other: ['están', 'estamos'] }, 'Todas mis primos son peluqueras. ¡Qué raro!')
        ]
    },
    preterite: {
        tense: 'Preterite',
        questions : [
            new quesTemp(w, tranSp,'I bought six cakes from the pastry shop', { correct: 'Compré seis pasteles de la pastelería', other: null },'Compré seis pasteles de la pastelería'),
            new quesTemp(w, tranSp,'Germán watched TV for four hours', { correct: 'Germán vio la televisión durante cuatro horas', other: null },'Germán vio la televisión durante cuatro horas'),
            new quesTemp(mc, sel, 'I went', { correct: 'fui', other: ['fuiste', 'fuimos'] }, 'fui'),
            new quesTemp(mc, sel, 'Yo __________ mis libros', { correct: 'traje', other: ['trajiste', 'trajo'] }, 'Yo traje mis libros'),
            new quesTemp(mc, sel, 'He said', { correct: 'dijo', other: ['dije', 'dijeron'] }, 'dijo'),
        ]
    },
}