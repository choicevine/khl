import React, { Component } from 'react';




class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
    //  this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }
  handleSearchTerm = () => {
    this.setState();
  };
  render() {
    return (
      <div className="search">
        <input
            name="p"
            type="password"
            autocomplete="new-password"
            value={this.state.value}
            data-open="false"
            className="form-control"
            placeholder="Search ."
            padding = "15%"
          />
      </div>
    );
  }
}

export default Search;
