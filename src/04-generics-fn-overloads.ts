/*
 * Function overloads
 * Generics
 */

//* Function overloads
/*
TODO: Створи функцію createMessage, яка:
TODO:   - Приймає ім’я (string) → повертає “Hello, [name]!”
TODO:   - Приймає ім’я і вік (string, number) → повертає “Hello, [name]! You are [age] years old.”
*/

// function createMessage(firstName: string): string;
// function createMessage(firstName: string, userAge: number): string;
// function createMessage(firstName: string, userAge?: number | undefined): string {
//   if (userAge !== undefined) {
//     return `Hello, ${firstName}! You are ${userAge} years old.`;
//   }

//   return `Hello, ${firstName}!`;
// }

// console.log(createMessage('Jordan'));
// console.log(createMessage('Jordan', 30));

/*
TODO: Створи функцію log, яка:
TODO:   - Приймає рядок — просто виводить його.
TODO:   - Приймає рядок та число — виводить рядок, повторений n разів.
*/

// function log(str: string): void;
// function log(str: string, repeaterCounter: number): void;
// function log(str: string, repeaterCounter?: number | undefined): void {
//   if (repeaterCounter !== undefined) {
//     console.log(str.repeat(repeaterCounter));
//   } else {
//     console.log(str);
//   }
// }

// log('Hello');
// log('Hi', 3);

/*
TODO: Створи функцію formatDate, яка може приймати:
TODO:   - Об'єкт Date — повертає рядок у форматі "YYYY-MM-DD"
TODO:   - Три числа — рік, місяць (1-12), день — і теж повертає форматований рядок
*/

// function formatDate(date: Date): string;
// function formatDate(fullYear: number, month: number, day: number): string;
// function formatDate(dateOrYear: number | Date, month?: number | undefined, day?: number | undefined): string {
//   if (dateOrYear instanceof Date) {
//     return `${dateOrYear.getFullYear()}-${String(dateOrYear.getMonth() + 1).padStart(2, '0')}-${String(
//       dateOrYear.getDate()
//     ).padStart(2, '0')}`;
//   }

//   return `${dateOrYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
// }

// console.log(formatDate(new Date(2025, 0, 7)));
// console.log(formatDate(2025, 1, 7));

//* Generics
/*
TODO: Реалізуйте дженерик last(items), який повертає останній елемент масиву.
*/

// function last<T>(items: T[]): T {
//   return items[items.length - 1];
// }

// console.log(last<number>([3, 2])); // 2
// console.log(last<string>(['hello', 'world'])); // world

/*
TODO: Створи дженерик-функцію swap(a, b), яка повертає кортеж з елементами у зворотному порядку.
*/

// function swap<T, U>(propA: T, propB: U): [U, T] {
//   return [propB, propA];
// }

// console.log(swap('apple', 10)); // [10, 'apple']
// console.log(swap('isAdmin', true)); // [true, 'isAdmin']

/*
TODO: Типізуй функцію updateUser(user, dataForUpdate), яка онавлює дані користувача.
*/
// type User = {
//   id: number;
//   firstName: string;
//   email: string;
//   isAdmin: boolean;
// };

// type UserForUpdate = Partial<User>;

// function updateUser(user: User, dataForUpdate: UserForUpdate): User {
//   return {
//     ...user,
//     ...dataForUpdate,
//   };
// }

// console.log(
//   updateUser(
//     {
//       id: 1,
//       firstName: 'Lizzie',
//       email: 'sijev@ve.ro',
//       isAdmin: false,
//     },
//     { email: 'paiw@azoehiisi.bw' }
//   )
// );

// console.log(
//   updateUser(
//     {
//       id: 2,
//       firstName: 'Wayne',
//       email: 'wayne@ve.ro',
//       isAdmin: false,
//     },
//     { firstName: 'Oleksii' }
//   )
// );

/*
TODO: Є тип Employee, який описує обʼєкт співробітника.
TODO: Створи тип PublicEmployee, який включає лише id, fullName та email.
TODO: Типізуйте функцію getPublicEmployee(employee), яка буде приймати обʼєкт типу Employee,
TODO: а повертати обʼєкт типу PublicEmployee;
*/

// type Employee = {
//   id: number;
//   fullName: string;
//   email: string;
//   salary: number;
// };

// type PublicEmployee = Pick<Employee, 'id' | 'fullName' | 'email'>;

// function getPublicEmployee(employee: Employee): PublicEmployee {
//   const { salary, ...publicEmployee } = employee;

//   return publicEmployee;
// }

// console.log(
//   getPublicEmployee({
//     id: 1,
//     fullName: 'Kate Green',
//     email: 'kate@mail.com',
//     salary: 100000,
//   })
// );
