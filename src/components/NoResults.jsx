import React from 'react'
import NoResultsImg from '../assets/NoResults.png'
import '../App.css'
export default class NoResults extends React.Component {
    
    componentDidMount = ()=>{
        // let noResult = document.getElementsByClassName("error-image")[0]
        // noResult.scrollIntoView({behavior: 'smooth'})
      }

render(){



return (
<div className = "no-results" id = "no-results-div">
    <p class = "white-text"> Sorry, there were no results matching your input. Please Search again</p>
    <img src = {NoResultsImg} class = "error-image"/>
</div>
)
}
}