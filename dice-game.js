let diceNumber = 2;

let firstCatName = 'Кекс';
let firstCatPoints = 0;

let secondCatName = 'Рудольф';
let secondCatPoints = 0;

let runGame = function (quantity, firstPlayerName, firstPlayerPoints, secondPlayerName, secondPlayerPoints) {
   firstPlayerPoints += keks.throwDice(quantity, quantity * 6);
   secondPlayerPoints += keks.throwDice(quantity, quantity * 6);
   console.log(firstPlayerName + ' выбросил ' + firstPlayerPoints);
   console.log(secondPlayerName + ' выбросил ' + secondPlayerPoints);
};

runGame(diceNumber, firstCatName, firstCatPoints, secondCatName, secondCatPoints);
