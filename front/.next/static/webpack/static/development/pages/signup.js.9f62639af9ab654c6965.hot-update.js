webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./customHooks/useInput.js":
/*!*********************************!*\
  !*** ./customHooks/useInput.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (e && e.target && e.target.value) {
      console.log(e.target.value);
      setValue(e.target.value);
    } else {
      console.log(e);
      setValue(initValue);
    }
  }, []);
  return [value, handler];
};

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ })

})
//# sourceMappingURL=signup.js.9f62639af9ab654c6965.hot-update.js.map