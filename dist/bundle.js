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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module 'babel-preset-react' from '/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers'\\n- If you want to resolve \\\"react\\\", use \\\"module:react\\\"\\n- Did you mean \\\"@babel/react\\\"?\\n    at Function.module.exports [as sync] (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/resolve/lib/sync.js:74:15)\\n    at resolveStandardizedName (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/files/plugins.js:101:31)\\n    at resolvePreset (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/files/plugins.js:58:10)\\n    at loadPreset (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/files/plugins.js:77:20)\\n    at createDescriptor (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-descriptors.js:154:9)\\n    at items.map (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-descriptors.js:109:50)\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\\n    at createPresetDescriptors (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-descriptors.js:101:10)\\n    at passPerPreset (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-descriptors.js:58:96)\\n    at cachedFunction (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/caching.js:32:19)\\n    at presets.presets (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-descriptors.js:29:84)\\n    at mergeChainOpts (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-chain.js:320:26)\\n    at /Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-chain.js:283:7\\n    at buildRootChain (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/config-chain.js:68:29)\\n    at loadPrivatePartialConfig (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/partial.js:85:55)\\n    at Object.loadPartialConfig (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/@babel/core/lib/config/partial.js:110:18)\\n    at Object.<anonymous> (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/babel-loader/lib/index.js:144:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/babel-loader/lib/index.js:5:194)\\n    at /Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/babel-loader/lib/index.js:5:364\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/babel-loader/lib/index.js:5:97)\\n    at Object._loader (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/babel-loader/lib/index.js:224:18)\\n    at Object.loader (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/babel-loader/lib/index.js:60:18)\\n    at Object.<anonymous> (/Users/alyssawadley/Documents/GitHub/Alyssa_Reviews_And_Drawers/node_modules/babel-loader/lib/index.js:55:12)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);