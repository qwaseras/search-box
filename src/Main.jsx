import React, { Component } from 'react';
import Search from './SearchBar.jsx';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <img src="/codex-logo.svg" alt="Codex Software" />
        <Search history={this.props.history}/>
      </div>
    );
  }
}
export default Main;
