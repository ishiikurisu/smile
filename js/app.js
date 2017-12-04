function pickForThem() {
    var options = getOptions();
    var element = document.getElementById('choice');
    var index = Math.round((Math.random() * 100) % options.length);
    var selected = options[index];

    while (selected === undefined) {
        index = Math.round((Math.random() * 100) % options.length);
        selected = options[index];
    }

    element.innerHTML = selected.title;
}

function getOptions() {
    return [
        {
            'title': 'macarrão',
            'price': 30
        },
        {
            'title': 'sushi',
            'price': 40
        },
        {
            'title': 'bomba',
            'price': 20
        },
        {
            'title': '\'burguer gourmet',
            'price': 40
        },
        {
            'title': 'australiano',
            'price': 60
        },
        {
            'title': 'coreano',
            'price': 60
        },
        {
            'title': 'self service',
            'price': 20
        },
        {
            'title': 'hot dog',
            'price': 15
        },
        {
            'title': 'chinês',
            'price': 20
        },
        {
            'title': 'o que você cozinhar',
            'price': 10
        },
        {
            'title': 'nada',
            'price': 0
        }
    ]
}
