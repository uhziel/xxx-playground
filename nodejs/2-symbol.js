#!/usr/bin/env node

let s1 = Symbol('foo');
let s2 = Symbol('foo');

console.log('s1 === s2 <- ', s1 === s2);
console.log('s1: ', s1);
console.log('s1.toString(): ', s1.toString());
console.log('s1.description: ', s1.description); //ES2019

let o = {
  [s1]: 'apple',
  [s2]() {
    return 1;
  }
}

console.log('o: ', o);
console.log('o[s2]()', o[s2]());
