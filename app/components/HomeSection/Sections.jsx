import React from 'react';
import { PropTypes } from 'react';

import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';

import SectionLogo from './SectionLogo';
import SectionParagraph from './SectionParagraph';
import SectionParagraphButton from './SectionParagraphButton';
import SectionParagraphCitation from './SectionParagraphCitation';
import SectionStory from './SectionStory';

if (process.env.BROWSER) {
  require('./_Section.scss');
}

function getDataState() {
  return {
    json: AppStore.getState().json,
    height: 0
  };
}

export default class Sections extends React.Component {
  constructor() {
    super();
    this.state = getDataState();    
  }

  componentDidMount() {
    if (document) {
      this.setState({height: screen.height});
      //$("#app").fadeIn();
    }
  }

  componentWillUnmount() {

  }

  _lightButtonOver(index, pathId) {
    var domElt = $('#' + pathId + ' .story');
    var domEltCitation = $('#' + pathId + ' .story .citation');
    var domEltButtons = $('.fa.fa-lightbulb-o');
    var domEltLogo = $('.logo-white');
    
    domEltLogo.hide();
    domEltCitation.hide();
    domElt.addClass('fadeOutLeft');
    domElt.removeClass('fadeInLeft');
    domEltButtons.addClass('hover');
  }
  
  _lightButtonOut(index, pathId) {
    var domElt = $('#' + pathId + ' .story');    
    var domEltCitation = $('#' + pathId + ' .story .citation');
    var domEltButtons = $('.fa.fa-adjust');
    var domEltLogo = $('.logo-white');
    domEltLogo.show();
    domEltCitation.show();
    domElt.addClass('fadeInLeft');
    domElt.removeClass('fadeOutLeft');
    domEltButtons.removeClass('hover');
  }

  render() {

    var self = this;      
      var sectionHeight = {
        height : this.state.height ? this.state.height : 0
      };      
                
      var chaptersNodes = this.state.json.sections.map(function(section, index) {                         

        if (section.chapter) {
          let homeCss = index === 0 ? '' : '',
              logoMarkup = index === 0 ? <SectionLogo /> : '',
              height = section.immersive ? sectionHeight : {height:750},
              lightButton = '',
              parallaxImage = '',
              chapterClass = section.immersive ? '': 'chapter-white animated',
              paraCss = section.chapter.paragraphsCol1 ? 'grid paragraph' : '',
              titleMarkup = section.chapter.title ? <h1>{section.chapter.title}</h1> : '',
              story = section.chapter.story ? <SectionStory story={section.chapter.story} /> : '',
              paraMarkup1 = section.chapter.paragraphsCol1 ? <SectionParagraph paragraphs={section.chapter.paragraphsCol1}></SectionParagraph> : '',
              paraMarkup2 = section.chapter.paragraphsCol1 ? <SectionParagraph paragraphs={section.chapter.paragraphsCol2}></SectionParagraph> : '';

          if (section.immersive) {            
            let imgSection = require(''+section.immersive.img),
                parallaxStyle = {
                  background: 'url('+imgSection+') 50% 0 no-repeat fixed',
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
            lightButton = <SectionParagraphButton onLightButtonOver={self._lightButtonOver.bind(this, index, section.chapter.path)} onLightButtonOut={self._lightButtonOut.bind(this, index, section.chapter.path)} />
          }

          return (
            <section key={section.chapter.path} className={homeCss} id={section.chapter.path} style={height}>
              {lightButton}
              <div className="story animated" style={height}>
                <div className="layout">
                  <div className="layout-content">
                    <div className="chapter">
                      <div className={chapterClass}>
                        <div className="chapter-content">
                          {titleMarkup}
                          {logoMarkup}
                          {story}
                          <SectionParagraphCitation citation={section.chapter.citation} />
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
};

Sections.prototype.displayName = "Sections";
