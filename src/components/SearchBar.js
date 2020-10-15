import React, { createElement } from "react";
export default class Home extends React.Component {
  state = {
    query: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  };
  handleSubmit=(e)=>{
    //   e.preventDefault()
    console.log('hit')
      this.props.handleSubmit(this.state.query)
  }
  render() {
    return (
      <>
        <form onSubmit= {e=>this.props.handleSubmit(e, this.state.query)}>
          <label>
            Enter Input:
            <input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
