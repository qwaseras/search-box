import React, { Component } from 'react';
import Suggestion from './Suggestion';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value || '', suggestions: [], submitted: false};

    this.handleChange = this.handleChange.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    this.setState({ value: nextProps.value });
  }


  handleChange(event) {
    this.setState({value: event.target.value});
    if (event.target.value.length > 2){
      this.setState({suggestions:  [{name: 'one'}, {name: 'two'}, {name: 'three'}]})
    }
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (this.state.value !== ''){
        this.props.history.push(`/results/${this.state.value}`)
      }
      this.setState({suggestions:  [] })
    }
  }
  handleSuggestionClick = () =>{
    this.setState({suggestions:  [] })
  }

  render() {
    return (
        <div className="input-form">
          <input type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
          <ul className="input-form-list" style={{position: 'absolute'}} onClick={this.handleSuggestionClick}>
            {this.state.suggestions.map(function(suggestion, index){
              return <Suggestion key={ index } value = {suggestion}/>;
            })}
          </ul>
        </div>
    );
  }
}
export default SearchBar;
