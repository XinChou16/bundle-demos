(function () {
  'use strict';

  function add(a, b) {
    return a + b;
  }

  function foo() {
    console.log('result is %n', add(10, 90));
  }

  foo();
})();
