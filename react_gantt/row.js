'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _gantt = require('../css/gantt.css');

var _gantt2 = _interopRequireDefault(_gantt);

var _box = require('./box');

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(props) {
  var cell = props.cell,
      start = props.start,
      stop = props.stop;

  return _react2.default.createElement(
    'div',
    { className: _gantt2.default.row },
    props.values.map(function (v, key) {
      return _react2.default.createElement(_box2.default, (0, _extends3.default)({}, props, v, { key: key }));
    })
  );
};

exports.default = Row;