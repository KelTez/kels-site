//this will have ID experience, so that it links to it
import React from 'react';
import jobDeets from './job-details.json';
import ExperienceCards from './ExperienceCards';
import { Row, Col, CardGroup } from 'react-bootstrap';
//for now won't use Row and Col, but maybe??


function Experience(){
    const jobs1 = [
        {key:jobDeets.sapient}, 
        {key:jobDeets.borgwarner},
        {key:jobDeets.localcoin}   
    ]
    const jobs2 =[
        {key:jobDeets.ttc},
        {key:jobDeets.waterloop},
        {key:jobDeets.q4inc}
    ]
    //three looks decent, will do 2 rows, 3 columns of a fixed size. Have some space btwn them?
    //Add styling to make the cards go to left of eachother
    //also background color and stuff, obvi
    return(
        <div id='experience' className='text-center'>
            <div id='experience-headings'>
                <h1>My Experience</h1>
                <h4>Hello again! I'm Kelvin, and I'm a mechatronics grad from the university of waterloo.
                    checkout my experience below!
                </h4>
            </div>
            <CardGroup className='mx-auto jobs'>
                {jobs1.map(jobs1 => (   
                    <ExperienceCards key={jobs1.key} jobSite={jobs1.key.jobSite} jobImg={jobs1.key.jobImg}
                    jobTitle={jobs1.key.jobTitle} jobDuration={jobs1.key.jobDuration}
                    companyName={jobs1.key.companyName} jobDesc1={jobs1.key.jobDesc1}
                    jobDesc2={jobs1.key.jobDesc2} jobDesc3={jobs1.key.jobDesc3} tools={jobs1.key.tools}/>
                ))}
            </CardGroup>
            <br/>
            <CardGroup className='mx-auto jobs'>
                {jobs2.map(jobs2 => (   
                    <ExperienceCards key={jobs2.key} jobSite={jobs2.key.jobSite} jobImg={jobs2.key.jobImg}
                    jobTitle={jobs2.key.jobTitle} jobDuration={jobs2.key.jobDuration}
                    companyName={jobs2.key.companyName} jobDesc1={jobs2.key.jobDesc1}
                    jobDesc2={jobs2.key.jobDesc2} jobDesc3={jobs2.key.jobDesc3} tools={jobs2.key.tools}/>
                ))}
            </CardGroup>
            <br/>
        </div>
    )
}

export default Experience;