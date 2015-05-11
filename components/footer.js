'use strict'

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div id="footer">      	
        <footer>
          <span><a href="/mentions">Mentions légales</a></span>          
        </footer>
      </div>
    )
  }
});

module.exports = Footer;