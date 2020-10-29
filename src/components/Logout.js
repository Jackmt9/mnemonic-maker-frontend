import React from 'react'
import {connect} from 'react-redux'
class Logout extends React.Component{

    componentWillMount = ()=>{
        localStorage.clear()
        this.props.propsRemoveUser()
    }

    render(){
        return(
            <div>
                <p>You have successfully logged out</p>
            </div>
        )
    }

}

// Redux interactions below this line

let removeUser = () => {
  return {
    type: "LOGOUT",
  }
}

let mapDispatchToProps = {
    propsRemoveUser: removeUser
}

export default connect(null, mapDispatchToProps)(Logout);