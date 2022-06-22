//plan is once i have the 'main' page done, ill style header and footer to my liking
import { React, useState, useEffect } from "react";
import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
const axios = require('axios');

function Footer(props){
    
    const [data, setData] = useState();
    const API_KEY = 'Pf6jhkZurZrUf0JoHtDBQA==lrOwIltQl9snQ7IY';
    //will use jokes api, facts api
    const API_URL = 'https://api.api-ninjas.com/v1/' + props.api + '?limit=1';
    
    //Used to grab stuff from api ninjas. Don't care to make api key private via storage in seperate file
    const getData =  () => {
        try {
                axios.get(API_URL, {
                    headers: {
                    'X-Api-Key': API_KEY
                    }
                }).then((res) => {
                    if(props.api === 'facts'){
                        setData(JSON.stringify(res.data[0].fact, null, '\t'));
                    }else if(props.api === 'jokes'){
                        setData(JSON.stringify(res.data[0].joke, null, '\t'));
                    }else{
                        setData('An oopsie on my end has occured, whoops ;p');
                    } 
                });
        
        } catch (error) {
          console.error(error)
          setData('No ' + props.api + ' buddy, we reached the limit :(')
        }
    };

    //use this to do an 'on mount' run of getFact
    useEffect(getData, []);
  
    let year = new Date().getFullYear();
    //note that the id for the <p> where the api call occurs will change depending on the api call
    return (
        <>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <a className='btn btn-outline-light btn-floating m-1' 
                    href='#!' role='button' title="Email Me!">
                        <MDBIcon icon='envelope' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' 
                    href='#!' role='button' title="Let's connect!">
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' 
                    href='#!' role='button' title="Judge my code!">
                        <MDBIcon fab icon='github' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' 
                    href='#!' role='button' title="Hit up my ma_cabessa insta!">
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' 
                    href='#!' role='button' title="Hit up my ma_cabessa email!">
                        <MDBIcon fab icon='at' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' 
                    href='#!' role='button' title="Check out my webtoon!">
                        <MDBIcon icon='book-open' />
                    </a>
                </section>
                <section className='mb-4'>
                    <p>
                        Hey it's Kelvin here! Not much left of note here, sorry {':('}
                    </p>
                    <p>
                        Here are some {props.api} to ease the loneliness! 
                    </p>
                    <button type='button' onClick={getData}
                    className='btn btn-outline-light btn-rounded' >
                        Click Me!
                    </button>
                    <p id={props.api}>{data} - API Ninjas</p>
                </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Kelvin Andre Tezinde ©{year}.
        <br/>
        Built using React, styled with Material Design Bootstrap.
        <br/>
        View the source code <a>here</a>.
      </div>
    </MDBFooter>
        </>
    );
}

export default Footer;