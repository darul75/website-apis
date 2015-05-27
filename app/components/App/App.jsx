import React from 'react';
import { RouteHandler } from "react-router";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

if (process.env.BROWSER) {
  require('./_App.scss');
  require('./grid.css');
  require('file?name=favicon.ico!../../images/favicon.ico');
  require("./google.js");
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-content">     
        	<RouteHandler />
        </div>
        <Footer />
      </div>
    );
  }
};