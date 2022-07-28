let expectedUsers = 1000;

let firstDayUsers = 812;
let secondDayUsers = 1360;
let thirdDayUsers = 657;


// Рассчитываем среднее значение посещаемости
let averageUsers = (firstDayUsers + secondDayUsers + thirdDayUsers) / 3;
console.log('Средняя посещаемость: ' + averageUsers);
if (averageUsers > expectedUsers) {
   console.log('Посещаемость великолепна. Продолжай в том же духе!');
}
else {
   console.log('Посещаемость так себе. Нужно поднапрячься!');
}