import { ReactTyped } from "react-typed";

const HeroContent = () => (
    <>
        <h1 className="hero__title">Hi, I'm <span className="default__gradient--text">Tasha</span></h1>
        <h2 className="hero__subtitle">I'm a&nbsp;
            <span className="default__gradient--text">
                <ReactTyped
                    strings={[
                        "Frontend Designer",
                        "Frontend Developer",
                        "Tech Enthusiast",
                        "Cocktail Lover",
                        "Crafting Aficinado.",
                    ]}
                    typeSpeed={60}
                    backSpeed={60}
                />
            </span>
        </h2>
        <h3>Welcome to my portfolio, find out a little more about me and what I do in both my professional and personal time.</h3>
    </>
);

export default HeroContent;