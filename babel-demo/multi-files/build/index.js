"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var foo = function foo() {
  return 12;
};

var Fruit =
/*#__PURE__*/
function () {
  function Fruit(fruit) {
    (0, _classCallCheck2["default"])(this, Fruit);
    this.fruit = fruit;
  }

  (0, _createClass2["default"])(Fruit, [{
    key: "delay",
    value: function delay() {
      return new _promise["default"](function (resolve) {
        resolve();
      });
    }
  }]);
  return Fruit;
}();