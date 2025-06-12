/*
 * Return Type
 * Void
 * Never
 * Function Type
 * Optional parameters
 */

//* Return Type
// function sum(a: number, b: number) {
//   return a + b;
// }

// const result = sum(10, 20);

// console.log(result);

/*
TODO: Реалізуйте функцію getBooksTitles(books),
TODO: яка буде приймати до параметру books масив книг,
TODO: а повертати буде масив із назвами книг.
*/
// type Book = {
//   title: string;
//   description: string;
//   rating: number;
// };

// const books = [
//   {
//     title: 'JS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
//   {
//     title: 'HTML',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 8.5,
//   },
//   {
//     title: 'CSS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
// ];

// const getBooksTitles = function (books: Book[]) {};

// console.log(getBooksTitles(books));

//* Void
// function greet(firstName: string, lastName: string) {
//   console.log(`Welcome ${firstName} ${lastName}`);
// }

// greet('Jorge', 'Moran');

//* Never
// function generateError(message: string) {
//   throw new Error(message);
// }

// try {
//   generateError('error');
// } catch (err) {
//   console.log(err);
// }

//* Function Type
// function numbersMap(items, cb) {
//   const newArr = [];

//   for (const item of items) {
//     newArr.push(cb(item));
//   }

//   return newArr;
// }

// const result = numbersMap([1, 2, 3, 4], el => {
//   return el * 2;
// });

// console.log(result);

//* Optional parameters
/*
TODO: Створіть функцію greetUser(firstName, lastName), яка буде вітати користувача.
TODO: Очікується, що функцію можуть викликати з двома, одним аргументом або без аргументів.
TODO: Функція виводить до консолі:
TODO:   - Якщо 2 аргументи, 'Welcome {{firstName}} {{lastName}}'
TODO:   - Якщо 1 аргумент, 'Welcome {{firstName}}'
TODO:   - Якщо без аргументів, 'Welcome anonymus'
*/
