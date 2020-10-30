import React from 'react'

export default class Logout extends React.Component{

    componentWillMount = ()=>{
        localStorage.clear()
        this.props.handleLogout()
    }

    render(){
        return(
            <div>
                <p>You have successfully logged out</p>
            </div>
        )
    }

}