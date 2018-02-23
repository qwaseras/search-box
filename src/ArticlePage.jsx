import React, { Component } from 'react';
import Search from './SearchBar.jsx';

class Article extends Component {
  render() {
    return (
      <div>
      <Search history={this.props.history}/>
      <h1>This is article #{this.props.match.params.id} </h1>
      </div>
    );
  }
}
export default Article;
