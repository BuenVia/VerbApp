export const verbSet = {
    presReg: {
        tense: 'Present - Regular',
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
            }]
        },
    presStem: {
        tense: 'Present - Stem-Changing',
        info: "Some verbs change their form. These are known as stem-changing verbs.",
        types: [
            {
                type: 'Present - Stem-Changing Verbs',
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
            }]
        },
    presIrr: {
        tense: 'Present - Irregular',
        info: "Verb endings change depending on who is performing the action.",
        types: [
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
        }
    }