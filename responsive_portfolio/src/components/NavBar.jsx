import { useState } from "react";
import { FaBars } from "react-icons/fa";


import snail from "../assets/img/snail.png"
import linkedin_icon from '../assets/img/linkedin_icon.svg';
import git_icon from '../assets/img/git_icon.png';


function NavBar() {
    const [isOpen, setIsOpen] = useState(true);

    const faBarsClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="navBar">
            <div className="left">
                <div className="navigation">
                    <FaBars className="fa-bars" onClick={faBarsClick} />
                    <a className={isOpen ? "" : "a-close"} href="#about">About</a>
                    <a className={isOpen ? "" : "a-close"} href="#skills">Skills</a>
                    <a className={isOpen ? "" : "a-close"} href="#projects">Projects</a>
                </div>
            </div>
            <div className="right">
                <div className="social-icon">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kfir-shabi1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BOHSzn7RScuJxTQ%2BpKTFZA%3D%3D"><img src={linkedin_icon} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/kfir571"><img className="git" src={git_icon} alt="" /></a>
                </div>
                <img src={snail} alt="my-logo" />
            </div>
        </div>
    )
} export default NavBar