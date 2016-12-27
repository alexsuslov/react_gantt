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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _gantt = require('../css/gantt.css');

var _gantt2 = _interopRequireDefault(_gantt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = false;

var Box = function (_React$Component) {
  (0, _inherits3.default)(Box, _React$Component);

  function Box() {
    (0, _classCallCheck3.default)(this, Box);
    return (0, _possibleConstructorReturn3.default)(this, (Box.__proto__ || (0, _getPrototypeOf2.default)(Box)).apply(this, arguments));
  }

  (0, _createClass3.default)(Box, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var from = props.from,
          to = props.to;
      var cell = props.cell,
          label = props.label,
          name = props.name,
          customClass = props.customClass,
          start = props.start,
          stop = props.stop,
          k = props.k;

      if (from > to) {
        debug && console.error('Entery error: From > To!', label, name);
        var _ref = [from, to];
        to = _ref[0];
        from = _ref[1];
      }
      var _from = from < start ? start : from;
      var _to = to < stop ? to : stop;
      var style = {
        left: (_from - start) / k,
        width: (_to - _from) / k
      };
      return _react2.default.createElement(
        'div',
        { style: style, className: (0, _classnames2.default)(_gantt2.default.entry, _gantt2.default[customClass]) },
        label
      );
    }
  }]);
  return Box;
}(_react2.default.Component);

;

exports.default = Box;