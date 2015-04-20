'use strict'

var React = require('react');

// components
var Logo = require('./logo');
var Footer = require('./footer');
var Menu = require('./menu');
var Citation = require('./section-citation');
var Paragraph = require('./section-paragraph');
var LightButton = require('./section-button');

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
                
      var chaptersNodes = this.props.data.sections.map(function(section, index) {                         

        if (section.chapter) {  
          var homeCss = index === 0 ? '' : '';
          var logo = index === 0 ? <Logo /> : '';          
          var parallaxStyle;
          var parallaxImage;          
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
          var paraMarkup1 = section.chapter.paragraphsCol1 ? <Paragraph paragraphs={section.chapter.paragraphsCol1}></Paragraph> : '';
          var paraMarkup2 = section.chapter.paragraphsCol2 ? <Paragraph paragraphs={section.chapter.paragraphsCol2} right={true}></Paragraph> : '';

          var paraCss = section.chapter.paragraphsCol1 ? 'grid paragraph' : '';

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
                          <div className={paraCss}>
                            <div className="grid__col grid__col--1-of-2"> 
                                {paraMarkup1}
                            </div>
                            <div className="grid__col grid__col--1-of-2">
                                {paraMarkup2}
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
        <Footer />
      </div>
    );
  }
});
