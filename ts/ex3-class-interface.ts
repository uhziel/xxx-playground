interface Animal {
  name(): string;
}

class Dog implements Animal {
  foo: string;
  constructor() {
    this.foo = '123';
  }
  name() {
    return 'Dog' + this.foo;
  }
}

class Chicken implements Animal {
  foo: string;
  constructor() {
    this.foo = '456';
  }
  name() {
    return 'Chicken' + this.foo;
  }
}

let a1: Animal = new Dog();
let a2: Animal = new Chicken();

console.log(a1.name());
console.log(a2.name());
