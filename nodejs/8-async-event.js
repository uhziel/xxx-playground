#!/usr/bin/env node
const {EventEmitter} = require('events');

class Timer extends EventEmitter {
    constructor(timeout) {
        super();
        const startedAt = process.hrtime.bigint();
        setTimeout(() => {
            this.emit('end', startedAt);
        }, timeout);
    }
}

const timer = new Timer(3000);
timer.on('end', (startedAt) => {
    const diff = process.hrtime.bigint() - startedAt;
    console.log(`hello, world. after ${diff} nanoseconds.`);
});
