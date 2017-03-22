var React = require('react');
var ReactDOM = require('react-dom');
//Destructuring syntax, each one of the object's attribute is the same as
//including "var Route = require('react-router').Route;""
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Index = require('Index');
var About = require('About');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={Index}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
