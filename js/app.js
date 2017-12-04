function thinkOfAReason() {
    var selected = undefined;
    for (var options = getOptions(); selected === undefined; selected = getRandomFromList(options));
    return selected;
}

function getOptions() {
    return [
        'Tem alguém neste planeta que te ama!',
        'Você ainda tem que encher seu porquinho!'
    ]
}

function getRandomFromList(list) {
    return list[Math.round((Math.random() * 100) % list.length)];
}

$(function() {
    reason.innerHTML = thinkOfAReason();
});
