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
        'Você ainda tem que encher seu porquinho de moedas!',
        'Seu pai é borracheiro? Porque você é uma graxinha!',
        'O seu chuveiro gosta de ouvir seu show particular.',
        'Já imaginou como é morar dentro de um cogumelo com os smurfs?',
        'Sabe se tem alguém jogando quadribol na sua cidade?',
        'Na teoria, sua idade é a mesma do universo, pois toda a matéria é a mesma desde o começo de tudo.',
        'Já considerou caminhar a Te Araroa?',
        'Acredite se quiser: os olhos de alguém brilham ao te ver.',
        'Faça um Origami de borboleta para dar para alguém que você gosta.',
        'E aquelas pessoas que são gratas por poder passar um tempinho contigo? '
    ]
}

function getRandomFromList(list) {
    return list[Math.round((Math.random() * 100) % list.length)];
}

$(function() {
    reason.innerHTML = thinkOfAReason();
});
