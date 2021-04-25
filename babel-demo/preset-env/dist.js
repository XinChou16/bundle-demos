"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.includes");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _a = _interopRequireDefault(require("./a"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
var _default = _a["default"];
exports["default"] = _default;
var foo;
foo = 10 + _a["default"]; // class Foo {
//     constructor() {
//     }
//     bar() {}
// }

var isInclude = foo.includes(1);
var d = Array.of();
var c = new Promise();
