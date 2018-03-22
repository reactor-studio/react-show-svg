'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _svgToJsx = require('svg-to-jsx');

var _svgToJsx2 = _interopRequireDefault(_svgToJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactShowSvg = function (_Component) {
  _inherits(ReactShowSvg, _Component);

  function ReactShowSvg(props) {
    _classCallCheck(this, ReactShowSvg);

    var _this = _possibleConstructorReturn(this, (ReactShowSvg.__proto__ || Object.getPrototypeOf(ReactShowSvg)).call(this, props));

    _this.svgToJsx = function (raw) {
      // parse then render & save icon
      return _this.parseSvg(raw).then(function (jsx) {
        var icon = _this.renderIcon(jsx);

        _this.setState({ icon: icon });
      });
    };

    _this.parseSvg = function (raw) {
      var _this$props = _this.props,
          size = _this$props.size,
          width = _this$props.width,
          height = _this$props.height,
          fill = _this$props.fill;

      // parse svg to jsx

      return (0, _svgToJsx2.default)(raw, {
        props: {
          width: size || width,
          height: size || height,
          fill: fill
        }
      }).then(function (jsx) {
        return jsx;
      });
    };

    _this.state = {
      icon: null
    };
    return _this;
  }

  _createClass(ReactShowSvg, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var icon = this.props.icon;

      // check if icon exists

      icon && this.svgToJsx(icon);
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(jsx) {
      var _props = this.props,
          id = _props.id,
          ref = _props.ref,
          className = _props.className,
          onClick = _props.onClick;

      // wrap svg icon inside div & set props

      var icon = _react2.default.createElement('div', {
        id: id,
        ref: ref,
        onClick: onClick,
        className: className,
        dangerouslySetInnerHTML: { __html: jsx }
      });

      return icon;
    }
  }, {
    key: 'render',
    value: function render() {
      var icon = this.state.icon;

      // return icon when ready

      return icon ? icon : null;
    }
  }]);

  return ReactShowSvg;
}(_react.Component);

ReactShowSvg.defaultProps = {
  width: '20px',
  height: '20px',
  fill: 'black'
};

ReactShowSvg.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.string,
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  height: _propTypes2.default.string,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  id: _propTypes2.default.string,
  ref: _propTypes2.default.func
};

exports.default = ReactShowSvg;