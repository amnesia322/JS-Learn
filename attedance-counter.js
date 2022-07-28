let expectedUsers = 1000;

let usersByDay = [817, 1370, 752, 1247, 681, 1120, 915, 1281, 875, 1341, 757, 610, 812, 1170, 769, 1261, 845, 1289, 515, 1247, 845, 1311, 741, 1239, 812, 638, 877, 1242, 1159, 1372];

// Суммируем посещаемость
let totalUsers = 0;

let totalUsers = 0;
let minUsers = expectedUsers - 100;
let badDays = [];

for (let i = 0; i <= usersByDay.length - 1; i++) {
   totalUsers += usersByDay[i];
   if (usersByDay[i] < minUsers) {
      badDays[i] = expectedUsers - usersByDay[i];
   } else {
      badDays[i] = 0;
   }
}

// Рассчитываем среднее значение посещаемости
let averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
   console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
   console.log('Посещаемость так себе. Нужно поднапрячься!');
}
