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
    imperfect: {
        tense: 'Imperfect',
        questions : [
            new quesTemp(w, tranSp,'I used to go to the gym by bike', { correct: 'Iba al gimnasio en bici', other: null },'Iba al gimnasio en bici'),
            new quesTemp(mc, sel, 'You used to be quite lazy', { correct: 'Eras bastante perezosa', other: ['Estabas bastant perezosa', 'Fuist bastante perezosa'] }, 'Eras bastante perezosa'),
            new quesTemp(w, tranEn,'Veíamos documentales juntos', { correct: 'We used to watch documentaries together', other: null },'Veíamos documentales juntos'),
            new quesTemp(mc, sel, 'Cada verano, __________ (nadar, ellos) en el lago', { correct: 'nadaban', other: ['nadaron', 'nadaba'] }, 'Cada verano, nadaban en el lago'),
            new quesTemp(w, tranEn, 'I used to do, you used to do, he / she / it used to do', { correct: 'hacía, hacías, hacía', other: null }, 'hacía, hacías, hacía'),
        ]
    },
    pretImp: {
        tense: 'Preterite Vs Imperfect',
        questions : [
            new quesTemp(mc, sel, 'El lunes _________ al colegio.', { correct: 'fui', other: ['iba', 'fuera'] }, 'El lunes fui al colegio'),
            new quesTemp(w, tranSp,'When I heard the noise, I was at home', { correct: 'Cuando oí el ruido, estaba en casa', other: null },'Cuando oí el ruido, estaba en casa'),
            new quesTemp(mc, sel, 'Anteayer, __________ buen tiempo', { correct: 'hizo', other: ['hacía', 'fue'] }, 'Anteayer, hizo buen tiempo'),
            new quesTemp(w, tranSp,'Yesterday, Pedro told the truth to his mother', { correct: 'Ayer, Pedro dijo la verdad a su madre', other: null },'Ayer, Pedro dijo la verdad a su madre'),
            new quesTemp(w, tranEn, 'El martes, decidí acostarme pronto', { correct: 'On Tuesday, I decided to go to bed early', other: null }, 'El martes, decidí acostarme pronto.'),
        ]
    },
    perfect: {
        tense: 'Perfect',
        questions : [
            new quesTemp(w, tranSp, 'I have, you (sing., inf.) have, he / she / it has', { correct: 'he, has, ha', other: null}, 'He, has, ha'),
            new quesTemp(w, tranSp, 'We have, you (pl., inf.), they have', { correct: 'hemos, habéis, han', other: null}, 'hemos, habéis, han'),
            new quesTemp(w, tranEn, 'dicho', { correct: 'said', other: null}, 'dicho'),
            new quesTemp(w, tranSp, 'I have done it', { correct: 'Lo he hecho', other: null}, 'Lo he hecho.'),
            new quesTemp(mc, sel, 'Gone', { correct: 'ido', other: ['ir','fue'] }, 'ido'),
        ]
    },
    pluperfect: {
        tense: 'Pluperfect',
        questions : [
            new quesTemp(mc, sel, 'I had', { correct: 'había', other: ['habías', 'habían'] }, 'había'),
            new quesTemp(w, tranEn, 'El examen había empezado', { correct: 'The exam had started', other: null}, 'El examen había empzado'),
            new quesTemp(w, tranSp, 'You had broken the windows', { correct: 'Habías roto las ventanas', other: null}, 'Habías roto las ventanas'),
            new quesTemp(mc, sel, 'You (all, inf.) had', { correct: 'habíais', other: ['habías', 'habían'] }, 'habíais'),
            new quesTemp(w, tranSp, 'We had seen that film', { correct: 'Habíamos visto esa película', other: null}, 'Habíamos visto esa película')
        ]
    },
    presCont: {
        tense: 'Present Continuous',
        questions : [
            new quesTemp(mc, sel, 'correr', { correct: 'corriendo', other: ['corrido', 'corro']}, 'corriendo'),
            new quesTemp(w, tranSp, 'We are ordering some drinks', { correct: 'Estamos pidiendo unas bebidas', other: null }, 'Estamos pidiendo unas bebidas'),
            new quesTemp(mc, sel, 'hablar', { correct: 'hablando', other: ['hablaba', 'hablado']}, 'hablando'),
            new quesTemp(w, tranSp, 'I am chatting with some friends', { correct: 'Estoy charlando con algunos amigos', other: null }, 'Estoy charlando con algunos amigos'),
            new quesTemp(mc, sel, 'seguir', { correct: 'siguiendo', other: ['seguía', 'seguido']}, 'siguiendo')
        ]
    },
    imFur: {
        tense: 'Immediate Future',
        questions : [
            new quesTemp(w, tranEn, 'Van a estudiar para su examen', { correct: 'They are going to study for their exam', other: null}, 'Van a estudiar para su examen'),
            new quesTemp(mc, sel, 'I am going to watch the football match', { correct: 'Voy a ver el partido del fútbol', other: ['Veré el partido del fútbol', 'Estoy viendo el partido del fútbol']}, 'Voy a ver el partido del fútbol'),
            new quesTemp(w, tranEn, 'Voy a pedir dos botellas de agua', { correct: 'I am going to order two bottles of water', other: null}, 'Voy a pedir dos botellas de agua'),
            new quesTemp(w, tranSp, 'You (inf., pl.) are going to close the window', { correct: 'Vais a cerrar la ventana', other: null}, 'Vais a cerrar la ventana'),
            new quesTemp(mc, sel, 'Nosotros ________ a hacer la compra', { correct: 'vamos', other: ['van', 'vais']}, 'Nosotros vamos a hacer la compra')
        ]
    },
    propFut: {
        tense: 'Proper Future',
        questions : [
            new quesTemp(mc, sel, 'I will', { correct: 'veré', other: ['voy', 'haré']}, 'veré'),
            new quesTemp(w, tranSp, 'I will go to the cinema', { correct: 'Iré al cine', other: null}, 'Iré al cine'),
            new quesTemp(mc, sel, 'You (inf., sing.) will', { correct: 'verás', other: ['vas', 'van']}, 'verás'),
            new quesTemp(w, tranEn, 'Mañana aprenderemos sobre las ventajas y las desventajas', { correct: 'Tomorow we will learn about the advantages and disadvantages', other: null}, 'Mañana aprenderemos sobre las ventajas y las desventajas'),
            new quesTemp(w, tranSp, 'On Saturday you will sing the song you have written', { correct: 'El sábado tú cantarás la canción que has escrito', other: null}, 'El sábado tú cantarás la canción que has escrito')
        ]
    },
    conditional: {
        tense: 'Conditional',
        questions : [
            new quesTemp(mc, sel, 'I would', { correct: 'sería', other: ['haría', 'sea']}, 'sería'),
            new quesTemp(mc, sel, 'They would', { correct: 'serían', other: ['harián', 'sean']}, 'serían'),
            new quesTemp(w, tranSp, 'He would eat, but he isn\'t hungry', { correct: 'Comería, pero no tiene hambre', other: null}, 'Comería, pero no tiene hambre'),
            new quesTemp(w, tranSp, 'You (inf., pl.) wouldn\'t watch that programme', { correct: 'No veríais ese programa', other: null}, 'No veríais ese programa'),
            new quesTemp(w, tranEn, 'Lavaríamos los platos primeros, luego las tazas', { correct: 'We would wash the dishes first, then the cups', other: null}, 'Lavaríamos los platos primeros, luego las tazas'),
        ]
    },
}