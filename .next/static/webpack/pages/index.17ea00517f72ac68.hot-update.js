"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./prismic-configuration.js":
/*!**********************************!*\
  !*** ./prismic-configuration.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiEndpoint\": function() { return /* binding */ apiEndpoint; },\n/* harmony export */   \"accessToken\": function() { return /* binding */ accessToken; },\n/* harmony export */   \"PrismicClient\": function() { return /* binding */ PrismicClient; }\n/* harmony export */ });\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismic-javascript */ \"./node_modules/prismic-javascript/esm/prismic-javascript.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar apiEndpoint = 'https://vicecitylending.cdn.prismic.io/api/v2';\nvar accessToken = 'MC5aRVg3cWhFQUFDWUF5TVlS.77-9X--_ve-_vQbvv71P77-9NwoKeT5MYu-_ve-_vUMhCu-_ve-_vXDvv71MHUssWHU277-9';\n// Client method to query documents from the Prismic repo\nvar PrismicClient = function() {\n    var req = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;\n    return prismic_javascript__WEBPACK_IMPORTED_MODULE_0__[\"default\"].client(apiEndpoint, createClientOptions(req, accessToken));\n};\n_c = PrismicClient;\nvar createClientOptions = function() {\n    var req = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, prismicAccessToken = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;\n    var reqOption = req ? {\n        req: req\n    } : {};\n    var accessTokenOption = prismicAccessToken ? {\n        accessToken: prismicAccessToken\n    } : {};\n    return _objectSpread({}, reqOption, accessTokenOption);\n};\nvar _c;\n$RefreshReg$(_c, \"PrismicClient\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcmlzbWljLWNvbmZpZ3VyYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLENBQStDO0FBQ25FLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLENBQW1HO0FBRTlILEVBQXlEO0FBQ2xELEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQVE7UUFBUEMsR0FBRyxvRUFBRyxJQUFJO0lBQUssTUFDekMsQ0FBRkosaUVBQWMsQ0FBQ0MsV0FBVyxFQUFFSyxtQkFBbUIsQ0FBQ0YsR0FBRyxFQUFFRixXQUFXOztLQURyREMsYUFBYTtBQUkxQixHQUFLLENBQUNHLG1CQUFtQixHQUFHLFFBQVEsR0FBbUMsQ0FBQztRQUEzQ0YsR0FBRyxvRUFBRyxJQUFJLEVBQUVHLGtCQUFrQixvRUFBRyxJQUFJO0lBQ2hFLEdBQUssQ0FBQ0MsU0FBUyxHQUFHSixHQUFHLEdBQUcsQ0FBQztRQUFDQSxHQUFHLEVBQUhBLEdBQUc7SUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLEdBQUssQ0FBQ0ssaUJBQWlCLEdBQUdGLGtCQUFrQixHQUFHLENBQUM7UUFBQ0wsV0FBVyxFQUFFSyxrQkFBa0I7SUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZGLE1BQU0sbUJBQ0RDLFNBQVMsRUFDVEMsaUJBQWlCO0FBRXhCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJpc21pYy1jb25maWd1cmF0aW9uLmpzPzgxNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtaWMgZnJvbSAncHJpc21pYy1qYXZhc2NyaXB0J1xuXG5leHBvcnQgY29uc3QgYXBpRW5kcG9pbnQgPSAnaHR0cHM6Ly92aWNlY2l0eWxlbmRpbmcuY2RuLnByaXNtaWMuaW8vYXBpL3YyJ1xuZXhwb3J0IGNvbnN0IGFjY2Vzc1Rva2VuID0gJ01DNWFSVmczY1doRlFVRkRXVUY1VFZsUy43Ny05WC0tX3ZlLV92UWJ2djcxUDc3LTlOd29LZVQ1TVl1LV92ZS1fdlVNaEN1LV92ZS1fdlhEdnY3MU1IVXNzV0hVMjc3LTknXG5cbi8vIENsaWVudCBtZXRob2QgdG8gcXVlcnkgZG9jdW1lbnRzIGZyb20gdGhlIFByaXNtaWMgcmVwb1xuZXhwb3J0IGNvbnN0IFByaXNtaWNDbGllbnQgPSAocmVxID0gbnVsbCkgPT4gKFxuICBQcmlzbWljLmNsaWVudChhcGlFbmRwb2ludCwgY3JlYXRlQ2xpZW50T3B0aW9ucyhyZXEsIGFjY2Vzc1Rva2VuKSlcbilcblxuY29uc3QgY3JlYXRlQ2xpZW50T3B0aW9ucyA9IChyZXEgPSBudWxsLCBwcmlzbWljQWNjZXNzVG9rZW4gPSBudWxsKSA9PiB7XG4gIGNvbnN0IHJlcU9wdGlvbiA9IHJlcSA/IHsgcmVxIH0gOiB7fVxuICBjb25zdCBhY2Nlc3NUb2tlbk9wdGlvbiA9IHByaXNtaWNBY2Nlc3NUb2tlbiA/IHsgYWNjZXNzVG9rZW46IHByaXNtaWNBY2Nlc3NUb2tlbiB9IDoge31cbiAgcmV0dXJuIHtcbiAgICAuLi5yZXFPcHRpb24sXG4gICAgLi4uYWNjZXNzVG9rZW5PcHRpb24sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWljIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsIlByaXNtaWNDbGllbnQiLCJyZXEiLCJjbGllbnQiLCJjcmVhdGVDbGllbnRPcHRpb25zIiwicHJpc21pY0FjY2Vzc1Rva2VuIiwicmVxT3B0aW9uIiwiYWNjZXNzVG9rZW5PcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./prismic-configuration.js\n");

/***/ })

});