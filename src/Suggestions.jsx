import React, { Component } from 'react';
import Suggestion from './Suggestion.jsx';

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { suggestions: this.props.suggestions};
  };

  handleClick(event) {
    this.setState({ suggestions: [] });
  };


  render() {
    return (

    );
  }
}
export default Suggestions;
