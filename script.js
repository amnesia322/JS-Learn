let routeDistance = 78;
let averageSpeed = 80;

let routeTime = Math.round((routeDistance * 1.6) / averageSpeed);

// Условия. подсчет времени прогулки 

let optimalTime = 80;
let walkTime = 20;
let timeLeft;

if (walkTime >= optimalTime) {
   timeLeft = 0;
} else {
   timeLeft = optimalTime - walkTime;
}
console.log('Осталось гулять ещё ' + timeLeft + ' минут.');


// Условия. Логические "И", "Или"

let enoughDevelopers = false;
let techAvailable = false;
let onVacation = true;
let onSickLeave = true;

if (enoughDevelopers && techAvailable) {
   console.log('Проект можно выполнить');
}

if (!onVacation) {
   console.log('Никого нет в отпуске');
} else {
   console.log('Кто-то в отпуске');
}

if (!onSickLeave) {
   console.log('Никого нет на больничном');
} else {
   console.log('Кто-то на больничном');
}

// тест по условиям 

let temperature = 20;
let isRaining = true;
let minutes = 0;

if (isRaining || temperature < 10 || temperature > 35) {
   minutes = 0;
} else if (temperature >= 10 && temperature < 15) {
   minutes = 30;
} else if (temperature >= 15 && temperature < 25) {
   minutes = 40;
} else if (temperature >= 25 && temperature <= 35) {
   minutes = 20;
}

// FizzBuzz

let number = 15;
let taskResult;

let divisionThree = number % 3;
let divisionFive = number % 5;

if (!divisionThree && !divisionFive) {
   taskResult = 'FizzBuzz';
} else if (!divisionThree) {
   taskResult = 'Fizz';
} else if (!divisionFive) {
   taskResult = 'Buzz';
} else {
   taskResult = number;
};

