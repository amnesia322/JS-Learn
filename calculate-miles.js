let calculateMiles = function (distance) {
   let percent = 0.25;
   if (distance > 10500) {
      percent = 0.35;
   }
   let miles = distance * percent;
   console.log('За полёт получим ' + miles + ' миль');
};

calculateMiles(4125);
calculateMiles(11000);

// Расчет ЗП

let calculateSalary = function (salary) {
   let percent = 0.35;
   if (salary >= 100000) {
      percent = 0.45;
   }
   return salary - salary * percent;
};




