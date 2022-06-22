import { React, useState, useEffect } from 'react';
import './../../styles/Home.css'
import home from './home-text.json';

function HeadshotIntro(){
    const [scrollLimit, setScrollLimit] = useState(false);

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

    let text = home.headshotSection;

    return(
        <div id='headshot'>
            <div id='headshot-intro'>
                <h1 className='headshot-intro-text' >
                    {text.greeting}<br/>
                    {text.name} 
                    <div className='scrolling-text'>  
                        <span>                        
                        {text.scrollingDesc.one}<br/>
                        {text.scrollingDesc.two}<br/>
                        {text.scrollingDesc.three}<br/>
                        {text.scrollingDesc.four}<br/>
                        </span>
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default HeadshotIntro;