'use strict'

var React = require('react');

var Citation = React.createClass({
  render: function() {
    var citationMarkup = ""    
    if (this.props.citation) {
      var citationAddClass = this.props.citation.class ? this.props.citation.class : '';
      var citationClassname = "citation " + citationAddClass;
      citationMarkup =         
        <div className={citationClassname}>
          <div className="text">{this.props.citation.text}
            <div className="author">{this.props.citation.author}</div>
          </div>          
        </div>                
    } else {
      citationMarkup = <div></div>
    }   
    return React.DOM.div({}, citationMarkup);
  }
});

module.exports = Citation;