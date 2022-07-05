//This will be a component with props, to easily make multiple projects with links, images and text
//instead of cardgroups for the work xp, might do cols and rows like i did here?
import { React } from 'react';
import { Col, Row } from 'react-bootstrap';
import './../../styles/Projects.css';
import Header from './../global/Header';
import Footer from './../global/Footer';
import ProjectCards from './ProjectCards';
import project from './project-text.json';

function Projects(){
    let text = project.projects;

    //col1 col2
    const myProjects = [
        {key:text.website},
        {key:text.slap},
        {key:text.tree80},
        {key:text.cardDealingRobot},

        {key:text.simpleSPAForm},
        {key:text.smartPillBottle}, 
        {key:text.ballBalancer},
        {key:text.lostProjects}
    ]

    return(
        <div id='projects'>
            <Header scrollY='50'/>
            <br/>
            <p>projects. Click on the project name to see surprise</p>
            <div id='projects-section'>
                <Row className='g-4'>
                    {Array.from({ length: 1 }).map((_, id) => (
                        <Col>
                            {myProjects.map(myProjects => (  
                                <ProjectCards key={myProjects.key} img={myProjects.key.img} name={myProjects.key.name} 
                                href={myProjects.key.href} desc={myProjects.key.desc} code={myProjects.key.code} 
                                tools={myProjects.key.tools} id={myProjects.key.id}/>
                            ))}
                        </Col>
                    ))}
                </Row>
            </div>
            <Footer api='facts'/>
        </div>
    )
}

export default Projects;