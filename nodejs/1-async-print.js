#!/usr/bin/env node

function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(msg, ms) {
  console.log('waiting');
  await timeout(ms);
  console.log(msg);
}

asyncPrint('hello, world', 3000);
