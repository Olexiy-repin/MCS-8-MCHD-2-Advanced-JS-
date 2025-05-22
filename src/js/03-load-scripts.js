// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */
//TODO: Рішення через колбеки
// const loadScript = (scriptUrl, onSuccess, onError) => {
//   const script = document.createElement('script');

//   script.src = scriptUrl;

//   script.addEventListener('load', event => {
//     onSuccess(`${scriptUrl} завантажився успішно!`);
//   });

//   script.addEventListener('error', event => {
//     onError(`${scriptUrl} не завантажився!`);
//   });

//   document.head.append(script);
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);

//     loadScript(
//       'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
//       message => {
//         console.log(message);

//         loadScript(
//           'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           err => {
//             console.log(err);
//           }
//         );
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

//TODO: Рішення через проміси
const loadScript = scriptUrl => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = scriptUrl;

    script.addEventListener('load', event => {
      resolve(`${scriptUrl} завантажився успішно!`);
    });

    script.addEventListener('error', event => {
      reject(`${scriptUrl} не завантажився!`);
    });

    document.head.append(script);
  });
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(message => {
    console.log(message);

    return loadScript('https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js');
  })
  .then(message => {
    console.log(message);

    return loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
  })
  .then(message => {
    console.log(message);
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });
