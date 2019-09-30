'use strict';

var lodash = require('lodash');

const foo = lodash.throttle(() => {
  console.log(999);
}, 1000);

foo();
console.log('Hello world');
