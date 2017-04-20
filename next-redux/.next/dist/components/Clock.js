'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Marcio\\Documents\\React\\Tutorialreactapp\\next-redux\\components\\Clock.js';

exports.default = function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', { className: light ? 'light' : '', 'data-jsx': 2133350788,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
    styleId: 2133350788,
    css: 'div[data-jsx="2133350788"] {padding: 15px;display: inline-block;color: #82FA58;font: 50px menlo, monaco, monospace;background-color: #000;}.light[data-jsx="2133350788"] {background-color: #999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl3QixBQUNYLDRCQUNXLGNBQ1Esc0JBQ1AsZUFDcUIsb0NBQ2IsdUJBQ3hCLENBQ08sK0JBQ2lCLHVCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzXFxDbG9jay5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9NYXJjaW8vRG9jdW1lbnRzL1JlYWN0L1R1dG9yaWFscmVhY3RhcHAvbmV4dC1yZWR1eCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGxhc3RVcGRhdGUsIGxpZ2h0IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xpZ2h0ID8gJ2xpZ2h0JyA6ICcnfT5cclxuICAgICAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShsYXN0VXBkYXRlKSl9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjODJGQTU4O1xyXG4gICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgZm9ybWF0ID0gdCA9PiBgJHtwYWQodC5nZXRVVENIb3VycygpKX06JHtwYWQodC5nZXRVVENNaW51dGVzKCkpfToke3BhZCh0LmdldFVUQ1NlY29uZHMoKSl9YFxyXG5cclxuY29uc3QgcGFkID0gbiA9PiBuIDwgMTAgPyBgMCR7bn1gIDogbiJdfQ== */\n/*@ sourceURL=components\\Clock.js */'
  }));
};

var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};