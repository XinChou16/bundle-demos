(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  function add(a, b) {
    return a + b;
  }

  const result = add(1, 2);

  console.log(result);
});
