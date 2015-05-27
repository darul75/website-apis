/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import Application from './components/App/App';
import Mentions from './components/Mentions/Mentions';
import HomeSection from './components/HomeSection/HomeSection';
import NotFoundSection from './components/NotFoundSection/NotFoundSection';

export default (
  <Route name='app' path='/' handler={Application}>
	<Route name='mentions' path='/mentions' handler={Mentions}/>
    <DefaultRoute handler={HomeSection} />
    <NotFoundRoute handler={NotFoundSection} />
  </Route>
);
