webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _customHooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customHooks/useInput */ "./customHooks/useInput.js");


var _jsxFileName = "/Users/kim/Desktop/projects/frank/front/pages/signup.js";

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  border: 1px solid lightgray;\n  min-height: 500px;\n  min-width: 55%;\n  @media (min-width: 1025px) {\n    border-radius: 1rem;\n    background-color: white;\n    min-height: 85%;\n    min-width: 45%;\n    padding: 10px;\n    margin: 0 10rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n  @media (min-width: 1025px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(0, 0, 0, 0.3);\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var SignupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var SignupContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var Label = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label(_templateObject3());
var IdWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
var EmailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5());
var PasswordWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject6());
var BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject7());
var AtdButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject8());
var NotificationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject9());
var NotificationContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span;

var signup = function signup() {
  var _useInput = Object(_customHooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      setNickname = _useInput2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useInput3 = Object(_customHooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      setPassword = _useInput4[1];

  var onSubmitSignup = function onSubmitSignup(e) {
    e.preventDefault();
  };

  var isValidCheckEmail = function isValidCheckEmail(email) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  };

  var onChangeEmail = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    if (isValidCheckEmail(e.target.value)) {} else {}
  }, [email]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SignupWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SignupContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onSubmitSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IdWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    htmlFor: "user-nickname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uB2C9\uB124\uC784"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-nickname",
    required: true,
    onChange: setNickname,
    placeholder: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD558\uC138\uC694.",
    value: nickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EmailWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    htmlFor: "user-Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\uC774\uBA54\uC77C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-Email",
    required: true,
    onChange: setEmail,
    placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.",
    value: email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PasswordWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    htmlFor: "user-Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "password",
    name: "user-Password",
    required: true,
    onChange: setPassword,
    placeholder: "8\uC790 \uC774\uC0C1 \uC601\uBB38\uACFC \uC22B\uC790 \uC870\uD569",
    value: password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BtnWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AtdButton, {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ })

})
//# sourceMappingURL=signup.js.a54426fd7286aa1d8281.hot-update.js.map