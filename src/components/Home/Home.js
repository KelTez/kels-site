import React from 'react';
import HeadshotIntro from './HeadshotIntro';
import Header from './../global/Header';
import Footer from './../global/Footer';
import Experience from './Experience';
//style footer and header a bit more, like having the icons light up on hover
//also add links to my icons... like emailing me for example

function Home(){
    return(
        <>
            <Header scrollY='188'/>
            <HeadshotIntro/> 
            <Experience/>
            <Footer api='facts'/>
        </>
    )
}

export default Home;