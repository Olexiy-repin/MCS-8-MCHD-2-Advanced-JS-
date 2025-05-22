/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// console.log(promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .finally(() => {
//     console.log('preloader.stop()');
//   })
//   .then(result => {
//     console.log(promise);

//     console.log(result);

//     return 'Hello from 1 function';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log(err);
//   });

//TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); // 'error'
//   });
