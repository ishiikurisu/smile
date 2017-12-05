function thinkOfAReason() {
    var selected = undefined;
    for (var options = getOptions(); selected === undefined; selected = getRandomFromList(options));
    return selected;
}

function getOptions() {
    return [
        'Tem alguém neste planeta que te ama!',
        'Você fica linda sorrido!',
        'Que tal comer alguma coisa gostosa?',
        'Tampe o nariz e diga "Dibiti Bobiti"',
        '<a href="https://gph.is/2cv3xQY">Este</a> GIF',
        'Tente fazer alguém feliz!',
        'Eu sei que você tem um pet fofo querendo atenção!',
        'Você ainda tem que encher seu porquinho!'
    ]
}

function getRandomFromList(list) {
    return list[Math.round((Math.random() * 100) % list.length)];
}

$(function() {
    reason.innerHTML = thinkOfAReason();
});
