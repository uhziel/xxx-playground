#!/usr/bin/env node

console.log('start setTimeout()');
const cur = process.hrtime.bigint();
setTimeout(() => {
    const diff = process.hrtime.bigint() - cur;
    console.log(`hello, world. after ${diff} nanoseconds.`);
}, 3000);
