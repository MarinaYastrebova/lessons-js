// ------------------------------------------------ 1

// function each(array, callback) {
//   const newArray = [];
//   for (const item of array) {
//     newArray.push(callback(item));
//   }
//   return newArray;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

// ------------------------------------------------ 2

// const printContactsInfo = obj => {
//   const namesArr = obj.names.split(',');
//   const phonesArr = obj.phones.split(',');

//   namesArr.forEach((name, index) => {
//     console.log(`${name} = ${phonesArr[index]}`);
//   });
// };
// printContactsInfo({
//   names: 'F,B,C,D',
//   phones: '1,2,3,4',
// });

// ------------------------------------------------ 3

// ------------------------------------------------ 4

/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = (cars) => {
//     return cars.map((car) => car.model);
// }

// console.log(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// { make: "Honda", model: "CR-V", amount: 14, price: 24045 },

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((car) => {
//         return {
//             ...car,
//             price: car.price * (1 - discount)
//         }
//     })
// }

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

/*
 * Збільшуємо кількість годин гравця за id
 */
// const playerId = "player-3";

// const newPlayers = players.map((item) => {
//     if(item.id === playerId) {
//         return {
//             ...item,
//             timePlayed: item.timePlayed + 100
//         }
//     }

//     return item;
// })

// console.table(newPlayers);

// ------------------------------- 5

/**
 * Метод flatMap
 */

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.flatMap((tweet) => tweet.tags);

// console.log(tags);

// -------------------------------6

// const numbers = [5, 10, 15, 20, 25];

// const res = numbers.filter(item => item > 10);

// ----------------------------- 7
// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price < threshold);
// };
// console.log(filterByPrice(allCars, 30000));
// console.log(allCars);

// ---------------------------8
/**
 * Нехай функція getModelsOnSale повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */

// const getModelsOnSale = (arr) => {
//   return arr
//     .filter(car => car.onSale)
//     .map(car => car.model)
// }

// console.log(getModelsOnSale(allCars))

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */

// const getSortedCarsOnSale = (arr) => {
//   return arr
//     .filter(item => item.onSale)
//     .toSorted((a, b) => a.price - b.price)
// }

// console.table(getSortedCarsOnSale(allCars))
