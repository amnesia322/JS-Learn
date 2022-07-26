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

// goToMarket 

let time = 15;

let goToDairy = false;
let goToStore = false;
let goToMarket = false;

if (time >= 8 && time < 13 || time >= 14 && time < 19) {
   goToDairy = true;
} else if (time >= 13 && time < 14) {
   goToStore = true;
} else if (time >= 7 && time < 20) {
   goToMarket = true;
}

//learn loops. Driver for Printer

let mode = 'pageCopy'; // Режим работы драйвера печати
let pageNumber = 5; // Номер копируемой страницы
let copyCount = 7; // Количество копий

if (mode === 'pageCopy') {
   for (let copies = 1; copies <= copyCount; copies++) {
      keks.print(pageNumber)
   }
}

if (mode === 'document') {
   for (let page = 1; page <= totalPages; page++) {
      keks.print(page);
   }
}

if (mode === 'reverse') {
   for (let reversePage = totalPages; reversePage >= 1; reversePage--) {
      keks.print(reversePage);
   }
}

if (mode === 'alternate') {
   for (let alternatePage = startPage; alternatePage <= totalPages; alternatePage += 2) {
      keks.print(alternatePage);
   }

   //adds for driver Printer 

   let totalPages = 6; // Всего страниц в документе

   let consumptionTotal = 0; // Общий расход тонера
   let consumptionPerPage = 70; // Расход краски на одну страницу
   let economyMode = false;

   for (let page = 1; page <= totalPages; page++) {
      keks.print(page);

      if (economyMode && page > 3) {
         consumptionTotal += consumptionPerPage * 0.5;
      } else {
         consumptionTotal += consumptionPerPage;
      }
      console.log(consumptionTotal);
   }



   //

   let sum = 0;

   for (let i = 1; i <= 10; i++) {

      if (i > 5) {
         sum += 2;
      } else {
         sum += i;
      }
      console.log('i: ' + i);
      console.log('sum: ' + sum);
   }
