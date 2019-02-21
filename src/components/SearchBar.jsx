import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="search"
            placeholder="City..."
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
            onSubmit={this.onFormSubmit}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
