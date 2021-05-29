#!/usr/bin/env node

// https://developer.mozilla.org/en-US/docs/Web/API/Console#usage
// 其他类似但严重级别不一样的
// console.error() chrome errors。会显示堆栈。
// console.warn() chrome warnings。会显示堆栈。
// console.info() chrome info。console.log 也是这个级别。不会显示堆栈。
// console.debug() chrome verbose。不会显示堆栈。在 chrome 中需要勾选显示 verbose 才会显示 debug 的内容
console.log('hello, world');

const var1 = 'abc';
const var2 = {foo: 'bar'};

// console.log(obj1 [, obj2, ..., objN]);
// you can pass in a list of objects whose string representations get concatenated into one string, then output to the console
console.log(var1, var2);
console.log('hello,', var2);

// console.log(msg [, subst1, ..., substN]);
// 支持的 substitution strings：
// %o object
// %d digit(integer)
// %s string
// %f float
console.log('hello, %s x %d', 'world', 3);
console.log('hello, %s x %d', 'world', 3, var2);

// timer
console.time('sleep time');
console.timeLog('sleep time');
console.timeEnd('sleep time');

// trace
function foo() {
    function bar() {
        console.trace();
    }
    bar();
}

foo();
