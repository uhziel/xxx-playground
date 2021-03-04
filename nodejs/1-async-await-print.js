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

async function asyncLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log("asyncLoop ", i);
    await timeout(1000);
  }
}

asyncPrint('hello, world', 3000);
asyncLoop();
