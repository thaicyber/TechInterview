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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  border-radius: 1rem;\n  background-color: white;\n  min-height: 85%;\n  min-width: 45%;\n  padding: 10px;\n  margin: 0 10rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n"]);

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

var signup = function signup() {
  var _useInput = Object(_customHooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      setNickname = _useInput2[1];

  var _useInput3 = Object(_customHooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      email = _useInput4[0],
      setEmail = _useInput4[1];

  var _useInput5 = Object(_customHooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      setPassword = _useInput6[1];

  var onSubmitSignup = function onSubmitSignup(e) {
    e.preventDefault();
    console.log({
      nickname: nickname,
      email: email,
      password: password
    });
    setNickname("");
    setEmail("");
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SignupWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SignupContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onSubmitSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IdWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    htmlFor: "user-nickname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\uB2C9\uB124\uC784"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-nickname",
    required: true,
    onChange: setNickname,
    placeholder: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD558\uC138\uC694.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EmailWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    htmlFor: "user-Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\uC774\uBA54\uC77C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-Email",
    required: true,
    onChange: setEmail,
    placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PasswordWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    htmlFor: "user-Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "password",
    name: "user-Password",
    required: true,
    onChange: setPassword,
    placeholder: "8\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BtnWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AtdButton, {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\uD68C\uC6D0\uAC00\uC785"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ })

})
//# sourceMappingURL=signup.js.c619bedb56004caaa74c.hot-update.js.map