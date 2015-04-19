'use strict';

// react base
var React = require('react');

// router
// var Router = require('react-router'); // or var Router = ReactRouter; in browsers
// var DefaultRoute = Router.DefaultRoute;
// var Link = Router.Link;
// var Route = Router.Route;
// var RouteHandler = Router.RouteHandler;

var Application = require('./components/index.js'); 

// data
var json = require("./chapters-v1.json");

var APP = React.createClass({  
  render: function() {    
    return (
      <html>
        <head>
          <title>Apis Lazuli Consulting</title>
          <link rel="stylesheet" type="text/css" href="public/stylesheets/grid.css" />
          <link rel="stylesheet" type="text/css" href="public/stylesheets/main-v3.css" />
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.6/animate.min.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        </head>
        <body>
          <Application site={json} />
          <script src='public/bundle.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = APP;

if(typeof document !== 'undefined' && window) {
  window.onload = function() {
    React.render(APP(), document);
  }
};
