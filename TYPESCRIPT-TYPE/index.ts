let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello: string;
hello = 'hello';

const person = {
  name: {
    first: 'Jack',
    last: 'Smith',
  },
  age: 21,
};
const fruits = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fjiafjaj = 'faijfi';
let banana = 'banana';
banana = anything;
