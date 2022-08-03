let getStatistics = function (players) {
    let sumGoals = 0;
    for (let j = 0; j < players.length; j++) {
        sumGoals += players[j].goals;
    }
    for (let i = 0; i < players.length; i++) {
        let coefficient = players[i].goals * 2 + players[i].passes;
        players[i].coefficient = coefficient;
        let percent = Math.round(players[i].goals / (sumGoals / 100));
        players[i].percent = percent;
    }
    return players;
};

let footballs = [{"name":"Васька","goals":3,"passes":2},{"name":"Байт","goals":10,"passes":1},{"name":"Снежок","goals":2,"passes":14}];
console.log(getStatistics(footballs));
