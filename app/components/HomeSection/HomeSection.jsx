import React from 'react';
import { PropTypes } from 'react';

import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';
import Sections from './Sections';

function getDataState() {
  return {    
    json: AppStore.getState().json
  };
}

export default class HomeSection extends React.Component {
  constructor() {
    super();
    this.state = getDataState();    
  }

  componentDidMount() {
    AppStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.unlisten(this.onChange.bind(this));
  }

  render() {
    return (      
      <Sections />      
    );
  }

  _onClick() {
    AppActions.fetch();
  }

  onChange() {
    this.setState(getDataState());
  }

};

HomeSection.prototype.displayName = "HomeSection";
