const pug = require('pug');

const compiledFunction = pug.compileFile('hello.pug');

console.log(compiledFunction({name: 'zhulei'}));

console.log(compiledFunction({name: 'world'}));
