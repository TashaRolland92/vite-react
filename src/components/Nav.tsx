import { useState } from "react";
import Logo from '../assets/svgs/diamond.svg';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const targetSection = document.getElementById(sectionId);

        if(targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        if (isNavOpen) setIsNavOpen(false);
    };

    return (
        <nav className="navbar">
            <h1 className="default__gradient--text"><img src={Logo} alt="Gradient Diamond Icon" className="diamond_icon"/> Tasha</h1>
            <div className={`menu-toggle ${isNavOpen ? 'active' : ''}`} id="mobileMenu" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`nav-list ${isNavOpen ? 'active' : ''}`}>
                <li><a href="#section1" onClick={(e) => handleLinkClick(e, 'section1')}>About</a></li>
                <li><a href="#section2" onClick={(e) => handleLinkClick(e, 'section2')}>Technical Skills</a></li>
                <li><a href="#section3" onClick={(e) => handleLinkClick(e, 'section3')}>Professional Experience</a></li>
                <li><a href="#section4" onClick={(e) => handleLinkClick(e, 'section4')}>Contact</a></li>
            </ul>
        </nav>
    )
};

export default Nav;