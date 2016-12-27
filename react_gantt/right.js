'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _dec, _dec2, _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactKeydown = require('react-keydown');

var _reactKeydown2 = _interopRequireDefault(_reactKeydown);

var _gantt = require('./gantt');

var _gantt2 = _interopRequireDefault(_gantt);

var _style = require('../css/style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Right = (_dec = (0, _reactKeydown2.default)('='), _dec2 = (0, _reactKeydown2.default)('-'), (_class = function (_React$Component) {
  (0, _inherits3.default)(Right, _React$Component);

  function Right(props) {
    (0, _classCallCheck3.default)(this, Right);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Right.__proto__ || (0, _getPrototypeOf2.default)(Right)).call(this, props));

    ['Plus', 'Minus', 'Wheel'].forEach(function (v) {
      _this['handle' + v] = _this['handle' + v].bind(_this);
    });
    return _this;
  }

  (0, _createClass3.default)(Right, [{
    key: 'handlePlus',
    value: function handlePlus(e) {
      this.props.setZoom(0);
    }
  }, {
    key: 'handleMinus',
    value: function handleMinus(e) {
      this.props.setZoom(1);
    }
  }, {
    key: 'handleWheel',
    value: function handleWheel(e) {
      this.props.setZoom(!(e.deltaY > 0));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.right,
          onWheel: this.handleWheel
        },
        _react2.default.createElement(_gantt2.default, this.props)
      );
    }
  }]);
  return Right;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handlePlus', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'handlePlus'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMinus', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'handleMinus'), _class.prototype)), _class));
;

exports.default = Right;