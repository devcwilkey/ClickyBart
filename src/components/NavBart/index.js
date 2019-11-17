import React from "react";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Modal from "../imgModal";

// Its a Nav Bar but a Play on the fact that we have a Game of Clicky Bart
function NavBart(stuff) {
    return (
        <Navbar bg="dark" variant="dark" className="m-0">
            <Navbar.Brand href="#home">
                <Image alt="Logo" src="/assets/img/Headshot.png" width="40" height="40" className="d-inline-block align-top" />
                {' '}
                <p className="theSimpsons m-auto d-inline-block text-center">Cl icky  Bart</p>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Modal buttonName="Rules" ImgSrc="/assets/img/Clicky_Rules_Banner.jpg" buttonVariant="link" />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>   
                    Current Score: {stuff.currentScore}    Top Score: {stuff.topScore}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBart;


