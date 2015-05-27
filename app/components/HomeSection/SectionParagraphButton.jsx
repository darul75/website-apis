import React from 'react';
import { PropTypes } from 'react';

export default class SectionParagraphButton extends React.Component {
  constructor() {
    super();
  }

  _mouseOver(evt) {
    this.props.onLightButtonOver();
    evt.preventDefault();
  }

  _mouseOut(evt) {
    this.props.onLightButtonOut();
    evt.preventDefault();
  }

  render() {
    return (
      <div className="fake-lamp" onMouseEnter={this._mouseOver.bind(this)} onMouseLeave={this._mouseOut.bind(this)}>
        <i className="fa fa-lightbulb-o fa-3x fa-inverse animated bounce"></i>
      </div>
    );
  }

};

SectionParagraphButton.prototype.displayName = "SectionParagraphButton";
