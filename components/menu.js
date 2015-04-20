'use strict'

var React = require('react');

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

module.exports = Menu;