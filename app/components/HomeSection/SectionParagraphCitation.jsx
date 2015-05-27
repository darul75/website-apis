import React from 'react';
import { PropTypes } from 'react';


export default class SectionParagraphCitation extends React.Component {
  constructor() {
    super();
  }  

  render() {
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

};

SectionParagraphCitation.prototype.displayName = "SectionParagraphCitation";
