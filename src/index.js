const React = require('react');
const ReactDOM = require('react-dom');
const jQuery = require('jQuery')
const App = require('./components/App');  /*relative file path to linked component*/



ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
