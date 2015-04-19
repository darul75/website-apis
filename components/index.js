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

var Menu = React.createClass({
  render: function() {    
      if (this.props.data && this.props.data.menus) {                  
        var menusNodes = this.props.data.menus.map(function(menu, index) {        
         
          var keyChap = "menu"+index;                         
          return (
            <li key={keyChap}>
              <a href={menu.path} >
                {menu.text}
              </a>
            </li>          
          );
          
        });      

        return (
         <div className="header_menu">      
          <header className="menu-nav ">        
            <ul id="menu-menu-principal" className="menu">
              <li>
                <a href="/">
                  <img src="public/images/logo-blue.svg" height="80" />
                </a>
              </li>
              {menusNodes}
            </ul>                    
          </header>
        </div>
        )        
    }
            
    return React.DOM.div();    
  }
});

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
             <div className="tel">{paragraph.vcard.phone}</div>            
            </div>
            break;
            case 'vcard-person': 
            paragraphMarkup = <div key={paragraphKey} id={paragraph.vcard.id} className="vcard">
              <div className="name"><b>{paragraph.vcard.name}</b></div>                           
              <div className="title">{paragraph.vcard.title}</div>
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
        <i className="fa fa-lightbulb-o fa-2x fa-inverse animated bounce"></i>
      </div>
    );
  }
});

var ChapterList = React.createClass({
  getInitialState: function() {
    return {
      height: 0
    };
  }, 
  componentDidMount: function() {
    if (document) {
      this.setState({height: document.body.clientHeight});
      $("#app").fadeIn();
    }
  },    
  lightButtonOver: function(index, pathId) {
    var domElt = $('#' + pathId + ' .story');
    var domEltCitation = $('#' + pathId + ' .story .citation');
    var domEltButtons = $('.fa.fa-lightbulb-o');
    var domEltLogo = $('.logo-white');
    
    domEltLogo.hide();
    domEltCitation.hide();
    domElt.addClass('no-bg');
    domEltButtons.addClass('hover');
  },
  lightButtonOut: function(index, pathId) {
    var domElt = $('#' + pathId + ' .story');    
    var domEltCitation = $('#' + pathId + ' .story .citation');
    var domEltButtons = $('.fa.fa-adjust');
    var domEltLogo = $('.logo-white');
    domEltLogo.show();
    domEltCitation.show();
    domElt.removeClass('no-bg');
    domEltButtons.removeClass('hover'); 
  },
  render: function() {
    if (this.props.data && this.props.data.sections) {
      var self = this;      
      var sectionHeight = {
        height : this.state.height ? this.state.height : 0
      };      
          
      var immersiveMarkup = "";      
      var chaptersNodes = this.props.data.sections.map(function(section, index) {        
       
        var keyChap = "chap"+index;        

        if (section.chapter) {  
          var homeCss = index === 0 ? '' : '';
          var logo = index === 0 ? <Logo /> : '';          
          var parallaxStyle;
          var parallaxImage;
          var velocity = '';
          var lightButton = '';

          if (section.immersive) {            
            
            parallaxStyle = {
              background: 'url('+section.immersive.img+') 50% 0 no-repeat fixed',
              margin: 0,
              backgroundSize: 'cover',
              height: '100%',
              position: 'absolute',
              width: '100%',
              top: 0,
              left: 0,
              right: 0
            };
            parallaxImage = <div data-fit="500" style={parallaxStyle} className=""></div>

            var boundLightOver = self.lightButtonOver.bind(null, index, section.chapter.path);
            var boundLightOut = self.lightButtonOut.bind(null, index, section.chapter.path);
            lightButton = <LightButton onLightButtonOver={boundLightOver} onLightButtonOut={boundLightOut} />
          } 
          
          var height = section.immersive ? sectionHeight : {height:750};
          var chapterClass = section.immersive ? '': 'chapter-white animated';
          var titleMarkup = section.chapter.title ? <h1>{section.chapter.title}</h1> : '';

          return (
            <section key={section.chapter.path} className={homeCss} id={section.chapter.path} style={height}>
              {lightButton}
              <div className="story" style={height}>
                <div className="layout">
                  <div className="layout-content">
                    <div className="chapter">
                      <div className={chapterClass}>  
                        <div className="chapter-content">     
                          {titleMarkup}
                          {logo}
                          <Citation citation={section.chapter.citation} />
                          <div className="grid paragraph">
                            <div className="grid__col grid__col--1-of-2"> 
                                <Paragraph paragraphs={section.chapter.paragraphsCol1}></Paragraph>
                            </div>
                            <div className="grid__col grid__col--1-of-2">
                                <Paragraph paragraphs={section.chapter.paragraphsCol2} right={true}></Paragraph>
                            </div>
                          </div>                        
                        </div>                                    
                      </div>                    
                    </div>
                  </div>
                </div>                          
              </div>
              {parallaxImage}                        
            </section>          
          );
        } 

        return React.DOM.div();
      });

      return React.DOM.div({}, chaptersNodes);
    }
            
    return React.DOM.div();
  }
});

module.exports = React.createClass({
  
  render: function() {    
    return (
      <div id="app">
        <Menu data={this.props.site} />
        <ChapterList data={this.props.site} size={this.props.height} />
      </div>
    );
  }
});
