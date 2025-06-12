/*
 * Скалярні типи:
 * - boolean
 * - number
 * - string
 * - null and undefined
 *
 * Складні типи:
 * - object
 * - array
 */

//* Скалярні типи для змінних:
/*
TODO: Оголоси змінні з наступними типами:
TODO:   - рядок;
TODO:   - число;
TODO:   - бульове значення;
TODO:   - nul та undefined.
*/

// let firstName: string = 'Oleksii';
// let pricePerItem: number = 10000;
// let isOpen: boolean = true;
// let empty: null = null;
// let notValue: undefined = undefined;

//* Типізація параметрів функції:
/*
TODO: Створи функцію showMessage(firstName, lastName, age).
TODO: Функція виводить до консолі повідомлення: "{{firstName}} {{lastName}} is {{age}} years old."
TODO: Типізуй параматери функції:
TODO:   - firstName, рядок;
TODO:   - lastName, рядок;
TODO:   - age, число.
*/

// function showMessage(firstName: string, lastName: string, age: number) {
//   console.log(`${firstName} ${lastName} is ${age} years old`);
// }

// showMessage('Ryan', 'Hansen', 20);

//* Складні типи.
//~ object.
/*
TODO: Типізуй обʼєкт bookHTML.
*/

// const bookHTML: {
//   title: string;
//   description: string;
//   rating: number;
// } = {
//   title: 'HTML',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//   rating: 8.5,
// };

// bookHTML.title = 'CSS';

/*
TODO: Типізуй параметр функції showBookInfo(book).
TODO: Функція виводить інформацію по книзі.
*/

// type Book = { title: string; description: string; rating: number };

// function showBookInfo(book: Book) {
//   console.group('Book info:');
//   console.log(`Title: ${book.title}`);
//   console.log(`Description: ${book.description}`);
//   console.log(`Rating: ${book.rating}`);
//   console.groupEnd();
// }

// showBookInfo({
//   title: 'JS',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//   rating: 9,
// });

// showBookInfo({
//   title: 'HTML',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//   rating: 8.5,
// });

//~ array
//TODO: Типізуй масив temperature.
// const temperature: number[] = [10, 15, 12.5, 13];

//TODO: Типізуй масив property.
// const property: (string | number)[] = ['rating', 10];

//TODO: Типізуй масив обʼєктів books.
// type Book = { title: string; description: string; rating: number };

// const books: Book[] = [
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

/*
TODO: Типізуй параметр books в функції getBooksTitles(books).
*/
// type Book = { title: string; description: string; rating: number };

// function getBooksTitles(books: Book[]) {
//   return books.map(book => book.title);
// }

// console.log(
//   getBooksTitles([
//     {
//       title: 'JS',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//       rating: 9,
//     },
//     {
//       title: 'HTML',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//       rating: 8.5,
//     },
//     {
//       title: 'CSS',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//       rating: 9,
//     },
//   ])
// );
