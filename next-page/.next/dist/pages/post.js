'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', null, props.movie.Title), _react2.default.createElement('p', null, props.movie.Plot), _react2.default.createElement('img', { src: props.movie.Poster }));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
    var id, res, movie;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('http://www.omdbapi.com/?i=' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            movie = _context.sent;

            console.log('Fetched movie: ' + movie.Title);

            return _context.abrupt('return', { movie: movie });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;