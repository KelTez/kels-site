import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import React from 'react';
import './../../styles/Experience.css';

function ExperienceCards(props){
    /**
     * using dangerouslySetInnerHTML. I know I shouldn't as it has XSS issues, but its more convenient
     * for my personal site, since i'm holding the html in my json file
     */

    //might remove the dangerouslySetInner for the jobTitle, we shall see
    return(
        <>
            <Card style={{ borderColor: '#dfdfdf' }} 
            className="text-center experience-cards mx-auto shadow-none 
            border-top-0 border-bottom-0 border-left-0 border-right-1">
                <a href={props.jobSite} target="_blank" rel="noreferrer">
                    <img src={props.jobImg} class="card-img-top job-img" alt={props.companyName + 'Image'} height='200'/>
                </a>    
                <Card.Body className='experience-job-title'>
                    <Card.Title>{props.jobTitle}</Card.Title>
                    <Card.Text>{props.jobDuration}</Card.Text>
                </Card.Body>
                <ListGroup className="bg-transparent">
                    <ListGroupItem classname='job-desc'><span dangerouslySetInnerHTML={{__html:props.jobDesc1}}/></ListGroupItem>
                    <ListGroupItem classname='job-desc'><span dangerouslySetInnerHTML={{__html:props.jobDesc2}}/></ListGroupItem>
                    <ListGroupItem classname='job-desc'><span dangerouslySetInnerHTML={{__html:props.jobDesc3}}/></ListGroupItem>
                    <ListGroupItem id='tools' classname='bg-transparent'><b>Tools Used:</b><br/><i>{props.tools}</i></ListGroupItem>
                </ListGroup>
            </Card>
        </>
    )
}

export default ExperienceCards;