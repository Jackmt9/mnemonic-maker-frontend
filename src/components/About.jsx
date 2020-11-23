import React from "react";
import LinkedIn from '../assets/linkedin.png'
export default class About extends React.Component {
    render(){
        return(
            <div className='about'>

                <h2>About The Creators</h2>
                <a href="https://www.linkedin.com/in/sean-tarzy-997076110/" target="_blank"><img src={LinkedIn} className="linkedIn-button" alt="Sean's LinkedIn"/></a>
                <a href="https://www.linkedin.com/in/jackmt9/" target="_blank"><img src={LinkedIn} className="linkedIn-button" alt="Jack's LinkedIn"/></a>
            </div>
        )
    }
}