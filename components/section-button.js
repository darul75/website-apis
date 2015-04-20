'use strict'

var React = require('react');

var LightButton = React.createClass({  
  mouseOver: function(evt) {    
    this.props.onLightButtonOver();
    evt.preventDefault();
  },
  mouseOut: function(evt) {    
    this.props.onLightButtonOut();
    evt.preventDefault();
  },
  render: function() {    
    return (
      <div className="fake-lamp" onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut}>
        <i className="fa fa-lightbulb-o fa-3x fa-inverse animated bounce"></i>
      </div>
    );
  }
});

module.exports = LightButton;