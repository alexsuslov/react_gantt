'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _style = require('../css/style.css');

var _style2 = _interopRequireDefault(_style);

var _left = require('./left');

var _left2 = _interopRequireDefault(_left);

var _right = require('./right');

var _right2 = _interopRequireDefault(_right);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDays = function createDays(from, to) {
  var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';

  var data = [];
  var i = from;
  var tmp = void 0;
  while (i < to) {
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = i.getDate();
    i = i.setDate(tmp.label + 1);
    tmp.to = i + 0;
    data.push(tmp);
  }
  return data;
};

var createWeekDays = function createWeekDays(from, to) {
  var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';

  var data = [];
  var i = from;
  var tmp = void 0;
  while (i < to) {
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = (0, _moment2.default)(i).format('ddd');
    i = i.setDate(i.getDate() + 1);
    tmp.to = i + 0;
    data.push(tmp);
  }
  return data;
};

var createWeeks = function createWeeks(from, to) {
  var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'week';

  var data = [];
  var i = new Date(from);
  i = i.setDate(i.getDate() - i.getDay(), 0, 0, 0);
  var tmp = void 0;
  while (i < to) {
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = (0, _moment2.default)(i).format('W');
    i = i.setDate(i.getDate() + 7);
    tmp.to = i;
    data.push(tmp);
  }
  return data;
};

var createMonths = function createMonths(from, to) {
  var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'month';

  var data = [];
  var i = new Date(from);
  i = i.setDate(1, 0, 0, 0);
  var tmp = void 0;
  while (i < to) {
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = cls === 'month' ? (0, _moment2.default)(i).format('MMMM') : (0, _moment2.default)(i).format('MMM');
    i = i.setMonth(i.getMonth() + 1);
    tmp.to = i;
    data.push(tmp);
  }
  return data;
};

var createYears = function createYears(from, to) {
  var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'year';

  var data = [];
  var i = new Date(from);
  i.setMonth(0, 1, 0, 0, 0);
  i = i.getTime();
  var tmp = void 0;
  while (i < to) {
    tmp = { from: i, customClass: cls };
    i = new Date(i);
    tmp.label = i.getFullYear();
    i = i.setFullYear(tmp.label + 1);
    tmp.to = i;
    data.push(tmp);
  }
  return data;
};

var Time = {
  s: function s(t) {
    return t * 1000;
  },
  m: function m(t) {
    return this.s(t * 60);
  },
  h: function h(t) {
    return this.m(t * 60);
  },
  d: function d(t) {
    return this.h(t * 24);
  },
  w: function w(t) {
    return this.d(t * 7);
  }
};

var Zooms = ['day', 'week', 'month'];

var Gantt = function (_React$Component) {
  (0, _inherits3.default)(Gantt, _React$Component);

  function Gantt() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Gantt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Gantt.__proto__ || (0, _getPrototypeOf2.default)(Gantt)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      zoom: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Gantt, [{
    key: 'setZoom',
    value: function setZoom(val) {
      var state = this.state;
      var zoom = val ? state.zoom + 1 : state.zoom - 1;
      if (Zooms[zoom]) {
        this.setState((0, _extends3.default)({}, state, { zoom: zoom }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _extends3.default)({}, this.props, { setZoom: this.setZoom.bind(this) });
      var k = void 0,
          start = void 0,
          stop = void 0,
          cells = void 0,
          width = void 0,
          space = void 0;
      var data = [];

      var cell = props.cell,
          zoom = props.zoom;


      switch (Zooms[this.state.zoom]) {
        case 'month':
          k = Time.d(365 / 12) / cell;
          start = new Date(props.start);
          start.setDate(1, 0, 0, 0);
          start.setMonth(start.getMonth() - 3);

          stop = new Date(props.stop);
          stop.setMonth(stop.getMonth() + 3);
          stop.setDate(-1, 0, 0, 0);
          var arMonths = createMonths(start, stop, 'day');
          width = arMonths.length * cell;
          data.push({ values: createYears(start, stop) });
          data.push({ values: arMonths });
          space = 2;
          break;

        case 'week':
          k = Time.d(7) / cell;
          start = new Date(props.start);
          start.setHours(0, 0, 0);
          start.setDate(start.getDate() - start.getDay() - 3 * 7);

          stop = new Date(props.stop);
          stop.setHours(0, 0, 0);
          stop.setDate(stop.getDate() - start.getDay() + 3 * 7 - 1);
          var arWeeks = createWeeks(start, stop);
          width = arWeeks.length * cell;
          data.push({ values: createYears(start, stop) });
          data.push({ values: createMonths(start, stop) });
          data.push({ values: arWeeks });
          space = 3;
          break;

        default:
          start = new Date(props.start);
          start.setHours(0, 0, 0);
          start.setDate(start.getDate() - 3);

          stop = new Date(props.stop);
          stop.setHours(0, 0, 0);
          stop.setDate(stop.getDate() + 4);
          k = Time.d(1) / cell;
          var arDays = createDays(start, stop);
          width = arDays.length * cell;
          data.push({ values: createYears(start, stop) });
          data.push({ values: createMonths(start, stop) });
          data.push({ values: arDays });
          data.push({ values: createWeekDays(start, stop) });
          space = 4;
      }

      var propsLeft = {
        space: space, data: props.data, cell: cell
      };

      var propsRight = (0, _extends3.default)({}, props, {
        start: start, stop: stop, space: space, width: width, k: k,
        data: [].concat(data, (0, _toConsumableArray3.default)(props.data))
      });

      return _react2.default.createElement(
        'div',
        { className: _style2.default.gantt },
        _react2.default.createElement(_left2.default, propsLeft),
        _react2.default.createElement(_right2.default, propsRight)
      );
    }
  }]);
  return Gantt;
}(_react2.default.Component);

;

exports.default = Gantt;