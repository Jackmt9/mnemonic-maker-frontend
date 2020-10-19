import React from "react";
export default class Home extends React.Component {
  state = {
    query: "",
    artist: ''
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  };
  styles = {
    background: '#37C1A8'
  }
  render() {
    return (
      <form
        onSubmit={(e) =>
          this.props.handleSubmit(e, this.state.query, 0, this.state.artist)}
        style={this.styles}
      >
        <label>
          Stuff to remember...:
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Enter Artist:
          <input
            placeholder="any"
            type="text"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
