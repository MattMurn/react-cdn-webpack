var _this2 = this;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var container = document.querySelector('#react-tag');
var hooksButtonContainer = document.querySelector('#hooksButton');

'use strict';

var e = React.createElement;

var button = function (_React$Component) {
  _inherits(button, _React$Component);

  function button(props) {
    _classCallCheck(this, button);

    var _this = _possibleConstructorReturn(this, (button.__proto__ || Object.getPrototypeOf(button)).call(this, props));

    _this.updateState = function () {
      console.log(_this.state.clicked);
      return _this.setState({ clicked: true });
    };

    _this.state = { clicked: false };
    _this.updateState = _this.updateState.bind(_this);
    return _this;
  }

  _createClass(button, [{
    key: 'render',
    value: function render() {
      console.log(this.state);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          'has button been clicked: ',
          this.state.clicked
        ),
        React.createElement(
          'button',
          { onClick: this.updateState },
          'class component button'
        )
      );
    }
  }]);

  return button;
}(React.Component);

var hooksButton = function hooksButton() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      clicked = _React$useState2[0],
      setClicked = _React$useState2[1];

  console.log('hello from the hooks button');
  logger = function logger() {
    console.log(clicked);
    setClicked("this could be a pretty sweet function");
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      clicked
    ),
    React.createElement(
      'button',
      { onClick: _this2.logger },
      'hooks button'
    )
  );
};
ReactDOM.render(e(button), container);
ReactDOM.render(e(hooksButton), hooksButtonContainer);