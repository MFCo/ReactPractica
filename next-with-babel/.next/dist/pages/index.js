'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

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