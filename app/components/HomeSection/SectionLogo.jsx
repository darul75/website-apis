import React from 'react';
import { PropTypes } from 'react';

export default class SectionLogo extends React.Component {
  constructor() {
    super();    
  }  

  render() {
    let logo = require('./images/logo-blanc.svg');
    return (
      <div className="logo-white">
        <a href="#accueil">
          <img src={logo} height="200px" className="logo-home animated bounce" />
        </a>
      </div>
    )
  }  

};

SectionLogo.prototype.displayName = "SectionLogo";
