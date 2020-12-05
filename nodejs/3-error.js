#!/usr/bin/env node

const e = new Error('diy error description');

console.log('e: ', e);
console.log('e.name: ', e.name);
console.log('e.message: ', e.message);
console.log('e.stack: ', e.stack);

setTimeout(() => {
  console.log("timer finished.")
}, 1000);

function testTryCatch(throwError) {
  if (throwError) {
    console.log('======== throw an error ========');
  } else {
    console.log('======== no error ========');
  }
  
  try {
    console.log('testTryCatch try block 1');
    if (throwError) {
      throw e;
    }
    console.log('testTryCatch try block 2');
  } catch (e) {
    console.log('testTryCatch catch block');
  } finally {
    console.log('testTryCatch finally block');
  }
  
  console.log('testTryCatch leave try-catch');  
}

testTryCatch(true);
testTryCatch(false);
