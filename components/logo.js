'use strict'

var React = require('react');

var Logo = React.createClass({
  render: function() {
    return (
      <div className="logo-white">        
        <a href="#accueil">
          <img src="public/images/logo-blanc.svg" height="200px" className="logo-home animated bounce" />
        </a>
      </div>
    )
  }
});

module.exports = Logo;