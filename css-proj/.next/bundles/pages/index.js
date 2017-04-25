
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

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _fgLoadcss = __webpack_require__(571);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Marcio\\Documents\\React\\Tutorialreactapp\\css-proj\\pages\\index.js?entry";


var stylesheet = (0, _fgLoadcss.loadCSS)("../components/simple.css");

var Index = function Index() {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement("p", { className: "simple", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, "Hello Next.js"));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Marcio\\Documents\\React\\Tutorialreactapp\\css-proj\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Marcio\\Documents\\React\\Tutorialreactapp\\css-proj\\pages\\index.js"); } } })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz82YzMwYjE1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVE7Ozs7Ozs7QUFFUixJQUFJLGFBQWEsd0JBQVM7O0FBRTFCLElBQU0sUUFBUTsyQkFDVjs7c0JBQUE7d0JBQ0k7QUFESjtBQUFBLHVCQUNJLHFCQUFHLFdBQVc7c0JBQWQ7d0JBQUE7QUFBQTtPQUFBO0FBSVI7O2tCQUFlLE0iLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2FkQ1NTfSBmcm9tIFwiZmctbG9hZGNzc1wiO1xyXG5cclxudmFyIHN0eWxlc2hlZXQgPSBsb2FkQ1NTKCBcIi4uL2NvbXBvbmVudHMvc2ltcGxlLmNzc1wiICk7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtcInNpbXBsZVwifT5IZWxsbyBOZXh0LmpzPC9wPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        