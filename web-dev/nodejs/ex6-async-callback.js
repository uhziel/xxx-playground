#!/usr/bin/env node

console.log('start setTimeout()');
const startedAt = process.hrtime.bigint();
setTimeout(() => {
    const diff = process.hrtime.bigint() - startedAt;
    console.log(`hello, world. after ${diff} nanoseconds.`);
}, 3000);
