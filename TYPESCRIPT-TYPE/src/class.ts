class Person {
  constructor(public name: string, protected age: number) {}
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

class Teacher extends Person {
  get subject(): string {
    if (!this._subject) {
      throw new Error('There is no subject.');
    }
    return this._subject;
  }
  set subject(value) {
    if (!value) {
      throw new Error('There is no subject.');
    }
    this._subject = value;
  }
  constructor(name: string, age: number, public _subject: string) {
    super(name, age);
  }
  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}
const teacher = new Teacher('Quill', 38, 'Math');
teacher.subject = 'Music';
console.log(teacher.subject);
teacher.greeting();
