/*
TODO: Виконуй завдання в декілька етапів.
TODO:
TODO: 1 Завдання.
TODO: Створи клас User, який має:
TODO:   - поля: firstName: string, email: string
TODO:   - метод: getInfo(): string, який повертає рядок "Name: {firstName}, Email: {email}"
TODO:
TODO: 2 Завдання.
TODO: Зроби поле email приватним. Додай:
TODO:   - гетер getEmail();
TODO:   - сетер setEmail(newEmail: string);
TODO:
TODO: 3 Завдання.
TODO: Створи клас Admin, що наслідує User, і додає:
TODO:   - поле role: string;
TODO:   - перевизначений метод getInfo(), який додає "Role: {role}".
*/

class User {
  public firstName: string;
  protected _email: string;

  constructor(firstName: string, email: string) {
    // this = {};
    this.firstName = firstName;
    this._email = email;
    // return this;
  }

  public getInfo(): string {
    return `Name: ${this.firstName}, Email: ${this._email}`;
  }

  get email() {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }
}

class Admin extends User {
  public role: string = 'admin';

  constructor(firstName: string, email: string) {
    super(firstName, email);
  }

  public getInfo(): string {
    return super.getInfo() + `, Role: ${this.role}`;
  }
}

const admin1 = new Admin('AdminOleksii', 'adminOleksii@gmail.com');

console.log(admin1);

console.log(admin1.getInfo());

// const user1 = new User('Oleksii', 'oleksii@gmail.com');

// console.log(user1);

// console.log(user1.email);

// user1.email = 'newOleksii@gmail.com';

// console.log(user1.email);
