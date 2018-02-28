import React, { Component } from 'react';
import Search from './SearchBar.jsx';
import axios from 'axios';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = { results: [], status: 'loading...' }
  }

  getApiData = (query) => {
    axios.get(`http://localhost:8080/api/v1/find/${query}`)
      .then( ( response ) => {
        this.setState({results: response.data})
        if ( response.data.length < 1 ){
          this.setState( { status: 'The search has not given any results' } )
        }
      })
      .catch( (error) => {
        console.log( error );
      }
    );
  }

  componentDidMount(){
    this.getApiData(this.props.match.params.query)
  }

  componentWillReceiveProps( nextProps ){
    if( nextProps !== this.props ){
      this.getApiData( nextProps.match.params.query )
    }
  }


  render() {
    if ( this.state.results.length > 0) {
    return (
      <div className="pages">
        <Search history={this.props.history} value={this.props.match.params.query} />
        <div className='list-group results'>

          {this.state.results.map((result, index) => {
            return  <a href={result.url}  target="_blank" key={index}
                            className="list-group-item list-group-item-action flex-column align-items-start ">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{result.title}</h5>
                        <small>3 days ago</small>
                      </div>
                        <div className='result-text'
                             dangerouslySetInnerHTML={{__html: JSON.parse(result.highlight)}}
                          />
                      <small>Donec id elit non mi porta.</small>
                    </a>
          })}
        </div>
      </div>
    );
    }else{
      return (
        <div className="pages">
          <Search history={this.props.history} value={this.props.match.params.query} />
          <div className='list-group results'>
            {this.state.status}
          </div>
        </div>
      );
    }
  }
}
export default Results;
