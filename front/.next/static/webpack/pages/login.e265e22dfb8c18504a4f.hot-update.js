webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/UserOutlined */ "./node_modules/@ant-design/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/LockOutlined */ "./node_modules/@ant-design/icons/LockOutlined.js");
/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _FacebookLoginBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FacebookLoginBtn */ "./components/FacebookLoginBtn.js");
/* harmony import */ var _GoogleLoginBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GoogleLoginBtn */ "./components/GoogleLoginBtn.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");




var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();













var layout = {
  wrapperCol: {
    xs: {
      span: 9,
      offset: 1
    },
    sm: {
      span: 18,
      offset: 3
    },
    md: {
      span: 16,
      offset: 4
    },
    lg: {
      span: 9,
      offset: 6
    }
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18
  }
};
var btnLayout = {
  wrapperCol: {
    span: 21,
    offset: 2
  }
};

var LoginForm = function LoginForm() {
  _s();

  var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user.me;
  });
  var logInLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user.logInLoading;
  });
  var logInError = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user.logInError;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      basicButtonClicked = _useState[0],
      setBasicButtonClicked = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (me && me.id) {
      alert('로그인 중입니다. 메인페이지로 이동합니다.');
      Router.replace('/'); //push는 뒤로가기 하면 히스토리가 남아있지만 replace는 지워짐
    }
  }, [me && me.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (logInError) alert(logInError);
  }, [logInError]);
  var onClickBasicButton = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    setBasicButtonClicked(true);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (basicButtonClicked) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_IN_REQUEST"],
        data: {
          email: email,
          password: password
        }
      });
    }
  }, [email, password, basicButtonClicked]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layout, {
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "username",
    rules: [{
      required: basicButtonClicked,
      message: 'Please input your username!'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "site-form-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 32
      },
      __self: _this
    }),
    placeholder: "Username",
    value: email,
    onChange: onChangeEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "password",
    rules: [{
      required: basicButtonClicked,
      message: 'Please input your password!'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "site-form-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      },
      __self: _this
    }),
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tailLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: logInLoading,
    onClick: onClickBasicButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    },
    __self: _this
  }, "\uB85C\uADF8\uC778"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    type: "vertical",
    style: {
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 42
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 45
    },
    __self: _this
  }, "\uD68C\uC6D0\uAC00\uC785"))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, btnLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_GoogleLoginBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_FacebookLoginBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    },
    __self: _this
  }))));
};

_s(LoginForm, "Ds1Po/IpGMSoOAb5/TSsP67JeNk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsibGF5b3V0Iiwid3JhcHBlckNvbCIsInhzIiwic3BhbiIsIm9mZnNldCIsInNtIiwibWQiLCJsZyIsInRhaWxMYXlvdXQiLCJidG5MYXlvdXQiLCJMb2dpbkZvcm0iLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZVN0YXRlIiwiYmFzaWNCdXR0b25DbGlja2VkIiwic2V0QmFzaWNCdXR0b25DbGlja2VkIiwidXNlRWZmZWN0IiwiaWQiLCJhbGVydCIsInJlcGxhY2UiLCJvbkNsaWNrQmFzaWNCdXR0b24iLCJ1c2VDYWxsYmFjayIsIm9uU3VibWl0Rm9ybSIsInR5cGUiLCJMT0dfSU5fUkVRVUVTVCIsImRhdGEiLCJyZW1lbWJlciIsInJlcXVpcmVkIiwibWVzc2FnZSIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLFlBQVUsRUFBRTtBQUNSQyxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBTSxFQUFFO0FBQW5CLEtBREk7QUFFUkMsTUFBRSxFQUFFO0FBQUVGLFVBQUksRUFBRSxFQUFSO0FBQVlDLFlBQU0sRUFBRTtBQUFwQixLQUZJO0FBR1JFLE1BQUUsRUFBRTtBQUFFSCxVQUFJLEVBQUUsRUFBUjtBQUFZQyxZQUFNLEVBQUU7QUFBcEIsS0FISTtBQUlS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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBT0ksNERBQUMsNENBQUQ7QUFBUyxRQUFJLEVBQUMsVUFBZDtBQUF5QixTQUFLLEVBQUU7QUFBRVMsWUFBTSxFQUFFO0FBQVYsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUksNERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRyw0REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFILENBQXJCLENBUkosQ0FESixDQXpDSixFQXVESSw0REFBQyx5Q0FBRCxDQUFNLElBQU4seUZBQWVqQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSSw0REFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksNERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksNERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosQ0F2REosQ0FESjtBQWtFSCxDQXJHRDs7R0FBTUMsUztVQUNhRSxzRCxFQUVKRSx1RCxFQUNVQSx1RCxFQUNGQSx1RCxFQUNGTSx1RCxFQUNjQyx1RCxFQUNNQSx1RDs7O0tBUm5DWCxTO0FBc0dTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5lMjY1ZTIyZGZiOGMxODUwNGE0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBSb3csIERpdmlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHtcclxuICAgIGRlZmF1bHQgYXMgVXNlck91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1VzZXJPdXRsaW5lZCc7XHJcbmltcG9ydCB7XHJcbiAgICBkZWZhdWx0IGFzIExvY2tPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9Mb2NrT3V0bGluZWQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luQnRuIGZyb20gJy4vRmFjZWJvb2tMb2dpbkJ0bic7XHJcbmltcG9ydCBHb29nbGVMb2dpbkJ0biBmcm9tICcuL0dvb2dsZUxvZ2luQnRuJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5jb25zdCBsYXlvdXQgPSB7XHJcbiAgICB3cmFwcGVyQ29sOiB7XHJcbiAgICAgICAgeHM6IHsgc3BhbjogOSwgb2Zmc2V0OiAxIH0sXHJcbiAgICAgICAgc206IHsgc3BhbjogMTgsIG9mZnNldDogMyB9LFxyXG4gICAgICAgIG1kOiB7IHNwYW46IDE2LCBvZmZzZXQ6IDQgfSxcclxuICAgICAgICBsZzogeyBzcGFuOiA5LCBvZmZzZXQ6IDYgfSxcclxuICAgIH0sXHJcbn07XHJcbmNvbnN0IHRhaWxMYXlvdXQgPSB7XHJcbiAgICB3cmFwcGVyQ29sOiB7IG9mZnNldDogNiwgc3BhbjogMTggfSxcclxufTtcclxuY29uc3QgYnRuTGF5b3V0ID0ge1xyXG4gICAgd3JhcHBlckNvbDogeyBzcGFuOiAyMSwgb2Zmc2V0OiAyIH0sXHJcbn07XHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgICBjb25zdCBsb2dJbkxvYWRpbmcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmxvZ0luTG9hZGluZyk7XHJcbiAgICBjb25zdCBsb2dJbkVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5sb2dJbkVycm9yKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW2Jhc2ljQnV0dG9uQ2xpY2tlZCwgc2V0QmFzaWNCdXR0b25DbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lICYmIG1lLmlkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfroZzqt7jsnbgg7KSR7J6F64uI64ukLiDrqZTsnbjtjpjsnbTsp4DroZwg7J2064+Z7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpOy8vcHVzaOuKlCDrkqTroZzqsIDquLAg7ZWY66m0IO2eiOyKpO2GoOumrOqwgCDrgqjslYTsnojsp4Drp4wgcmVwbGFjZeuKlCDsp4Dsm4zsp5BcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2dJbkVycm9yKSBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0Jhc2ljQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEJhc2ljQnV0dG9uQ2xpY2tlZCh0cnVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJhc2ljQnV0dG9uQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZW1haWwsIHBhc3N3b3JkIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbWFpbCwgcGFzc3dvcmQsIGJhc2ljQnV0dG9uQ2xpY2tlZF0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIHsuLi5sYXlvdXR9XHJcbiAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyOiB0cnVlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRGb3JtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogYmFzaWNCdXR0b25DbGlja2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGJhc2ljQnV0dG9uQ2xpY2tlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gey4uLnRhaWxMYXlvdXR9ID5cclxuICAgICAgICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvZ0luTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0Jhc2ljQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIHN0eWxlPXt7IGJvcmRlcjogJ25vbmUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgICAgPC9CdXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSB7Li4uYnRuTGF5b3V0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpbkJ0biAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0xvZ2luQnRuIC8+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxuXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==