const pug = require('pug');

const compiledFunction = pug.compileFile('hello.pug');

console.log(compiledFunction({name: 'zhulei'}));

console.log(compiledFunction({name: 'world'}));

console.log(pug.renderFile('hello.pug', {name: 'zhulei by renderFile()'}));
