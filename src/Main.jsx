import React, { Component } from 'react';
import Search from './SearchBar.jsx';

class Main extends Component {
  render() {
    return (
      <Search history={this.props.history}/>
    );
  }
}
export default Main;
