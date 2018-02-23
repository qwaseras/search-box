import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value}
  };

  render() {
    return (
      <li style={{backgroundColor: 'white', minWidth: '300px' }}onClick={this.handleClick}> <NavLink to={`/results/${this.state.value.name}`} >{this.state.value.name}</NavLink></li>
    );
  }
}
export default Suggestion;
