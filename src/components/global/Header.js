import { React, useState, useEffect, Link } from "react";
import { Navbar, Container, Nav, NavDropdown, NavItem, Dropdown } from 'react-bootstrap';
import KATLogo from './../../imgs/KATLogo.svg';
import './../../styles/Header.css'

//make a KAT logo

//portfolio will include stuff like my short stories, and stuff like that. Passions section will 
//probably link to that section

//currently clicking navdropdown does not have desired effect

function Header(){

    const [show, setShow] = useState(false);
    //navbar to turn black on scroll
    const [blackNav, setBlackNav] = useState(false);

    const showDropdown = () =>{ setShow(!show); };
    const hideDropdown = () => { setShow(false); };

    const changeBackground = () => {
        if (window.scrollY >= 66) {
          setBlackNav(true);
        } else {
          setBlackNav(false);
        }
    };

    useEffect(() => {
        changeBackground();
        // adding the event on mount
        window.addEventListener("scroll", changeBackground);
    });

    return(
        <>
            <Navbar variant={blackNav ? "dark" : "light"} expand='md' fixed='top' className={blackNav ? "navbar active shadow-none" : "navbar shadow-none"}>
                <Container>
                    <Navbar.Brand href='./home'>
                        <img alt="KAT" src={KATLogo} width="30" height="30"
                             className="d-inline-block align-top"/>
                        {' '}Kelvin Tezinde
                    </Navbar.Brand>
                    <Nav className='container-fluid'>
                        <Nav.Link href='./#experience'>Work XP</Nav.Link>
                        <Nav.Link href="./projectz">Projects</Nav.Link>
                        <Nav.Link href="./writing/Resume.pdf">Resume</Nav.Link>
                        <NavDropdown title="Me!" id="me-dropdown" show={show}
                        onMouseEnter={showDropdown} onMouseLeave={hideDropdown} href="https://google.com" 
                        onToggle={() => {window.location.href='./meeez'}} >
                            <NavDropdown.Item href="./me#hexcode">HexC0dE</NavDropdown.Item>
                            <NavDropdown.Item href="./me#writing">Other Writing</NavDropdown.Item>
                            <NavDropdown.Item href="./me#dance">Dance</NavDropdown.Item>
                            <NavDropdown.Item href="./me#misc">Misc</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;