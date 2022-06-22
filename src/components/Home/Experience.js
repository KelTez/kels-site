//this will have ID experience, so that it links to it
import React from 'react';
import home from './home-text.json';
import ExperienceCards from './ExperienceCards';
import { Row, Col, CardGroup } from 'react-bootstrap';
//for now won't use Row and Col, but maybe??


function Experience(){
    let text = home.experienceSection;

    const title = text.headings.title;
    const greeting = text.headings.greeting;

    const jobsRow1 = [
        {key:text.jobDeets.sapient}, 
        {key:text.jobDeets.borgwarner},
        {key:text.jobDeets.localcoin}   
    ]
    const jobsRow2 =[
        {key:text.jobDeets.ttc},
        {key:text.jobDeets.waterloop},
        {key:text.jobDeets.q4inc}
    ]

    //three looks decent, will do 2 rows, 3 columns of a fixed size. Have some space btwn them?
    //Add styling to make the cards go to left of eachother
    //also background color and stuff, obvi
    return(
        <div id='experience' className='text-center'>
            <div id='experience-headings'>
                <h1>{title}</h1>
                <h4>{greeting}</h4>
            </div>
            <CardGroup className='mx-auto jobs'>
                {jobsRow1.map(jobsRow1 => (   
                    <ExperienceCards key={jobsRow1.key} jobSite={jobsRow1.key.jobSite} jobImg={jobsRow1.key.jobImg}
                    jobTitle={jobsRow1.key.jobTitle} jobDuration={jobsRow1.key.jobDuration}
                    companyName={jobsRow1.key.companyName} jobDesc1={jobsRow1.key.jobDesc1}
                    jobDesc2={jobsRow1.key.jobDesc2} jobDesc3={jobsRow1.key.jobDesc3} tools={jobsRow1.key.tools}/>
                ))}
            </CardGroup>
            <br/>
            <CardGroup className='mx-auto jobs'>
                {jobsRow2.map(jobsRow2 => (   
                    <ExperienceCards key={jobsRow2.key} jobSite={jobsRow2.key.jobSite} jobImg={jobsRow2.key.jobImg}
                    jobTitle={jobsRow2.key.jobTitle} jobDuration={jobsRow2.key.jobDuration}
                    companyName={jobsRow2.key.companyName} jobDesc1={jobsRow2.key.jobDesc1}
                    jobDesc2={jobsRow2.key.jobDesc2} jobDesc3={jobsRow2.key.jobDesc3} tools={jobsRow2.key.tools}/>
                ))}
            </CardGroup>
            <br/>
        </div>
    )
}

export default Experience;