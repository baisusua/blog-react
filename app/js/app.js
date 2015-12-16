'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// var AMR = require('amazeui-react');
// var Topbar = AMR.Topbar;
// var Nav = AMR.Nav;
// var CollapsibleNav = AMR.CollapsibleNav;

var RouteLink  = require('./components/RouteLink');
var SiteFooter = require('./components/SiteFooter');

var App = React.createClass({
  render: function() {
    return (
        <div>
            <RouteLink to="/">首页</RouteLink>
            <RouteLink to="page1">页面 1</RouteLink>
            <RouteLink to="page2">页面 2</RouteLink>
            <main className="ask-main">
               {this.props.children}
            </main>
            <SiteFooter />
        </div>
    );
  }
});

// Pages
var Index = require('./pages/Index');
var Page1 = require('./pages/Page1');
var Page2 = require('./pages/Page2');

var routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path='page1' component={Page1} />
      <Route path='page2' component={Page2} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
