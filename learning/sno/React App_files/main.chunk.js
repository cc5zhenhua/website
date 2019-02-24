(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js");
/* harmony import */ var _components_PageHome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PageHome */ "./src/components/PageHome.js");
/* harmony import */ var _components_PageAbout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PageAbout */ "./src/components/PageAbout.js");
/* harmony import */ var _components_PagePrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/PagePrice */ "./src/components/PagePrice.js");
/* harmony import */ var _components_PageGainianPrice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/PageGainianPrice */ "./src/components/PageGainianPrice.js");
/* harmony import */ var _components_PageBKSnosPrices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/PageBKSnosPrices */ "./src/components/PageBKSnosPrices.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\App.js";










var App =
/*#__PURE__*/
function (_Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "This is app page"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "about",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "About \u6D4B\u8BD5\u9875")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "price",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "\u884C\u4E1A\u4EF7\u683C\u53D8\u52A8\u9875")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "gainian",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\u6982\u5FF5\u4EF7\u683C\u53D8\u52A8\u9875")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "bankuai",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u67D0\u4E2A\u677F\u5757\u5185\u7684\u80A1\u7968\u7684\u4EF7\u683C\u53D8\u52A8\u9875"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/",
        component: _components_PageHome__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/about",
        component: _components_PageAbout__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/price",
        component: _components_PagePrice__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/gainian",
        component: _components_PageGainianPrice__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/bankuai",
        component: _components_PageBKSnosPrices__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/BarChart.js":
/*!************************************!*\
  !*** ./src/components/BarChart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BarChart; });
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\BarChart.js";



var BarChart =
/*#__PURE__*/
function (_React$Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BarChart, _React$Component);

  function BarChart(props) {
    var _this;

    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BarChart);

    _this = Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BarChart).call(this, props));
    _this.state = {
      chartData: {}
    };
    return _this;
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BarChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshAjaxDataState(this.props.snos);
    }
  }, {
    key: "refreshAjaxDataState",
    value: function refreshAjaxDataState(snolist) {
      var _this2 = this;

      console.log("refreshAjaxDataState start");
      var postData = snolist.split(',');
      this.serverRequest = fetch('https://localhost/api/Page/' + this.props.api, {
        method: 'POST',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this2.setState({
          chartData: resJson
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_google_charts__WEBPACK_IMPORTED_MODULE_6__["Chart"], {
        width: '500px',
        height: '300px',
        chartType: "Bar",
        loader: react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Loading Chart"),
        data: this.state.chartData,
        options: {
          // Material design options
          chart: {
            title: this.props.title,
            subtitle: ''
          }
        } // For tests
        ,
        rootProps: {
          'data-testid': '2'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      });
    }
  }]);

  return BarChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

/***/ }),

/***/ "./src/components/FundGroupChart.js":
/*!******************************************!*\
  !*** ./src/components/FundGroupChart.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FundGroupChart; });
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\FundGroupChart.js";



var FundGroupChart =
/*#__PURE__*/
function (_React$Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FundGroupChart, _React$Component);

  function FundGroupChart(props) {
    var _this;

    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FundGroupChart);

    _this = Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FundGroupChart).call(this, props));
    _this.state = {
      lineChartData: {},
      csno: ''
    };
    return _this;
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FundGroupChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshAjaxDataState(this.props.sno);
    }
  }, {
    key: "refreshAjaxDataState",
    value: function refreshAjaxDataState(sno) {
      var _this2 = this;

      console.log("refreshAjaxDataState start");
      this.serverRequest = fetch('https://localhost/api/Page/getfundgroups?sno=' + sno, {
        method: 'Get',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this2.setState({
          lineChartData: resJson,
          csno: sno
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("LineChartAjax.Render start ..."); //this.getAjaxDataState();

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_google_charts__WEBPACK_IMPORTED_MODULE_6__["Chart"], {
        width: 980,
        height: 600,
        chartType: "Line",
        loader: react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "Loading Chart..."),
        data: this.state.lineChartData,
        options: {
          chart: {
            title: this.props.title,
            subtitle: this.state.csno,
            interpolateNulls: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      });
    }
  }]);

  return FundGroupChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/LineChartAjax.js":
/*!*****************************************!*\
  !*** ./src/components/LineChartAjax.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineChartAjax; });
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\LineChartAjax.js";



var LineChartAjax =
/*#__PURE__*/
function (_React$Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LineChartAjax, _React$Component);

  function LineChartAjax(props) {
    var _this;

    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LineChartAjax);

    _this = Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LineChartAjax).call(this, props));
    _this.state = {
      lineChartData: {}
    };
    return _this;
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LineChartAjax, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshAjaxDataState(this.props.snos);
    }
  }, {
    key: "refreshAjaxDataState",
    value: function refreshAjaxDataState(snolist) {
      var _this2 = this;

      console.log("refreshAjaxDataState start");
      var postData = {
        snos: snolist.split(','),
        table: this.props.tablename,
        column: this.props.columnname
      };
      this.serverRequest = fetch('https://localhost/api/Page/' + this.props.api, {
        method: 'POST',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this2.setState({
          lineChartData: resJson
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("LineChartAjax.Render start ..."); //this.getAjaxDataState();

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_google_charts__WEBPACK_IMPORTED_MODULE_6__["Chart"], {
        width: 880,
        height: 300,
        chartType: "Line",
        loader: react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Loading Chart..."),
        data: this.state.lineChartData,
        options: {
          chart: {
            title: this.props.title,
            subtitle: this.props.subtitle,
            interpolateNulls: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      });
    }
  }]);

  return LineChartAjax;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/PageAbout.js":
/*!*************************************!*\
  !*** ./src/components/PageAbout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageAbout; });
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\PageAbout.js";


var PageAbout =
/*#__PURE__*/
function (_Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageAbout, _Component);

  function PageAbout() {
    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageAbout);

    return Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageAbout).apply(this, arguments));
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageAbout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, "This is About component");
    }
  }]);

  return PageAbout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/PageBKSnosPrices.js":
/*!********************************************!*\
  !*** ./src/components/PageBKSnosPrices.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageBKSnosPrices; });
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\PageBKSnosPrices.js";





var PageBKSnosPrices =
/*#__PURE__*/
function (_Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageBKSnosPrices, _Component);

  function PageBKSnosPrices() {
    var _this;

    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageBKSnosPrices);

    _this = Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageBKSnosPrices).call(this));
    _this.state = {
      searchText: "",
      chartData: {},
      tableData: []
    }; //this.getChartData("")

    return _this;
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageBKSnosPrices, [{
    key: "search_click",
    value: function search_click(searchText) {
      console.log(searchText);
      this.state.searchText = searchText;
      this.getChartData(searchText);
      this.getTableData(searchText);
    }
  }, {
    key: "getTableData",
    value: function getTableData(searchText) {
      var _this2 = this;

      this.serverRequest = fetch('https://localhost/api/Price/bkgainian?bkcode=' + searchText, {
        method: 'GET',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this2.setState({
          tableData: resJson
        });
      });
    }
  }, {
    key: "getChartData",
    value: function getChartData(searchText) {
      var _this3 = this;

      this.serverRequest = fetch('https://localhost/api/Price/bkdetail?bkcode=' + searchText, {
        method: 'GET',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this3.setState({
          chartData: resJson
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Input"].Search, {
        placeholder: "input your \u677F\u5757Code here",
        enterButton: "Search",
        size: "large",
        onSearch: this.search_click.bind(this),
        style: {
          width: 600
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u884C\u4E1A\u677F\u5757\u4EE3\u7801\u53C2\u8003"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "BK0484     \u56FD\u9645\u8D38\u6613   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "BK0727     \u533B\u7597\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "BK0545     \u673A\u68B0\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "BK0433     \u519C\u7267\u9972\u6E14   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "BK0736     \u7535\u4FE1\u8FD0\u8425   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "BK0739     \u91D1\u5C5E\u5236\u54C1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "BK0735     \u5B89\u9632\u8BBE\u5907   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "BK0476     \u6728\u4E1A\u5BB6\u5177   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "BK0538     \u5316\u5DE5\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "BK0546     \u73BB\u7483\u9676\u74F7   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "BK0436     \u7EBA\u7EC7\u670D\u88C5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "BK0910     \u4E13\u7528\u8BBE\u5907   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "BK0738     \u591A\u5143\u91D1\u878D   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "BK0485     \u65C5\u6E38\u9152\u5E97   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "BK0480     \u822A\u5929\u822A\u7A7A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "BK0726     \u56ED\u6797\u5DE5\u7A0B   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "BK0437     \u7164\u70AD\u91C7\u9009   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "BK0424     \u6C34\u6CE5\u5EFA\u6750   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "BK0486     \u6587\u5316\u4F20\u5A92   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "BK0729     \u8239\u8236\u5236\u9020   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "BK0454     \u5851\u80F6\u5236\u54C1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "BK0440     \u5DE5\u827A\u5546\u54C1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "BK0427     \u516C\u7528\u4E8B\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "BK0429     \u4EA4\u8FD0\u8BBE\u5907   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "BK0451     \u623F\u5730\u4EA7     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "BK0450     \u6E2F\u53E3\u6C34\u8FD0   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "BK0464     \u77F3\u6CB9\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "BK0474     \u4FDD\u9669       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "BK0733     \u5305\u88C5\u6750\u6599   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "BK0428     \u7535\u529B\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "BK0458     \u4EEA\u5668\u4EEA\u8868   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "BK0456     \u5BB6\u7535\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "BK0482     \u5546\u4E1A\u767E\u8D27   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "BK0479     \u94A2\u94C1\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "BK0740     \u6587\u6559\u4F11\u95F2   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "BK0731     \u5316\u80A5\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "BK0471     \u5316\u7EA4\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "BK0728     \u73AF\u4FDD\u5DE5\u7A0B   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "BK0475     \u94F6\u884C       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "BK0447     \u7535\u5B50\u4FE1\u606F   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "BK0473     \u5238\u5546\u4FE1\u6258   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "BK0734     \u73E0\u5B9D\u9996\u9970   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "BK0732     \u8D35\u91D1\u5C5E     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "BK0438     \u98DF\u54C1\u996E\u6599   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "BK0477     \u917F\u9152\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "BK0422     \u4EA4\u8FD0\u7269\u6D41   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "BK0448     \u901A\u8BAF\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "BK0465     \u533B\u836F\u5236\u9020   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "BK0459     \u7535\u5B50\u5143\u4EF6   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "BK0481     \u6C7D\u8F66\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "BK0470     \u9020\u7EB8\u5370\u5237   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "BK0725     \u88C5\u4FEE\u88C5\u9970   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "BK0730     \u519C\u836F\u517D\u836F   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "BK0737     \u8F6F\u4EF6\u670D\u52A1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "BK0421     \u9AD8\u901F\u516C\u8DEF   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "BK0478     \u6709\u8272\u91D1\u5C5E   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "BK0420     \u6C11\u822A\u673A\u573A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "BK0457     \u8F93\u914D\u7535\u6C14   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "BK0537     \u6750\u6599\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "BK0539     \u7EFC\u5408\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "BK0425     \u5DE5\u7A0B\u5EFA\u8BBE   "))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "\u6982\u5FF5\u677F\u5757\u4EE3\u7801\u53C2\u8003"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "BK0708     \u4F53\u80B2\u4EA7\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "BK0666     \u82F9\u679C\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "BK0727     \u533B\u7597\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "BK0837     \u4E92\u8054\u533B\u7597   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "BK0739     \u91D1\u5C5E\u5236\u54C1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "BK0705     \u4E0A\u8BC1380    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "BK0679     \u8D85\u5BFC\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "BK0735     \u5B89\u9632\u8BBE\u5907   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "BK0494     \u8282\u80FD\u73AF\u4FDD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "BK0619     3D\u6253\u5370     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "BK0505     \u4E2D\u5B57\u5934     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "BK0436     \u7EBA\u7EC7\u670D\u88C5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "BK0588     \u592A\u9633\u80FD     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "BK0743     \u6DF1\u8BC1100R   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "BK0689     \u963F\u91CC\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "BK0486     \u6587\u5316\u4F20\u5A92   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "BK0637     \u4E92\u8054\u91D1\u878D   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "BK0842     \u5BCC\u58EB\u5EB7     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "BK0594     \u957F\u6C5F\u4E09\u89D2   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "BK0614     \u98DF\u54C1\u5B89\u5168   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "BK0655     \u7F51\u7EDC\u5B89\u5168   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "BK0707     \u6CAA\u80A1\u901A     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "BK0717     \u5317\u4EAC\u51AC\u5965   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "BK0850     \u8FDB\u53E3\u535A\u89C8   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "BK0454     \u5851\u80F6\u5236\u54C1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "BK0706     \u4EBA\u8111\u5DE5\u7A0B   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "BK0813     \u96C4\u5B89\u65B0\u533A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "BK0427     \u516C\u7528\u4E8B\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "BK0464     \u77F3\u6CB9\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "BK0528     \u8F6C\u503A\u6807\u7684   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "BK0704     \u65E0\u4EBA\u673A     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "BK0642     \u624B\u6E38\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "BK0733     \u5305\u88C5\u6750\u6599   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "BK0807     \u5171\u4EAB\u7ECF\u6D4E   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "BK0482     \u5546\u4E1A\u767E\u8D27   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "BK0814     \u5927\u98DE\u673A     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "BK0428     \u7535\u529B\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "BK0567     \u80A1\u6743\u6FC0\u52B1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "BK0731     \u5316\u80A5\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "BK0843     \u5929\u7136\u6C14     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "BK0577     \u6838\u80FD\u6838\u7535   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "BK0700     \u5145\u7535\u6869     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "BK0547     \u9EC4\u91D1\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "BK0804     \u6DF1\u80A1\u901A     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "BK0845     \u767E\u5EA6\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "BK0589     \u7696\u6C5F\u533A\u57DF   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "BK0664     \u4E8C\u80CE\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "BK0438     \u98DF\u54C1\u996E\u6599   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "BK0580     LED        "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "BK0696     \u56FD\u4EA7\u8F6F\u4EF6   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "BK0653     \u517B\u8001\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "BK0802     \u65E0\u4EBA\u9A7E\u9A76   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "BK0593     \u957F\u682A\u6F6D     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "BK0556     \u79FB\u52A8\u652F\u4ED8   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "BK0824     \u53C2\u80A1360    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "BK0448     \u901A\u8BAF\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "BK0465     \u533B\u836F\u5236\u9020   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "BK0960     \u65E0\u7EBF\u5145\u7535   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "BK0636     B\u80A1        "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "BK0801     \u589E\u5F3A\u73B0\u5B9E   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "BK0566     \u6EE8\u6D77\u65B0\u533A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "BK0812     \u8D2C\u503C\u53D7\u76CA   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "BK0713     2025\u89C4\u5212   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "BK0817     \u6628\u65E5\u89E6\u677F   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "BK0540     \u8FEA\u58EB\u5C3C     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "BK0476     \u6728\u4E1A\u5BB6\u5177   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "BK0714     5G\u6982\u5FF5     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "BK0970     \u751F\u7269\u8BC6\u522B   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "BK0668     \u533B\u7597\u5668\u68B0   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "BK0603     \u9875\u5CA9\u6C14     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "BK0514     \u53C2\u80A1\u5238\u5546   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "BK0538     \u5316\u5DE5\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "BK0546     \u73BB\u7483\u9676\u74F7   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "BK0626     \u7F8E\u4E3D\u4E2D\u56FD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "BK0836     \u6570\u5B57\u4E2D\u56FD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "BK0667     \u56FD\u5BB6\u5B89\u9632   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "BK0800     \u4EBA\u5DE5\u667A\u80FD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "BK0726     \u56ED\u6797\u5DE5\u7A0B   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "BK0854     \u534E\u4E3A\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "BK0596     \u878D\u8D44\u878D\u5238   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "BK0848     Facebook   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "BK0440     \u5DE5\u827A\u5546\u54C1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "BK0703     \u8D85\u7EA7\u7535\u5BB9   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "BK0823     \u517B\u8001\u91D1     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "BK0719     \u5065\u5EB7\u4E2D\u56FD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "BK0523     \u65B0\u6750\u6599     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "BK0491     \u9AD8\u6821       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "BK0839     \u77E5\u8BC6\u4EA7\u6743   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "BK0821     MSCI\u4E2D\u56FD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "BK0680     \u667A\u80FD\u5BB6\u5C45   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "BK0554     \u7269\u8054\u7F51     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "BK0456     \u5BB6\u7535\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "BK0535     QFII\u91CD\u4ED3   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "BK0742     \u521B\u4E1A\u677F\u7EFC   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "BK0625     \u901A\u7528\u822A\u7A7A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "BK0676     \u72EC\u5BB6\u836F\u54C1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "BK0728     \u73AF\u4FDD\u5DE5\u7A0B   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "BK0471     \u5316\u7EA4\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "BK0980     \u503A\u8F6C\u80A1     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "BK0447     \u7535\u5B50\u4FE1\u606F   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "BK0549     \u6DF1\u5733\u7279\u533A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "BK0606     \u6CB9\u6C14\u8BBE\u670D   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "BK0740     \u6587\u6559\u4F11\u95F2   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "BK0635     \u4E2D\u8D85\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "BK0699     \u5168\u606F\u6280\u672F   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "BK0734     \u73E0\u5B9D\u9996\u9970   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "BK0672     \u6CAA\u4F01\u6539\u9769   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "BK0422     \u4EA4\u8FD0\u7269\u6D41   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "BK0822     \u79DF\u552E\u540C\u6743   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "BK0732     \u8D35\u91D1\u5C5E     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "BK0628     \u667A\u6167\u57CE\u5E02   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "BK0677     \u7CA4\u6E2F\u81EA\u8D38   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "BK0470     \u9020\u7EB8\u5370\u5237   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "BK0537     \u6750\u6599\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "BK0632     \u571F\u5730\u6D41\u8F6C   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "BK0563     \u6CB9\u4EF7\u76F8\u5173   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "BK0604     \u53C2\u80A1\u4FDD\u9669   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "BK0457     \u8F93\u914D\u7535\u6C14   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "BK0600     \u65B0\u4E09\u677F     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "BK0825     \u65B0\u96F6\u552E     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "BK0846     \u7F8E\u56E2\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "BK0663     \u6CB9\u6539\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "BK0718     \u8BC1\u91D1\u6301\u80A1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "BK0519     \u7A00\u7F3A\u8D44\u6E90   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "BK0681     \u817E\u5B89\u4EF7\u503C   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "BK0484     \u56FD\u9645\u8D38\u6613   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "BK0851     \u7EBE\u56F0\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "BK0834     \u4E61\u6751\u632F\u5174   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "BK0832     \u5DE5\u4E1A\u4E92\u8054   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "BK0500     HS300_     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "BK0838     \u4E1C\u5317\u632F\u5174   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "BK0684     \u4EAC\u6D25\u5180     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "BK0693     \u57FA\u56E0\u6D4B\u5E8F   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "BK0644     \u7279\u65AF\u62C9     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "BK0900     \u65B0\u80FD\u6E90\u8F66   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "BK0617     \u77F3\u58A8\u70EF     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "BK0835     \u72EC\u89D2\u517D     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "BK0611     \u4E0A\u8BC150_    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "BK0641     \u667A\u80FD\u7A7F\u6234   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "BK0485     \u65C5\u6E38\u9152\u5E97   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "BK0643     \u4E0A\u6D77\u81EA\u8D38   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "BK0638     \u521B\u4E1A\u6210\u4EFD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "BK0729     \u8239\u8236\u5236\u9020   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "BK0847     \u5F71\u89C6\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "BK0424     \u6C34\u6CE5\u5EFA\u6750   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "BK0820     \u58F3\u8D44\u6E90     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "BK0480     \u822A\u5929\u822A\u7A7A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "BK0437     \u7164\u70AD\u91C7\u9009   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "BK0724     \u6D77\u7EF5\u57CE\u5E02   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "BK0592     \u94C1\u8DEF\u57FA\u5EFA   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "BK0429     \u4EA4\u8FD0\u8BBE\u5907   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "BK0930     \u6DF1\u6E2F\u901A     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "BK0450     \u6E2F\u53E3\u6C34\u8FD0   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "BK0849     \u4EAC\u4E1C\u91D1\u878D   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "BK0634     \u5927\u6570\u636E     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "BK0451     \u623F\u5730\u4EA7     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "BK0833     \u5C0F\u7C73\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "BK0841     \u4F53\u5916\u8BCA\u65AD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "BK0722     \u865A\u62DF\u73B0\u5B9E   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "BK0583     \u89E6\u6478\u5C4F     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "BK0509     \u7F51\u7EDC\u6E38\u620F   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "BK0579     \u4E91\u8BA1\u7B97     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "BK0490     \u519B\u5DE5       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "BK0610     \u592E\u89C650_    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "BK0479     \u94A2\u94C1\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "BK0493     \u65B0\u80FD\u6E90     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "BK0690     \u6C1F\u5316\u5DE5     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "BK0503     S\u80A1        "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "BK0475     \u94F6\u884C       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "BK0578     \u7A00\u571F\u6C38\u78C1   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, "BK0574     \u9502\u7535\u6C60     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "BK0711     \u5238\u5546\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "BK0525     \u53C2\u80A1\u94F6\u884C   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "BK0803     \u80A1\u6743\u8F6C\u8BA9   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "BK0571     \u9884\u76C8\u9884\u589E   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "BK0629     \u5317\u6597\u5BFC\u822A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "BK0881     3D\u73BB\u7483     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "BK0512     \u5316\u5DE5\u539F\u6599   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "BK0920     \u8F66\u8054\u7F51     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "BK0669     \u751F\u6001\u519C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "BK0536     \u57FA\u91D1\u91CD\u4ED3   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "BK0425     \u5DE5\u7A0B\u5EFA\u8BBE   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "BK0581     \u667A\u80FD\u7535\u7F51   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "BK0730     \u519C\u836F\u517D\u836F   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "BK0539     \u7EFC\u5408\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "BK0656     \u667A\u80FD\u7535\u89C6   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "BK0568     \u6DF1\u6210500    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "BK0840     OLED       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "BK0736     \u7535\u4FE1\u8FD0\u8425   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "BK0534     \u6210\u6E1D\u7279\u533A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "BK0492     \u7164\u5316\u5DE5     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "BK0685     \u4E3E\u724C\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "BK0498     AB\u80A1       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "BK0671     \u5F69\u7968\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "BK0545     \u673A\u68B0\u884C\u4E1A   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "BK0433     \u519C\u7267\u9972\u6E14   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "BK0561     \u57FA\u672C\u91D1\u5C5E   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "BK0615     \u4E2D\u836F       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, "BK0910     \u4E13\u7528\u8BBE\u5907   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "BK0738     \u591A\u5143\u91D1\u878D   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "BK0662     \u5728\u7EBF\u6559\u80B2   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, "BK0805     \u949B\u767D\u7C89     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "BK0665     \u7535\u5546\u6982\u5FF5   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, "BK0511     ST\u6982\u5FF5     "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, "BK0597     \u6C34\u5229\u5EFA\u8BBE   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "BK0520     \u793E\u4FDD\u91CD\u4ED3   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "BK0940     \u7F51\u7EA2\u76F4\u64AD   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "BK0506     \u521B\u6295      "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "BK0853     \u7535\u5B50\u7ADE\u6280  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, "BK0891     \u56FD\u4EA7\u82AF\u7247  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, "BK0852     \u51B7\u94FE\u7269\u6D41  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "BK0715     \u822A\u6BCD\u6982\u5FF5  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "BK0816     \u6628\u65E5\u8FDE\u677F  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "BK0570     \u9884\u4E8F\u9884\u51CF  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, "BK0712     \u4E00\u5E26\u4E00\u8DEF  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "BK0882     \u732A\u8089\u6982\u5FF5  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "BK0723     \u9AD8\u9001\u8F6C    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "BK0811     \u8D85\u7EA7\u54C1\u724C  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "BK0818     \u53EF\u71C3\u51B0    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, "BK0683     \u56FD\u4F01\u6539\u9769  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "BK0622     \u5730\u70ED\u80FD    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "BK0702     \u6CAA\u6E2F\u901A    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "BK0810     \u5DE5\u4E1A4.0   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, "BK0552     \u673A\u6784\u91CD\u4ED3  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, "BK0709     \u8D5B\u9A6C\u6982\u5FF5  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "BK0458     \u4EEA\u5668\u4EEA\u8868  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "BK0675     \u75C5\u6BD2\u9632\u6CBB  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, "BK0674     \u84DD\u5B9D\u77F3    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "BK0474     \u4FDD\u9669      "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "BK0692     \u5728\u7EBF\u65C5\u6E38  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "BK0697     IPO\u53D7\u76CA   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "BK0524     \u53C2\u80A1\u671F\u8D27  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, "BK0499     AH\u80A1      "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "BK0830     \u533A\u5757\u94FE    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "BK0473     \u5238\u5546\u4FE1\u6258  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "BK0990     \u5FEB\u9012\u6982\u5FF5  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "BK0612     \u4E0A\u8BC1180_  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, "BK0695     \u5C0F\u91D1\u5C5E    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "BK0950     \u8349\u7518\u81A6    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "BK0595     \u98CE\u80FD      "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "BK0701     \u4E2D\u8BC1500   "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "BK0710     \u91CF\u5B50\u901A\u4FE1  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, "BK0806     \u7CBE\u51C6\u533B\u7597  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "BK0459     \u7535\u5B50\u5143\u4EF6  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "BK0477     \u917F\u9152\u884C\u4E1A  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, "BK0548     \u751F\u7269\u75AB\u82D7  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "BK0808     \u519B\u6C11\u878D\u5408  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, "BK0601     \u6D77\u5DE5\u88C5\u5907  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, "BK0870     \u5355\u6297\u6982\u5FF5  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "BK0633     \u9001\u8F6C\u9884\u671F  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "BK0421     \u9AD8\u901F\u516C\u8DEF  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, "BK0481     \u6C7D\u8F66\u884C\u4E1A  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "BK0725     \u88C5\u4FEE\u88C5\u9970  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, "BK0640     \u667A\u80FD\u673A\u5668  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "BK0815     \u6628\u65E5\u6DA8\u505C  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, "BK0698     \u514D\u75AB\u6CBB\u7597  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "BK0420     \u6C11\u822A\u673A\u573A  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "BK0623     \u6D77\u6D0B\u7ECF\u6D4E  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, "BK0831     \u4E07\u8FBE\u6982\u5FF5  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, "BK0737     \u8F6F\u4EF6\u670D\u52A1  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, "BK0682     \u71C3\u6599\u7535\u6C60  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "BK0478     \u6709\u8272\u91D1\u5C5E  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "BK0501     \u6B21\u65B0\u80A1    "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, "BK0721     PPP\u6A21\u5F0F   "))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
        ref: "snoprice",
        width: 1800,
        height: 1200,
        chartType: "Line",
        data: this.state.chartData,
        options: {
          chart: {
            title: '当前板块的各股票的价格变动',
            subtitle: '当前板块的各股票相对于大盘的价格变动',
            interpolateNulls: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, "\u80A1\u7968\u6982\u5FF5\u8BE6\u60C5\u4E00\u89C8"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, this.state.tableData.map(function (val, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          span: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          },
          __self: this
        }, val.sno), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          span: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          },
          __self: this
        }, val.sname), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          span: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          },
          __self: this
        }, val.hangye), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          span: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421
          },
          __self: this
        }, val.area), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          span: 20,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 422
          },
          __self: this
        }, val.gainian)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424
          },
          __self: this
        }));
      })))));
    }
  }]);

  return PageBKSnosPrices;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/PageGainianPrice.js":
/*!********************************************!*\
  !*** ./src/components/PageGainianPrice.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageGainianPrice; });
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\PageGainianPrice.js";





var PageGainianPrice =
/*#__PURE__*/
function (_Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageGainianPrice, _Component);

  function PageGainianPrice() {
    var _this;

    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageGainianPrice);

    _this = Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageGainianPrice).call(this));
    _this.state = {
      snos: "000778,600723",
      gainianpriceData: {}
    };

    _this.getGainianchartdata();

    return _this;
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageGainianPrice, [{
    key: "search_click",
    value: function search_click(searchText) {
      console.log(searchText);
      this.state.snos = searchText;
    }
  }, {
    key: "getGainianchartdata",
    value: function getGainianchartdata() {
      var _this2 = this;

      this.serverRequest = fetch('https://localhost/api/Price/gainianprice', {
        method: 'GET',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this2.setState({
          gainianpriceData: resJson
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Input"].Search, {
        placeholder: "input your gainian here",
        enterButton: "Search",
        size: "large",
        onSearch: this.search_click.bind(this),
        style: {
          width: 600
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
        ref: "gainianprice",
        width: 1800,
        height: 2800,
        chartType: "Line",
        data: this.state.gainianpriceData,
        options: {
          chart: {
            title: '各个概念板块的价格变动',
            subtitle: '各个概念板块相对于大盘的价格变动',
            interpolateNulls: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))));
    }
  }]);

  return PageGainianPrice;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/PageHome.js":
/*!************************************!*\
  !*** ./src/components/PageHome.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LineChartAjax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LineChartAjax */ "./src/components/LineChartAjax.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _FundGroupChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FundGroupChart */ "./src/components/FundGroupChart.js");
/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BarChart */ "./src/components/BarChart.js");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PieChart */ "./src/components/PieChart.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\PageHome.js";








var PageHome =
/*#__PURE__*/
function (_Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageHome, _Component);

  function PageHome() {
    var _this;

    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageHome);

    _this = Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageHome).call(this));
    _this.state = {
      snos: "000778,600723"
    };
    return _this;
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageHome, [{
    key: "search_click",
    value: function search_click(searchText) {
      console.log(searchText);
      this.setState({
        snos: searchText
      });
      this.refs.jingzichan.refreshAjaxDataState(searchText);
      this.refs.yingyeshouru.refreshAjaxDataState(searchText);
      this.refs.lirunzonge.refreshAjaxDataState(searchText);
      this.refs.fundgroups.refreshAjaxDataState(searchText.split(',')[0]);
      this.refs.fuzhailv.refreshAjaxDataState(searchText);
      this.refs.jingyingjingliuliang.refreshAjaxDataState(searchText);
      this.refs.fenhongchart.refreshAjaxDataState(searchText);
      this.refs.dagudong.refreshAjaxDataState(searchText);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u8D22\u52A1\u57FA\u672C\u9762\u6570\u636E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Input"].Search, {
        placeholder: "input your gainian here",
        enterButton: "Search",
        size: "large",
        onSearch: this.search_click.bind(this),
        style: {
          width: 600
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_BarChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ref: "fenhongchart",
        title: "\u6BCF\u5E02\u503C\u5BF9\u5E94\u5206\u7EA2",
        api: "fenhong",
        snos: this.state.snos,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PieChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
        ref: "dagudong",
        title: "\u63A7\u80A1\u80A1\u4E1C\u60C5\u51B5",
        api: "dagudong",
        sno: this.state.snos.split(',')[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_FundGroupChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: "fundgroups",
        sno: "000778",
        title: "\u6700\u8FD1180\u5929\u6765\u7684\u8D44\u91D1\u6D41\u53D8\u5316\u56FE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LineChartAjax__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: "yingyeshouru",
        tablename: "lirunbiao",
        columnname: "TOTALOPERATEREVE",
        title: "\u6BCF\u5E02\u503C\u5BF9\u5E94\u7684\u8425\u4E1A\u6536\u5165\u8D70\u52BF",
        snos: this.state.snos,
        api: "financepershizhi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LineChartAjax__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: "lirunzonge",
        tablename: "lirunbiao",
        columnname: "SUMPROFIT",
        title: "\u6BCF\u5E02\u503C\u5229\u6DA6\u603B\u989D",
        snos: this.state.snos,
        api: "financepershizhi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), "    ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LineChartAjax__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: "fuzhailv",
        tablename: "zichanfuzhaibiao",
        columnname: "SUMPROFIT",
        title: "\u8D27\u5E01\u8D44\u91D1+\u5E94\u6536\u7968\u636E/\u77ED\u671F\u8D1F\u503A\u603B\u989D",
        snos: this.state.snos,
        api: "fuzhailv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LineChartAjax__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: "jingyingjingliuliang",
        tablename: "xianjinliuliangbiao",
        columnname: "NETOPERATECASHFLOW",
        title: "\u6BCF\u5E02\u503C\u7ECF\u8425\u6D3B\u52A8\u73B0\u91D1\u51C0\u6D41\u91CF",
        snos: this.state.snos,
        api: "financepershizhi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LineChartAjax__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: "jingzichan",
        tablename: "zichanfuzhaibiao",
        columnname: "SUMSHEQUITY",
        title: "\u6BCF\u5E02\u503C\u5BF9\u5E94\u7684\u51C0\u8D44\u4EA7\u8D70\u52BF",
        snos: this.state.snos,
        api: "financepershizhi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })));
    }
  }]);

  return PageHome;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PageHome);

/***/ }),

/***/ "./src/components/PagePrice.js":
/*!*************************************!*\
  !*** ./src/components/PagePrice.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PagePrice; });
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\PagePrice.js";




/** 
 * 这个是价格的变化数据
*/

var PagePrice =
/*#__PURE__*/
function (_Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PagePrice, _Component);

  function PagePrice() {
    var _this;

    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PagePrice);

    _this = Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PagePrice).call(this));
    _this.state = {
      snos: "000778,600723",
      d3chgChartData: {},
      hangyepriceData: {},
      hangyeindexRate: {}
    };

    _this.getd3chgChartData("000778,600723");

    _this.getHangyechartdata();

    _this.getHangyeIndexRatechartdata();

    return _this;
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PagePrice, [{
    key: "search_click",
    value: function search_click(searchText) {
      console.log(searchText);
      this.state.snos = searchText;
    }
  }, {
    key: "getd3chgChartData",
    value: function getd3chgChartData(snostring) {
      var _this2 = this;

      var postData = snostring.split(',');
      this.serverRequest = fetch('https://localhost/api/Price/d3relchg', {
        method: 'POST',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this2.setState({
          d3chgChartData: resJson
        });
      });
    }
  }, {
    key: "getHangyechartdata",
    value: function getHangyechartdata() {
      var _this3 = this;

      this.serverRequest = fetch('https://localhost/api/Price/hangyeprice', {
        method: 'GET',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this3.setState({
          hangyepriceData: resJson
        });
      });
    }
  }, {
    key: "getHangyeIndexRatechartdata",
    value: function getHangyeIndexRatechartdata() {
      var _this4 = this;

      this.serverRequest = fetch('https://localhost/api/Price/hangyeindexrate', {
        method: 'GET',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this4.setState({
          hangyeindexRate: resJson
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Input"].Search, {
        placeholder: "input your gainian here",
        enterButton: "Search",
        size: "large",
        onSearch: this.search_click.bind(this),
        style: {
          width: 600
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
        ref: "d3relchg",
        width: 880,
        height: 300,
        chartType: "Line",
        data: this.state.d3chgChartData,
        snos: this.state.snos,
        options: {
          chart: {
            title: '3日累积变化',
            subtitle: '当前价格比过去3日价格的变化',
            interpolateNulls: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
        ref: "hangyeprice",
        width: 1800,
        height: 1800,
        chartType: "Line",
        data: this.state.hangyepriceData,
        options: {
          chart: {
            title: '各个行业的价格变动',
            subtitle: '各个行业相对于大盘的价格变动',
            interpolateNulls: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
        ref: "hangyeindexrate",
        width: 1800,
        height: 1800,
        chartType: "Line",
        data: this.state.hangyeindexRate,
        options: {
          chart: {
            title: '各个行业的相对于大盘的比值变化',
            subtitle: '各个行业的相对于大盘的比值变化',
            interpolateNulls: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })));
    }
  }]);

  return PagePrice;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/PieChart.js":
/*!************************************!*\
  !*** ./src/components/PieChart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PieChart; });
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");





var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\components\\PieChart.js";



var PieChart =
/*#__PURE__*/
function (_React$Component) {
  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PieChart, _React$Component);

  function PieChart(props) {
    var _this;

    Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PieChart);

    _this = Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PieChart).call(this, props));
    _this.state = {
      chartData: {}
    };
    return _this;
  }

  Object(C_Users_john_Learning_Projects_SqliteFFApi_SqliteFFApi_ClientApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PieChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshAjaxDataState(this.props.sno);
    }
  }, {
    key: "refreshAjaxDataState",
    value: function refreshAjaxDataState(sno) {
      var _this2 = this;

      console.log("refreshAjaxDataState start");
      this.serverRequest = fetch('https://localhost/api/Page/' + this.props.api + '?sno=' + sno, {
        method: 'GET',
        mode: 'cors',
        //credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (resJson) {
        _this2.setState({
          chartData: resJson
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_google_charts__WEBPACK_IMPORTED_MODULE_6__["Chart"], {
        width: '800px',
        height: '300px',
        chartType: "PieChart",
        loader: react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "Loading Chart"),
        data: this.state.chartData,
        options: {
          // Material design options
          chart: {
            title: this.props.title,
            subtitle: ''
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    }
  }]);

  return PieChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "C:\\Users\\john\\Learning\\Projects\\SqliteFFApi\\SqliteFFApi\\ClientApp\\src\\index.js";




 // import {Router,Route,hashHistory} from 'react-router';
// import Tech from './components/Tech';

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\john\Learning\Projects\SqliteFFApi\SqliteFFApi\ClientApp\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\john\Learning\Projects\SqliteFFApi\SqliteFFApi\ClientApp\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map