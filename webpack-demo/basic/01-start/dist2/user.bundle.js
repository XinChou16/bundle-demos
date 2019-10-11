/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/index.js: Identifier directly after number (7:15)\\n\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m\\u001b[36mconst\\u001b[39m foo \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 7 | \\u001b[39m  console\\u001b[33m.\\u001b[39mlog(\\u001b[35m1\\u001b[39m_100_12)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m               \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m}\\u001b[0m\\n    at Parser.raise (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:6420:17)\\n    at Parser.readNumber (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:7335:12)\\n    at Parser.getTokenFromCode (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:7052:14)\\n    at Parser.nextToken (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:6630:12)\\n    at Parser.next (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:6559:10)\\n    at Parser.parseSubscript (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8658:12)\\n    at Parser.parseSubscripts (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8577:19)\\n    at Parser.parseExprSubscripts (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8566:17)\\n    at Parser.parseMaybeUnary (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8536:21)\\n    at Parser.parseExprOps (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8402:23)\\n    at Parser.parseMaybeConditional (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8375:23)\\n    at Parser.parseMaybeAssign (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8325:21)\\n    at Parser.parseExpression (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8275:23)\\n    at Parser.parseStatementContent (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:10138:23)\\n    at Parser.parseStatement (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:10009:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:10585:25)\\n    at Parser.parseBlockBody (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:10572:10)\\n    at Parser.parseBlock (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:10556:10)\\n    at Parser.parseFunctionBody (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:9584:24)\\n    at Parser.parseArrowExpression (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:9525:10)\\n    at Parser.parseParenAndDistinguishExpression (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:9157:12)\\n    at Parser.parseExprAtom (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8917:21)\\n    at Parser.parseExprSubscripts (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8556:23)\\n    at Parser.parseMaybeUnary (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8536:21)\\n    at Parser.parseExprOps (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8402:23)\\n    at Parser.parseMaybeConditional (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8375:23)\\n    at Parser.parseMaybeAssign (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:8325:21)\\n    at Parser.parseVar (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:10660:26)\\n    at Parser.parseVarStatement (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:10479:10)\\n    at Parser.parseStatementContent (/Users/user/dev-test/bundle-demos/webpack-demo/v4.0/01-commonChunk/node_modules/@babel/parser/lib/index.js:10076:21)\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });