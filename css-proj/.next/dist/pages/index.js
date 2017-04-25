"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _fgLoadcss = require("fg-loadcss");

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