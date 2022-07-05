import { React } from 'react';
import './../../styles/Me.css';
import Header from './../global/Header';
import Footer from './../global/Footer';

function Me(){
    return(
        <div id='me'>
            <Header scrollY='188'/>
            <p>MEMEMEMEMEMEMEMEMMEMEMEMEMEME</p>
            <Footer api='jokes'/>
        </div>
    )
}

export default Me;