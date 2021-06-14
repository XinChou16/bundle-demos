System.register([], function () {
  'use strict';
  return {
    execute: function () {
      function add(a, b) {
        return a + b;
      }

      const result = add(1, 2);

      console.log(result);
    },
  };
});
