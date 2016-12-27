'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('../css/style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Left = function Left(props) {
  var cell = props.cell,
      data = props.data,
      space = props.space;

  var style = { height: space * cell };
  return _react2.default.createElement(
    'div',
    { className: _style2.default.column },
    _react2.default.createElement('div', { className: _style2.default.spacer, style: style }),
    data.map(function (v, key) {
      return _react2.default.createElement(
        'div',
        { key: key, className: _style2.default.row },
        _react2.default.createElement(
          'div',
          { className: _style2.default.name },
          v.name
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.desc },
          v.desc
        )
      );
    })
  );
};

exports.default = Left;