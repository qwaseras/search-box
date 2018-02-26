import React, { Component } from 'react';
import Search from './SearchBar.jsx';
import { NavLink } from 'react-router-dom'

class Results extends Component {
  render() {
    return (
      <div className="pages">
        <Search history={this.props.history} value={this.props.match.params.query} />
        <div className='list-group results'>
          <NavLink to={`/article/1`} className="list-group-item list-group-item-action flex-column align-items-start ">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </NavLink>
          <NavLink to={`/article/1`} className="list-group-item list-group-item-action flex-column align-items-start ">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Results;
