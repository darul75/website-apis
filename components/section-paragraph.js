'use strict'

var React = require('react');

var Paragraph = React.createClass({
  render: function() {
    var paragraphNodes = "";
    var self = this;
    if (this.props.paragraphs) {
      paragraphNodes = this.props.paragraphs.map(function(paragraph, index) {
        var paragraphMarkup = "";
        var paragraphKey = 'para'+index;
        var paragraphStyle = index === 0 ? {marginTop: 0} : {};
        paragraphStyle = index === self.props.paragraphs.length - 1 ? {marginBottom: 0} : paragraphStyle;
        if (self.props.right) {
          paragraphStyle['marginRight'] = 20;
        }
  
        if (typeof paragraph === 'object') {
          switch (paragraph.type) {
            case 'vcard': 
            paragraphMarkup = <div key={paragraphKey} id={paragraph.vcard.id} className="vcard">
              <div className="org"><b>{paragraph.vcard.org}</b></div>
              <a className="email" href={paragraph.vcard.email}>contact@apis-lazuli-consulting.fr</a>
              <div className="adr">
              <div className="street-address">{paragraph.vcard.address.street}</div>
              <span className="locality">{paragraph.vcard.address.locality}</span>, <span className="postal-code">{paragraph.vcard.address.postal}</span>
             </div>             
            </div>
            break;
            case 'vcard-person': 
            paragraphMarkup = <div key={paragraphKey} id={paragraph.vcard.id} className="vcard">
              <div className="name"><b>{paragraph.vcard.name}</b></div>
              <div className="title">{paragraph.vcard.title}</div>
              <div className="tel">{paragraph.vcard.phone}</div>            
            </div>
            break;
            case 'html':
              paragraphMarkup = <div key={paragraphKey} dangerouslySetInnerHTML={{__html: paragraph.text}}></div>
            break;
            case 'html-paragraph':
              paragraphMarkup = <p key={paragraphKey} dangerouslySetInnerHTML={{__html: paragraph.text}}></p>
            break;
            default:
              paragraphMarkup = <div key={paragraphKey}>
                <div className="rectangle color-2"></div>
                <p className={paragraph.type}>{paragraph.text}</p>
              </div>
            break;
          }                            
        } else {
          paragraphMarkup = <p style={paragraphStyle} key={paragraphKey} dangerouslySetInnerHTML={{__html: paragraph}}></p>
        }

        return React.DOM.div({key: paragraphKey}, paragraphMarkup);        
      });
    }

    return React.DOM.div({className:'chapter-paragraph'}, paragraphNodes);
  }
});

module.exports = Paragraph;