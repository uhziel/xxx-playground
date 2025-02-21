#!/usr/bin/env node

function timerPromise(timeout) {
    return new Promise((resolve, reject) => {
        console.log('Promise exec');
        const startedAt = process.hrtime.bigint();
        setTimeout(resolve, timeout, startedAt);
    });
}

const timer = timerPromise(3000);

timer.then((startedAt) => {
    const diff = process.hrtime.bigint() - startedAt;
    console.log(`hello, world. after ${diff} nanoseconds.`);
});
