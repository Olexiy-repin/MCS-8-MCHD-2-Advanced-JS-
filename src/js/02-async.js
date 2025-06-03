/*
 * Синтаксис async/await
 * try...catch
 */

// console.log('Start');

// const foo = async () => {
//   try {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Done!');
//       }, 2000);
//     });

//     const result = await promise;

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// foo();

// console.log('End');

//TODO: Запит за книгами і обробка відповіді через async/await
// const fetchBooks = async () => {
//   try {
//     const response = await fetch('https://68388def2c55e01d184db28c.mockapi.io/bks');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.dir(err);
//   }
// };

// fetchBooks();

//TODO: Запит за книгами і обробка відповіді через async/await та then()/catch()
// const fetchBooks = async () => {
//   const response = await fetch('https://68388def2c55e01d184db28c.mockapi.io/books');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// fetchBooks()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//TODO: Запит за книгами і обробка відповіді через async/await на верхньому рівні модуля
// const fetchBooks = async () => {
//   const response = await fetch('https://68388def2c55e01d184db28c.mockapi.io/books');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// try {
//   const data = await fetchBooks();

//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

//TODO: Є «звичайна» функція foo. Як можна всередині неї отримати результат виконання async-функції без використання оператора await?
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   return response.json();
// };

// const foo = () => {
//   // ...що тут написати?
//   // щоб викликати fetchPosts() і дочекатися результату від async-функції
//   // не забувайте, тут не можна використовувати "await"

//   fetchPosts()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// foo();
