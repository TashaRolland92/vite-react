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
        <nav className="nav">
            <h1 className="default__gradient--text"><img src={Logo} alt="Gradient Diamond Icon" className="diamond-icon"/> Tasha</h1>
            <div className={`menu-toggle ${isNavOpen ? 'menu-toggle--active' : ''}`} id="mobileMenu" onClick={toggleNav}>
                <span className="menu-toggle__bar"></span>
                <span className="menu-toggle__bar"></span>
                <span className="menu-toggle__bar"></span>
            </div>
            <ul className={`nav__list ${isNavOpen ? 'nav__list--active' : ''}`}>
                <li className="nav__item">
                    <a href="#section1" onClick={(e) => handleLinkClick(e, 'section1')} className="nav__link">About</a>
                </li>
                <li className="nav__item">
                    <a href="#section2" onClick={(e) => handleLinkClick(e, 'section2')} className="nav__link">Technical Skills</a>
                </li>
                <li className="nav__item">
                    <a href="#section3" onClick={(e) => handleLinkClick(e, 'section3')} className="nav__link">Professional Experience</a>
                </li>
                <li className="nav__item">
                    <a href="#section4" onClick={(e) => handleLinkClick(e, 'section4')} className="nav__link">Contact</a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;