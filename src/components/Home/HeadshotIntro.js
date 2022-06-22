import { React, useState, useEffect } from 'react';
import './../../styles/Home.css'

function HeadshotIntro(){
    const [scrollLimit, setScrollLimit] = useState(false);
    const greetingText = 'Hello 😃 ';
    const nameText = 'My name is Kelvin and I\'m\n ';

    const changeText = () => {
        if (window.scrollY >= 280) {
            setScrollLimit(true);
          } else {
            setScrollLimit(false);
          }
    }

    useEffect(() => {
        changeText();
        // adding the event on mount
        window.addEventListener("scroll", changeText);
    });

    return(
        <div id='headshot'>
            <div id='headshot-intro'>
                <h1 className='headshot-intro-text' >
                    {greetingText}<br/>
                    {nameText} 
                    <div className='scrolling-text'>  
                        <span>                        
                        an Engineer<br/>
                        a Writer<br/>
                        a Dancer<br/>
                        and Much More!<br/>
                        </span>
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default HeadshotIntro;