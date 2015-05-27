import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('./_Footer.scss');
}

export default class Footer extends React.Component {
  constructor() {
    super();
  }  

  render() {
    return (
      <div id="footer">
        <footer>
          <Link to='mentions'>Mentions légales</Link>          
        </footer>
      </div>
    );
  }

};
