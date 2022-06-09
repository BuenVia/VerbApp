export const verbSet = {
    present: {
        tense: 'Present',
        info: "Verb endings change depending on who is performing the action.",
        types: [
            {
                type: 'Regular',
                examples: [{
                    ending: '-AR',
                    conj: {
                        inf: 'hablar',
                        yo: 'habl-o',
                        tu: 'habl-as',
                        el: 'habl-a',
                        nosotros: 'habl-amos',
                        vosotros: 'habl-áis',
                        ustedes: 'habl-an'
                    }
                },
                {
                    ending: '-ER',
                    conj: {
                        inf: 'comer',
                        yo: 'com-o',
                        tu: 'com-es',
                        el: 'com-e',
                        nosotros: 'com-emos',
                        vosotros: 'com-éis',
                        ustedes: 'com-en'
                    }
                },
                {
                    ending: '-IR',
                    conj: {
                        inf: 'vivir',
                        yo: 'viv-o',
                        tu: 'viv-es',
                        el: 'viv-e',
                        nosotros: 'viv-imos',
                        vosotros: 'viv-ís',
                        ustedes: 'viv-en'
                    }
                }]
            },
            {
                type: 'Stem-Changing Verbs',
                examples: [{
                    ending: '-AR',
                    conj: {
                        yo: 'pienso',
                        tu: 'piensas',
                        el: 'piensa',
                        nosotros: 'pensaamos',
                        vosotros: 'pensáis',
                        ustedes: 'piensan'
                    }
                },
                {
                    ending: '-ER',
                    conj: {
                        yo: 'puedo',
                        tu: 'puedes',
                        el: 'puede',
                        nosotros: 'podemos',
                        vosotros: 'podéis',
                        ustedes: 'pueden'
                    }
                },
                {
                    ending: '-IR',
                    conj: {
                        yo: 'pido',
                        tu: 'pides',
                        el: 'pide',
                        nosotros: 'pedimos',
                        vosotros: 'pediís',
                        ustedes: 'piden'
                    }
                }]
        },
            {
                type: 'Irregular',
                examples: [{
                    ending: '-Ir',
                    conj: {
                        yo: 'pienso',
                        tu: 'piensas',
                        el: 'piensa',
                        nosotros: 'pensaamos',
                        vosotros: 'pensáis',
                        ustedes: 'piensan'
                    }
                },
                {
                    ending: 'Dar',
                    conj: {
                        yo: 'puedo',
                        tu: 'puedes',
                        el: 'puede',
                        nosotros: 'podemos',
                        vosotros: 'podéis',
                        ustedes: 'pueden'
                    }
                },
                {
                    ending: 'Hacer',
                    conj: { 
                        yo: 'pido',
                        tu: 'pides',
                        el: 'pide',
                        nosotros: 'pedimos',
                        vosotros: 'pediís',
                        ustedes: 'piden'
                    }
                },
                {
                    ending: 'Saber',
                    conj: { 
                        yo: 'pido',
                        tu: 'pides',
                        el: 'pide',
                        nosotros: 'pedimos',
                        vosotros: 'pediís',
                        ustedes: 'piden'
                    }
                }]
            }
        ] 
    },
    preterite: {
        tense: 'Preterite',
        info: "To talk about a completed action in the past.",
        type: [
            {
                type: 'Regular'
            },
            {
                type: 'Stem-Changing Verbs'
            },
            {
                type: 'Irregular'
            }
        ] 
    },
    imperfect: {
        tense: 'Imperfect',
        info: "To talk about something in the past that happened repeatedly, or over an undefined (unidicated) period of time.",
        type: [
            {
                type: 'Regular'
            },
            {
                type: 'Stem-Changing Verbs'
            },
            {
                type: 'Irregular'
            }
        ] 
    }
}