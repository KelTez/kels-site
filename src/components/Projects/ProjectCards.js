import { Card, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';
import React from 'react';
import './../../styles/Projects.css';

function ProjectCards(props){
    return(
        <>
            <Card className="bg-dark text-white" >
                <Card.Img className='project-img' src={props.img} alt={props.name + ' Img'} />
                <Card.ImgOverlay>
                    <Card.Title className='project-title'><a href={props.href} id={props.id + '-title'} target='_blank' rel='noreferrer'>{props.name}</a></Card.Title>
                    <Card.Text><span id={props.id} dangerouslySetInnerHTML={{__html:props.desc}}/></Card.Text>
                    <Card.Text><span id={props.id + '-code'} dangerouslySetInnerHTML={{__html:props.code}}/></Card.Text>
                </Card.ImgOverlay>
                <Card.Footer><b>Tools:</b><i> {props.tools}</i></Card.Footer>
            </Card>
            <br/>
        </>
    )
}

export default ProjectCards;