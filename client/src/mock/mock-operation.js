export const Opera = {
    'mandatory' : true,
    'content': 'Opération',
    'children' : [
        {
            'key': 'amount',
            'content': 'Montant',
            'mandatory': true,
            'level': 0,
            'code': 'OP-montant',
            'justif': true,
            'unique': true,
            'menu': null,
            'textField': true,
        },
        {
            'key': 'strat',
            'content': 'Stratégie',
            'mandatory': true,
            'level': 0,
            'code': 'OP-strat',
            'justif': true,
            'unique': true,
            'menu': null,
            'textField': false,
        },
        {
            'key': 'sensi',
            'content': 'Sensibilité',
            'mandatory': false,
            'level': 0,
            'code': 'OP-sensi',
            'justif': true,
            'unique': true,
            'menu': null,
            'textField': false,
        },
        {
            'key': 'juri',
            'content': "Bases juridiques de l'égibilité",
            'mandatory': true,
            'level': 0,
            'code': 'OP-bases',
            'justif': true,
            'unique': true,
            'menu': null,
            'textField': false,
        },
        {
            'key': 'essentiel',
            'content': "Caractère essentiel de l'activité",
            'mandatory': false,
            'level': 0,
            'code': 'OP-bases',
            'justif': true,
            'unique': true,
            'menu': null,
            'textField': false,
        },
    ],
};