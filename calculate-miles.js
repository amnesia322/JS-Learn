let calculateMiles = function (distance, isBusinessClass) {
   let percent = 0.18;
   if (isBusinessClass) {
      percent += 0.04;
   }
   if (distance > 3500) {
      percent += 0.15;
   }
   return distance * percent;
};

let calculateFlights = function (distance, isBusinessClass, milesTarget) {
   let miles = calculateMiles(distance, isBusinessClass);
   let flights = Math.ceil(milesTarget / miles);
   return flights;
};

let targets = [3000, 7500, 15000];
for (let i = 0; i <= targets.length - 1; i++) {
   let flightsVariantFirst = calculateFlights(3118, true, targets[i]);
   let flightsVariantSecond = calculateFlights(3617, false, targets[i]);

   console.log('Необходимое количество полётов в бизнес-классе до Валенсии: ' + flightsVariantFirst);
   console.log('Необходимое количество полётов в экономе до Лиссабона: ' + flightsVariantSecond);

   if (flightsVariantFirst > flightsVariantSecond) {
      console.log('Быстрей накопишь полётами в экономе до Лиссабона! Количество полётов: ' + flightsVariantSecond);
   } else {
      console.log('Быстрей накопишь полётами в бизнесе до Валенсии! Количество полётов: ' + flightsVariantFirst);
   }
}



// Расчет ЗП

let calculateSalary = function (salary) {
   let percent = 0.35;
   if (salary >= 100000) {
      percent = 0.45;
   }
   return salary - salary * percent;
};


//Расчет стоимости проекта 

let getPrice = function (time, isQuickly) {
   let rate = 1500;
   if (isQuickly) {
      rate *= 2.5;
      time /= 2;
   }
   if (time > 150) {
      rate -= 250;
   }
   return time * rate;
};



