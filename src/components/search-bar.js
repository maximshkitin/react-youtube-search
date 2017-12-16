import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'freeride' }
  }

  render() {
    return(
      <input className="form-control search-bar" type="text"
             value={this.state.term} onChange={ e => this.onInputChange(e.target.value) } />
    )
  }

  onInputChange(val) {
    this.setState({ term: val });
    this.props.onSearchTermChange(val);
  }
}