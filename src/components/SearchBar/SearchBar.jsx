import React from "react";
import './SearchBar.css'
export default class Home extends React.Component {
  state = {
    query: "",
    artist: "",
    order: true,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCheckToggle = ()=>{
    this.setState({order: !this.state.order})
  }

  render() {
    return (
      <form
        onSubmit={(e) =>
          this.props.handleSubmit(
            e,
            this.state.query,
            0,
            this.state.artist,
            this.state.order
          )
        }
        style={this.styles}
      >
        <label>
          Phrase to remember...:
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          By Specific Artist:
          {/* <input
           placeholder="any"
            type="text"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          /> */}
        </label>
          <select name="artist" id="artist" onChange={this.handleChange}>
            <option value="any">Any</option>
            {
            this.props.artists ? 
            this.props.artists.map(artist => {
              return <option value={artist.id}>{artist.name}</option>
            })
            :
            null
            }
          </select>
        Order Matters:
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.order}
          onChange={this.handleCheckToggle}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
