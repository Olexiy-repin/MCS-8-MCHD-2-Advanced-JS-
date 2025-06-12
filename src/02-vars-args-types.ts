/*
 * Типи для змінних та аргументів
 *
 * Any
 * Unknown
 * Tuple
 * Enum
 * Union Type
 * Intersection Type
 * Literal Type
 */

//* Any
// let someValue: any = 'Hello';

// someValue = 100;
// someValue = true;

//* Unknown
// let someValue: unknown = ' Hello World! ';

// if (typeof someValue === 'string') {
//   console.log(someValue.trim());
// }

// someValue = 100;
// someValue = true;

/*
TODO: Реалізуйте функцію logObject(value), яка перевіряє, чи є передане значення об'єктом.
TODO: Якщо передали обʼєкт, то функція виводить його властивості до консолі.
*/
// function logObject(value: unknown) {
//   if (value instanceof Object) {
//     for (const key in value) {
//       console.log(`${key}:${value[key]}`);
//     }
//   }
// }

// logObject(1);
// logObject('hello');
// logObject({ title: 'keyboard', price: 1000 });
// logObject({ username: 'mango' });

//* Tuple
//TODO: Типізуй масив userCoordinates за допомогою кортежів.
// const userCoordinates: [number, number] = [10, 20];

/*
TODO: Створіть тип Point, який описує кортеж, що складається з трьох координат: x, y, z.
TODO:
TODO: Реалізуйте функцію isTheSamePoint(firstPoint, secondPoint), яка перевіряє дві точки на їхнє однакове розташування.
TODO: Дві точки збігаються, якщо збігаються всі їхні координати:
*/

// type Point = [number, number, number];

// function isTheSamePoint(firstPoint: Point, secondPoint: Point) {
//   return JSON.stringify(firstPoint) === JSON.stringify(secondPoint);
// }

// console.log(isTheSamePoint([1, 3, 4], [1, 3, 4])); // true
// console.log(isTheSamePoint([1, 3, 4], [0, 8, 4])); // false

//* Enum
/*
TODO: Реалізуйте enum ModalStatus із двома значеннями: Opened та Closed
TODO:
TODO: Реалізуйте функцію buildModal(text, status). Вона повертає об'єкт, що описує модальне вікно.
TODO: Параметри функції:
TODO: - text (текст, який має бути всередині вікна після ініціалізації);
TODO: - status (статус, з яким потрібно створити об'єкт вікна).
TODO:
TODO: Функція повертає об'єкт із двома полями: text (тут зберігається переданий текст) та status (тут зберігається переданий статус)
*/

// enum ModalStatus {
//   Opened = 'opened',
//   Closed = 'closed',
// }

// console.log(ModalStatus);

// function buildModal(text: string, status: ModalStatus) {
//   return {
//     text,
//     status,
//   };
// }

// console.log(buildModal('Some text for modal', ModalStatus.Opened));

//* Union Type
// let numOrStr: string | number = '  1000  ';

/*
TODO: Реалізуйте функцію lastIndex(str, char), яка повертає індекс останнього входження символу в рядок або null,
TODO: якщо такого символу немає.
*/
// function lastIndex(str: string, char: string) {
//   const lastIndexOfStr: number = str.lastIndexOf(char);

//   return lastIndexOfStr !== -1 ? lastIndexOfStr : null;
// }

// const result1: number | null = lastIndex('test', 't');
// const result2: number | null = lastIndex('test', 'p');

// console.log(result1); // 3
// console.log(result2); // null

//* Intersection Type
/*
TODO: Реалізуйте тип Admin, який є перетином типів AdminPermission та User.
TODO: Реалізуйте функцію addAdmin(user), яка приймає значення з типом User і повертає значення з типом Admin.
TODO: Як значення властивості permission повинно бути значення Permission.Read.
*/

// enum Permission {
//   Read,
//   Write,
//   Delete,
// }

// type User = {
//   login: string;
// };

// type AdminPermission = {
//   permission: Permission;
// };

// type Admin = User & AdminPermission;

// function addAdmin(user: User) {
//   const newAdmin: Admin = {
//     ...user,
//     permission: Permission.Read,
//   };

//   return newAdmin;
// }

// const admin = addAdmin({ login: 'login1' });

// console.log(admin);

//* Literal Type
/*
TODO: Опишіть літеральний тип для змінної orderStatus, яка може містити тільки такі значення:
TODO: 'Created', 'Paid', 'Shipped', 'Delivered';
*/

// let orderStatus: 'Created' | 'Paid' | 'Shipped' | 'Delivered' = 'Paid';

// orderStatus = 'Created';
// orderStatus = 'Delivered';
// orderStatus = 'Shipped';
