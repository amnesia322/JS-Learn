
let gameRuleset = {
   diceNumber: 2,
   maxAttempts: 3
};

let firstCat = {
   name: 'Кекс',
   points: 0
};

let secondCat = {
   name: 'Рудольф',
   points: 0
};

let cats = [firstCat, secondCat];

let runGame = function (ruleset, players) {
   for (let i = 0; i < players.length; i++) {
      let throwResult = keks.throwDice(ruleset.diceNumber, ruleset.diceNumber * 6);
      players[i].points += throwResult;
      console.log(players[i].name + ' выбросил ' + players[i].points);
   }
   return players;
};

cats = runGame(gameRuleset, cats);
console.log(cats);