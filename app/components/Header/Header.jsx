import React from 'react';
import { Link } from 'react-router';

import AppStore from '../../stores/AppStore';

let logo;

logo = require('./images/logo-blue.svg');

if (process.env.BROWSER) {
  require('./_Header.scss');
}

function getDataState() {
  return {    
    json: AppStore.getState().json
  };
}

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = getDataState();    
  }  

  render() {
    var menusNodes = this.state.json.menus.map(function(menu, index) {
      var keyChap = "menu"+index;
      let path = '/'+menu.path;
      return (
        <li key={keyChap}>
          <a href={path} >
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
                <img src={logo} height="80" />
              </a>
            </li>
            {menusNodes}
          </ul>
        </header>
      </div>
    );
  }

};
