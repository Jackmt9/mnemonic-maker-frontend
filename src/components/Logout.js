import React from 'react'

export default class Logout extends React.Component{
//     refreshPage=()=>{
//     window.location.reload(false);
//   }

    componentWillMount = ()=>{
        // return new Promise(()=>{

        //     localStorage.clear()
        // })
        // .then(
        //    this.refreshPage()
        // )
    }

    render(){
        return(
            <div>
                <p>You have successfully logged out</p>
            </div>
        )
    }

}