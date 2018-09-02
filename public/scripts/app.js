'use strict';

var visibility = false;

var toogleVisibility = function toogleVisibility() {
  visibility = !visibility;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toogleVisibility },
      visibility ? 'Show details' : 'Hide details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { disabled: !visibility },
        'Hey. These are some details you can now see.'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
render();
