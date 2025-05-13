/*
 * Формат JSON
 *
 * - Метод JSON.stringify(value)
 * - Метод JSON.parse(value)
 * - Перетворення функцій
 */

//~ метод JSON.parse()
// const userJson = '{"firstName": "Oleksii", "age": 30}';

// const user = JSON.parse(userJson);

// console.log('userJson:', userJson);
// console.log('user:', user);

//~ метод JSON.stringify()
// const user = {
//   firstName: 'Oleksi',
//   age: 30,

//   getFirstName() {
//     return this.firstName;
//   },
// };

// const userJson = JSON.stringify(user);

// console.log('user:', user);
// console.log('userJson:', userJson);

// const users = [
//   {
//     firstName: 'Mason',
//     age: 30,
//   },
//   {
//     firstName: 'Ollie',
//     age: 20,
//   },
//   {
//     firstName: 'Irene',
//     age: 10,
//   },
// ];

// const usersJson = JSON.stringify(users);

// console.log('users:', users);
// console.log('usersJson:', usersJson);

/*
 * Конструкція try...catch для обробки помилок
 */

// console.log('Start');

// try {
//   const user = JSON.parse('{firstName: "Oleksii",}');
// } catch (err) {
//   console.log(err);
// }

// console.log('End');
