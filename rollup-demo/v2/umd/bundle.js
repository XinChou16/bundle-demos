/* Xin@2021 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('lib/utils', factory) :
    (global = global || self, global.Utils = factory());
}(this, (function () { 'use strict';

    function add(a, b) {
        return a + b;
    }

    var main = {
        add
    };

    return main;

})));
