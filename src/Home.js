import React from "react";
export default class Home extends React.Component {
  render() {
      console.log('yoyo')
      let jim = 'hi'
      this.componentDidMount=(e)=>{
          e.preventDefault()
          console.log(jim)
      }
    return (
      <nav >
          <input placeholder='stuff I wanna remember...'/>
      </nav>
    );
  }
}
