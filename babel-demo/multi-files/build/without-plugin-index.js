"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var foo = function foo() {
  return 12;
};

var Fruit =
/*#__PURE__*/
function () {
  function Fruit(fruit) {
    _classCallCheck(this, Fruit);

    this.fruit = fruit;
  }

  _createClass(Fruit, [{
    key: "delay",
    value: function delay() {
      return new Promise(function (resolve) {
        resolve();
      });
    }
  }]);

  return Fruit;
}();