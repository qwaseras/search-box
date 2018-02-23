import React, { Component } from 'react';
import Search from './SearchBar.jsx';
import { NavLink } from 'react-router-dom'

class Results extends Component {
  render() {
    return (
      <div>
        <Search history={this.props.history} value={this.props.match.params.query} />
        <h1><NavLink to={`/article/1`} >{this.props.match.params.query}  ex1</NavLink></h1>
        <h1><NavLink to={`/article/2`} >{this.props.match.params.query} ex2</NavLink></h1>
        <h1><NavLink to={`/article/3`} >{this.props.match.params.query}  ex3</NavLink></h1>
      </div>
    );
  }
}
export default Results;
