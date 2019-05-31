define(["@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ExampleRootPage.tsx":
/*!*****************************!*\
  !*** ./ExampleRootPage.tsx ***!
  \*****************************/
/*! exports provided: ExampleRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExampleRootPage\", function() { return ExampleRootPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}(); // Libraries\n\n\n\nvar TAB_ID_A = 'A';\nvar TAB_ID_B = 'B';\nvar TAB_ID_C = 'C';\n\nvar ExampleRootPage =\n/** @class */\nfunction (_super) {\n  __extends(ExampleRootPage, _super);\n\n  function ExampleRootPage(props) {\n    return _super.call(this, props) || this;\n  }\n\n  ExampleRootPage.prototype.componentDidMount = function () {\n    this.updateNav();\n  };\n\n  ExampleRootPage.prototype.componentDidUpdate = function (prevProps) {\n    if (this.props.query !== prevProps.query) {\n      if (this.props.query.tab !== prevProps.query.tab) {\n        this.updateNav();\n      }\n    }\n  };\n\n  ExampleRootPage.prototype.updateNav = function () {\n    var _a = this.props,\n        path = _a.path,\n        onNavChanged = _a.onNavChanged,\n        query = _a.query,\n        meta = _a.meta;\n    var tabs = [];\n    tabs.push({\n      text: 'Tab A',\n      icon: 'fa fa-fw fa-file-text-o',\n      url: path + '?tab=' + TAB_ID_A,\n      id: TAB_ID_A\n    });\n    tabs.push({\n      text: 'Tab B',\n      icon: 'fa fa-fw fa-file-text-o',\n      url: path + '?tab=' + TAB_ID_B,\n      id: TAB_ID_B\n    });\n    tabs.push({\n      text: 'Tab C',\n      icon: 'fa fa-fw fa-file-text-o',\n      url: path + '?tab=' + TAB_ID_C,\n      id: TAB_ID_C\n    }); // Set the active tab\n\n    var found = false;\n    var selected = query.tab || TAB_ID_B;\n\n    for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {\n      var tab = tabs_1[_i];\n      tab.active = !found && selected === tab.id;\n\n      if (tab.active) {\n        found = true;\n      }\n    }\n\n    if (!found) {\n      tabs[0].active = true;\n    }\n\n    var node = {\n      text: 'This is the Page title',\n      img: meta.info.logos.large,\n      subTitle: 'subtitle here',\n      url: path,\n      children: tabs\n    }; // Update the page header\n\n    onNavChanged({\n      node: node,\n      main: node\n    });\n  };\n\n  ExampleRootPage.prototype.render = function () {\n    var _a = this.props,\n        path = _a.path,\n        query = _a.query;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"QUERY: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, JSON.stringify(query)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: path + '?x=1'\n    }, \"111\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: path + '?x=AAA'\n    }, \"AAA\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: path + '?x=1&y=2&y=3'\n    }, \"ZZZ\"))));\n  };\n\n  return ExampleRootPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9FeGFtcGxlUm9vdFBhZ2UudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vRXhhbXBsZVJvb3RQYWdlLnRzeD83NWIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBBcHBSb290UHJvcHMsIE5hdk1vZGVsSXRlbSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQXBwUm9vdFByb3BzIHt9XG5cbmNvbnN0IFRBQl9JRF9BID0gJ0EnO1xuY29uc3QgVEFCX0lEX0IgPSAnQic7XG5jb25zdCBUQUJfSURfQyA9ICdDJztcblxuZXhwb3J0IGNsYXNzIEV4YW1wbGVSb290UGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVOYXYoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucXVlcnkgIT09IHByZXZQcm9wcy5xdWVyeSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMucXVlcnkudGFiICE9PSBwcmV2UHJvcHMucXVlcnkudGFiKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTmF2KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTmF2KCkge1xuICAgIGNvbnN0IHsgcGF0aCwgb25OYXZDaGFuZ2VkLCBxdWVyeSwgbWV0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRhYnM6IE5hdk1vZGVsSXRlbVtdID0gW107XG4gICAgdGFicy5wdXNoKHtcbiAgICAgIHRleHQ6ICdUYWIgQScsXG4gICAgICBpY29uOiAnZmEgZmEtZncgZmEtZmlsZS10ZXh0LW8nLFxuICAgICAgdXJsOiBwYXRoICsgJz90YWI9JyArIFRBQl9JRF9BLFxuICAgICAgaWQ6IFRBQl9JRF9BLFxuICAgIH0pO1xuICAgIHRhYnMucHVzaCh7XG4gICAgICB0ZXh0OiAnVGFiIEInLFxuICAgICAgaWNvbjogJ2ZhIGZhLWZ3IGZhLWZpbGUtdGV4dC1vJyxcbiAgICAgIHVybDogcGF0aCArICc/dGFiPScgKyBUQUJfSURfQixcbiAgICAgIGlkOiBUQUJfSURfQixcbiAgICB9KTtcbiAgICB0YWJzLnB1c2goe1xuICAgICAgdGV4dDogJ1RhYiBDJyxcbiAgICAgIGljb246ICdmYSBmYS1mdyBmYS1maWxlLXRleHQtbycsXG4gICAgICB1cmw6IHBhdGggKyAnP3RhYj0nICsgVEFCX0lEX0MsXG4gICAgICBpZDogVEFCX0lEX0MsXG4gICAgfSk7XG5cbiAgICAvLyBTZXQgdGhlIGFjdGl2ZSB0YWJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHF1ZXJ5LnRhYiB8fCBUQUJfSURfQjtcbiAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgICB0YWIuYWN0aXZlID0gIWZvdW5kICYmIHNlbGVjdGVkID09PSB0YWIuaWQ7XG4gICAgICBpZiAodGFiLmFjdGl2ZSkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHRhYnNbMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0ge1xuICAgICAgdGV4dDogJ1RoaXMgaXMgdGhlIFBhZ2UgdGl0bGUnLFxuICAgICAgaW1nOiBtZXRhLmluZm8ubG9nb3MubGFyZ2UsXG4gICAgICBzdWJUaXRsZTogJ3N1YnRpdGxlIGhlcmUnLFxuICAgICAgdXJsOiBwYXRoLFxuICAgICAgY2hpbGRyZW46IHRhYnMsXG4gICAgfTtcblxuXG5cbiAgICAvLyBVcGRhdGUgdGhlIHBhZ2UgaGVhZGVyXG4gICAgb25OYXZDaGFuZ2VkKHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBtYWluOiBub2RlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGF0aCwgcXVlcnkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgUVVFUlk6IDxwcmU+e0pTT04uc3RyaW5naWZ5KHF1ZXJ5KX08L3ByZT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPXtwYXRoICsgJz94PTEnfT4xMTE8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPXtwYXRoICsgJz94PUFBQSd9PkFBQTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9e3BhdGggKyAnP3g9MSZ5PTImeT0zJ30+WlpaPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFNQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ExampleRootPage.tsx\n");

/***/ }),

/***/ "./config/ExamplePage1.tsx":
/*!*********************************!*\
  !*** ./config/ExamplePage1.tsx ***!
  \*********************************/
/*! exports provided: ExamplePage1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExamplePage1\", function() { return ExamplePage1; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}(); // Libraries\n\n\n\n\nvar ExamplePage1 =\n/** @class */\nfunction (_super) {\n  __extends(ExamplePage1, _super);\n\n  function ExamplePage1(props) {\n    return _super.call(this, props) || this;\n  }\n\n  ExamplePage1.prototype.render = function () {\n    var query = this.props.query;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"11111111111111111111111111111111\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, JSON.stringify(query)), \"11111111111111111111111111111111\");\n  };\n\n  return ExamplePage1;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvRXhhbXBsZVBhZ2UxLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbmZpZy9FeGFtcGxlUGFnZTEudHN4PzczOWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gVHlwZXNcbmltcG9ydCB7IFBsdWdpbkNvbmZpZ1BhZ2VQcm9wcywgQXBwUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBQbHVnaW5Db25maWdQYWdlUHJvcHM8QXBwUGx1Z2luPiB7fVxuXG5leHBvcnQgY2xhc3MgRXhhbXBsZVBhZ2UxIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShxdWVyeSl9PC9wcmU+XG4gICAgICAgIDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/ExamplePage1.tsx\n");

/***/ }),

/***/ "./config/ExamplePage2.tsx":
/*!*********************************!*\
  !*** ./config/ExamplePage2.tsx ***!
  \*********************************/
/*! exports provided: ExamplePage2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExamplePage2\", function() { return ExamplePage2; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}(); // Libraries\n\n\n\n\nvar ExamplePage2 =\n/** @class */\nfunction (_super) {\n  __extends(ExamplePage2, _super);\n\n  function ExamplePage2(props) {\n    return _super.call(this, props) || this;\n  }\n\n  ExamplePage2.prototype.render = function () {\n    var query = this.props.query;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"22222222222222222222222222222222\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, JSON.stringify(query)), \"22222222222222222222222222222222\");\n  };\n\n  return ExamplePage2;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvRXhhbXBsZVBhZ2UyLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbmZpZy9FeGFtcGxlUGFnZTIudHN4PzRlZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gVHlwZXNcbmltcG9ydCB7IFBsdWdpbkNvbmZpZ1BhZ2VQcm9wcywgQXBwUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBQbHVnaW5Db25maWdQYWdlUHJvcHM8QXBwUGx1Z2luPiB7fVxuXG5leHBvcnQgY2xhc3MgRXhhbXBsZVBhZ2UyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMlxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShxdWVyeSl9PC9wcmU+XG4gICAgICAgIDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/ExamplePage2.tsx\n");

/***/ }),

/***/ "./legacy/angular_example_page.ts":
/*!****************************************!*\
  !*** ./legacy/angular_example_page.ts ***!
  \****************************************/
/*! exports provided: AngularExamplePageCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AngularExamplePageCtrl\", function() { return AngularExamplePageCtrl; });\nvar AngularExamplePageCtrl =\n/** @class */\nfunction () {\n  /** @ngInject */\n  function AngularExamplePageCtrl($scope, $rootScope) {\n    console.log('AngularExamplePageCtrl:', this);\n  }\n\n  AngularExamplePageCtrl.templateUrl = 'legacy/angular_example_page.html';\n  return AngularExamplePageCtrl;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sZWdhY3kvYW5ndWxhcl9leGFtcGxlX3BhZ2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sZWdhY3kvYW5ndWxhcl9leGFtcGxlX3BhZ2UudHM/OWM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQW5ndWxhckV4YW1wbGVQYWdlQ3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdsZWdhY3kvYW5ndWxhcl9leGFtcGxlX3BhZ2UuaHRtbCc7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJHJvb3RTY29wZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ0FuZ3VsYXJFeGFtcGxlUGFnZUN0cmw6JywgdGhpcyk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU1BO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./legacy/angular_example_page.ts\n");

/***/ }),

/***/ "./legacy/config.ts":
/*!**************************!*\
  !*** ./legacy/config.ts ***!
  \**************************/
/*! exports provided: ExampleConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExampleConfigCtrl\", function() { return ExampleConfigCtrl; });\nvar ExampleConfigCtrl =\n/** @class */\nfunction () {\n  /** @ngInject */\n  function ExampleConfigCtrl($scope, $injector) {\n    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this)); // Make sure it has a JSON Data spot\n\n    if (!this.appModel) {\n      this.appModel = {};\n    } // Required until we get the types sorted on appModel :(\n\n\n    var appModel = this.appModel;\n\n    if (!appModel.jsonData) {\n      appModel.jsonData = {};\n    }\n\n    console.log('ExampleConfigCtrl', this);\n  }\n\n  ExampleConfigCtrl.prototype.postUpdate = function () {\n    if (!this.appModel.enabled) {\n      console.log('Not enabled...');\n      return;\n    } // TODO, can do stuff after update\n\n\n    console.log('Post Update:', this);\n  };\n\n  ExampleConfigCtrl.templateUrl = 'legacy/config.html';\n  return ExampleConfigCtrl;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sZWdhY3kvY29uZmlnLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGVnYWN5L2NvbmZpZy50cz9hMmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdWdpbk1ldGEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBjbGFzcyBFeGFtcGxlQ29uZmlnQ3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdsZWdhY3kvY29uZmlnLmh0bWwnO1xuXG4gIGFwcEVkaXRDdHJsOiBhbnk7XG4gIGFwcE1vZGVsOiBQbHVnaW5NZXRhO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYW55KSB7XG4gICAgdGhpcy5hcHBFZGl0Q3RybC5zZXRQb3N0VXBkYXRlSG9vayh0aGlzLnBvc3RVcGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgaGFzIGEgSlNPTiBEYXRhIHNwb3RcbiAgICBpZiAoIXRoaXMuYXBwTW9kZWwpIHtcbiAgICAgIHRoaXMuYXBwTW9kZWwgPSB7fSBhcyBQbHVnaW5NZXRhO1xuICAgIH1cblxuICAgIC8vIFJlcXVpcmVkIHVudGlsIHdlIGdldCB0aGUgdHlwZXMgc29ydGVkIG9uIGFwcE1vZGVsIDooXG4gICAgY29uc3QgYXBwTW9kZWwgPSB0aGlzLmFwcE1vZGVsIGFzIGFueTtcbiAgICBpZiAoIWFwcE1vZGVsLmpzb25EYXRhKSB7XG4gICAgICBhcHBNb2RlbC5qc29uRGF0YSA9IHt9O1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdFeGFtcGxlQ29uZmlnQ3RybCcsIHRoaXMpO1xuICB9XG5cbiAgcG9zdFVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuYXBwTW9kZWwuZW5hYmxlZCkge1xuICAgICAgY29uc29sZS5sb2coJ05vdCBlbmFibGVkLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVE9ETywgY2FuIGRvIHN0dWZmIGFmdGVyIHVwZGF0ZVxuICAgIGNvbnNvbGUubG9nKCdQb3N0IFVwZGF0ZTonLCB0aGlzKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7QUFnQ0E7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./legacy/config.ts\n");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: ConfigCtrl, AngularExamplePageCtrl, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plugin\", function() { return plugin; });\n/* harmony import */ var _legacy_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy/config */ \"./legacy/config.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ConfigCtrl\", function() { return _legacy_config__WEBPACK_IMPORTED_MODULE_0__[\"ExampleConfigCtrl\"]; });\n\n/* harmony import */ var _legacy_angular_example_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy/angular_example_page */ \"./legacy/angular_example_page.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AngularExamplePageCtrl\", function() { return _legacy_angular_example_page__WEBPACK_IMPORTED_MODULE_1__[\"AngularExamplePageCtrl\"]; });\n\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_ExamplePage1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/ExamplePage1 */ \"./config/ExamplePage1.tsx\");\n/* harmony import */ var _config_ExamplePage2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/ExamplePage2 */ \"./config/ExamplePage2.tsx\");\n/* harmony import */ var _ExampleRootPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExampleRootPage */ \"./ExampleRootPage.tsx\");\n// Angular pages\n\n\n\n\n\n // Legacy exports just for testing\n\n\nvar plugin = new _grafana_ui__WEBPACK_IMPORTED_MODULE_2__[\"AppPlugin\"]().setRootPage(_ExampleRootPage__WEBPACK_IMPORTED_MODULE_5__[\"ExampleRootPage\"]).addConfigPage({\n  title: 'Page 1',\n  icon: 'fa fa-info',\n  body: _config_ExamplePage1__WEBPACK_IMPORTED_MODULE_3__[\"ExamplePage1\"],\n  id: 'page1'\n}).addConfigPage({\n  title: 'Page 2',\n  icon: 'fa fa-user',\n  body: _config_ExamplePage2__WEBPACK_IMPORTED_MODULE_4__[\"ExamplePage2\"],\n  id: 'page2'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGUudHM/YzIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIHBhZ2VzXG5pbXBvcnQgeyBFeGFtcGxlQ29uZmlnQ3RybCB9IGZyb20gJy4vbGVnYWN5L2NvbmZpZyc7XG5pbXBvcnQgeyBBbmd1bGFyRXhhbXBsZVBhZ2VDdHJsIH0gZnJvbSAnLi9sZWdhY3kvYW5ndWxhcl9leGFtcGxlX3BhZ2UnO1xuaW1wb3J0IHsgQXBwUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRXhhbXBsZVBhZ2UxIH0gZnJvbSAnLi9jb25maWcvRXhhbXBsZVBhZ2UxJztcbmltcG9ydCB7IEV4YW1wbGVQYWdlMiB9IGZyb20gJy4vY29uZmlnL0V4YW1wbGVQYWdlMic7XG5pbXBvcnQgeyBFeGFtcGxlUm9vdFBhZ2UgfSBmcm9tICcuL0V4YW1wbGVSb290UGFnZSc7XG5cbi8vIExlZ2FjeSBleHBvcnRzIGp1c3QgZm9yIHRlc3RpbmdcbmV4cG9ydCB7XG4gIEV4YW1wbGVDb25maWdDdHJsIGFzIENvbmZpZ0N0cmwsXG4gIEFuZ3VsYXJFeGFtcGxlUGFnZUN0cmwsIC8vIE11c3QgbWF0Y2ggYHBhZ2VzLmNvbXBvbmVudGAgaW4gcGx1Z2luLmpzb25cbn07XG5cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBBcHBQbHVnaW4oKVxuICAuc2V0Um9vdFBhZ2UoRXhhbXBsZVJvb3RQYWdlKVxuICAuYWRkQ29uZmlnUGFnZSh7XG4gICAgdGl0bGU6ICdQYWdlIDEnLFxuICAgIGljb246ICdmYSBmYS1pbmZvJyxcbiAgICBib2R5OiBFeGFtcGxlUGFnZTEsXG4gICAgaWQ6ICdwYWdlMScsXG4gIH0pXG4gIC5hZGRDb25maWdQYWdlKHtcbiAgICB0aXRsZTogJ1BhZ2UgMicsXG4gICAgaWNvbjogJ2ZhIGZhLXVzZXInLFxuICAgIGJvZHk6IEV4YW1wbGVQYWdlMixcbiAgICBpZDogJ3BhZ2UyJyxcbiAgfSk7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./module.ts\n");

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGdyYWZhbmEvdWkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhZmFuYS91aVwiPzcxNWQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19ncmFmYW5hX3VpX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@grafana/ui\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ })});;