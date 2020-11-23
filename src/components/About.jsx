import React from "react";
import LinkedIn from '../assets/linkedin.png'
export default class About extends React.Component {
    render(){
        return(
            <div className='about'>
                <h2>About this Application</h2>
                <p>We set out on a mission to make learning easier and more fun. Whether you're studying for an exam or grocery shopping, there's a lot of information to remember. What's a better way to embed this into your brain than with music! It's <a href="https://scholarscompass.vcu.edu/cgi/viewcontent.cgi?referer=https://scholar.google.com/&httpsredir=1&article=1059&context=vcoa_case" className="white-text" target="_blank">scientifically proven</a> that song lyrics can help people remember specific things. An acrostic mnemonic device is used to associate two sets of words by their initials. For example, to remember all the planets (Mars, Venus, Earth, etc...) we can use the text "My Very Excellent Mother Just Served Us Noodles".</p>

                <h2>How to Use</h2>
                <p>Input a word, phrase, or piece of text you'd like to remember and we'll take care of the rest. We'll match the intials of your text to that of an artist's lyrics of your choosing. 
                    You can even create playlists and save your searches to them.
                </p>

                <h2>About The Creators</h2>
                <p>Jack and Sean are two bootcamp grads with an knack for learning and music. Be sure to check them out on LinkedIn.</p>
                <div className="buttons">
                    <div className="creator">
                        <h3>Jack</h3>
                        <a href="https://www.linkedin.com/in/jackmt9/" target="_blank"><img src={LinkedIn} className="linkedIn-button" alt="Jack's LinkedIn"/></a>
                    </div>
                    <div className="creator">
                        <h3>Sean</h3>   
                        <a href="https://www.linkedin.com/in/sean-tarzy-997076110/" target="_blank"><img src={LinkedIn} className="linkedIn-button" alt="Sean's LinkedIn"/></a>
                    </div>
                </div>
            </div>
        )
    }
}