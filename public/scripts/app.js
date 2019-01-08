'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToogle = function (_React$Component) {
  _inherits(VisibilityToogle, _React$Component);

  function VisibilityToogle(props) {
    _classCallCheck(this, VisibilityToogle);

    var _this = _possibleConstructorReturn(this, (VisibilityToogle.__proto__ || Object.getPrototypeOf(VisibilityToogle)).call(this, props));

    _this.handelToggleVisibility = _this.handelToggleVisibility.bind(_this);
    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(VisibilityToogle, [{
    key: 'handelToggleVisibility',
    value: function handelToggleVisibility() {
      this.setState(function (state) {
        return {
          visibility: !state.visibility
        };
      });
      console.log(this.state.visibility);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.handelToggleVisibility },
          this.state.visibility ? 'Hide details' : 'Show Details'
        ),
        this.state.visibility && React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'Hey. These are some details you can now see!'
          )
        )
      );
    }
  }]);

  return VisibilityToogle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToogle, null), document.getElementById('app'));

// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };
//
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(jsx, document.getElementById('app'));
// };
//
// render();
