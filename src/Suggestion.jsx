import React, { Component } from 'react';

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value}
  };

  handleClick = (event) => {
    this.props.history.push(`/results/${this.state.value.key}`)
  };

  render() {
    return (
      <li className="list-group-item list-group-item-action" onClick={this.handleClick}>
        {this.state.value.key}
      </li>
    );
  }
}
export default Suggestion;
