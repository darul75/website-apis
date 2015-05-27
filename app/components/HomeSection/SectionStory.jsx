import React from 'react';
import { PropTypes } from 'react';

export default class SectionStory extends React.Component {
  constructor() {
    super();    
  }

  render() {
    let img = require(''+this.props.story.img),
        column1 = this.props.story.items[0].text,
        column2 = this.props.story.items[1].text,
        column3 = this.props.story.items[2].text;
    return (
      <div>        
        <img src={img} />
        <div className="grid">
          <div className="grid__col grid__col--1-of-3" dangerouslySetInnerHTML={{__html: column1}}>
          </div>
          <div className="grid__col grid__col--1-of-3" dangerouslySetInnerHTML={{__html: column2}}>             
          </div>
          <div className="grid__col grid__col--1-of-3" dangerouslySetInnerHTML={{__html: column3}}>             
          </div>
        </div>
      </div>
    )
  }

};

SectionStory.prototype.displayName = "SectionStory";
