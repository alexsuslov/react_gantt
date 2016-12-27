'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gantt = require('../css/gantt.css');

var _gantt2 = _interopRequireDefault(_gantt);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gantt = function Gantt(props) {
  var cell = props.cell,
      start = props.start,
      stop = props.stop,
      width = props.width;

  var style = { width: width };
  return _react2.default.createElement(
    'div',
    { className: _gantt2.default.gantt, style: style },
    props.data.map(function (v, key) {
      return _react2.default.createElement(_row2.default, (0, _extends3.default)({}, props, v, { key: key }));
    })
  );
};

exports.default = Gantt;