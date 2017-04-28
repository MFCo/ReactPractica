
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Marcio\\Documents\\React\\Tutorialreactapp\\next-with-babel\\pages\\index.js?entry';


var MyLuckNo = function (_React$Component) {
    (0, _inherits3.default)(MyLuckNo, _React$Component);

    function MyLuckNo() {
        var _ref;

        (0, _classCallCheck3.default)(this, MyLuckNo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyLuckNo.__proto__ || (0, _getPrototypeOf2.default)(MyLuckNo)).call.apply(_ref, [this].concat(args)));

        _this.state = { randomNo: null };
        return _this;
    }

    (0, _createClass3.default)(MyLuckNo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.recalculate();
        }
    }, {
        key: 'recalculate',
        value: function recalculate() {
            this.setState({
                randomNo: Math.ceil(Math.random() * 100)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var randomNo = this.state.randomNo;

            if (randomNo === null) {
                return _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, 'Please wait..');
            }

            // This is an experimental JavaScript feature where we can get with
            // using babel-preset-stage-0
            var message = randomNo < 30 ? 'Do not give up. Try again.' : randomNo < 60 ? 'You are a lucky guy' : 'You are soooo lucky!';

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Your Lucky number is: "', randomNo, '"'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, message), _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2.recalculate();
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Try Again'));
        }
    }]);

    return MyLuckNo;
}(_react2.default.Component);

exports.default = MyLuckNo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Marcio\\Documents\\React\\Tutorialreactapp\\next-with-babel\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Marcio\\Documents\\React\\Tutorialreactapp\\next-with-babel\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9jMGZkMjg4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7Ozs7Ozs7SUFFYztzQ0FDakI7O3dCQUFxQjtZQUFBOzs0Q0FBQTs7MENBQUEsbURBQU47QUFBTTtBQUFBOzt5S0FFakI7O2NBQUssUUFBUSxFQUFFLFVBQVU7ZUFDNUI7Ozs7OzRDQUdHO2lCQUNIOzs7O3NDQUdHO2lCQUFLOzBCQUNTLEtBQUssS0FBSyxLQUFLLFdBRWhDO0FBRk87Ozs7aUNBSUM7eUJBQUE7O2dCQUNHLFdBQWEsS0FBSyxNQUUxQjs7Z0JBQUksYUFBYSxNQUNiO3VDQUFROztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBQ1g7QUFFRDs7QUFDQTtBQUNBO2dCQUFNLFVBQ0UsV0FBVyxLQUVYLCtCQUNPLFdBQVcsS0FFbEIsd0JBT1o7O21DQUNROzs4QkFBQTtnQ0FDSTtBQURKO0FBQUEsK0JBQ0k7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUE0QiwyQkFBNUIsVUFDQTs7OEJBQUE7Z0NBQUk7QUFBSjtBQUFBLGVBQ0Esb0RBQVEsU0FBUzsyQkFBTSxPQUFLO0FBQTVCOzhCQUFBO2dDQUFBO0FBQUE7ZUFHWDs7Ozs7RUE3Q2lDLGdCQUFNOztrQkFBdkIsUyIsImZpbGUiOiJidW5kbGVzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUx1Y2tObyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncylcclxuICAgICAgICB0aGlzLnN0YXRlID0geyByYW5kb21ObzogbnVsbCB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxjdWxhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJhbmRvbU5vOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHJhbmRvbU5vIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIGlmIChyYW5kb21ObyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxwPlBsZWFzZSB3YWl0Li48L3A+KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBleHBlcmltZW50YWwgSmF2YVNjcmlwdCBmZWF0dXJlIHdoZXJlIHdlIGNhbiBnZXQgd2l0aFxyXG4gICAgICAgIC8vIHVzaW5nIGJhYmVsLXByZXNldC1zdGFnZS0wXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvIHtcclxuICAgICAgICAgICAgaWYgKHJhbmRvbU5vIDwgMzApIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgICAgICdEbyBub3QgZ2l2ZSB1cC4gVHJ5IGFnYWluLidcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21ObyA8IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgICAgICAnWW91IGFyZSBhIGx1Y2t5IGd1eSdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgICAgICdZb3UgYXJlIHNvb29vIGx1Y2t5ISdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPllvdXIgTHVja3kgbnVtYmVyIGlzOiBcIntyYW5kb21Ob31cIjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucmVjYWxjdWxhdGUoKX0+VHJ5IEFnYWluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        