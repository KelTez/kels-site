import React from 'react';
import HeadshotIntro from './HeadshotIntro';
import Header from './../global/Header';
import Footer from './../global/Footer';
import Experience from './Experience';

function Home(){
    
    return(
        <>
            <Header/>
            <HeadshotIntro/> 
            <Experience/>
            <Footer api='facts'/>
        </>
    )
}

export default Home;