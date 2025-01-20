import JS from "../assets/technical/javascript-logo.png";
import TS from "../assets/technical/typescript-logo.png";
import HTML from "../assets/technical/html-logo.png";
import CSS from "../assets/technical/css-logo.png";
import REACT from "../assets/technical/react-logo.png";
import PHP from "../assets/technical/php-logo.png";
import PS from "../assets/technical/photoshop-logo.png";
import NODEJS from "../assets/technical/nodejs-logo.png";
import AWS from "../assets/technical/amazon-web-services-logo.png";
import MYSQL from "../assets/technical/mysql-logo.png";
import FIGMA from "../assets/technical/figma-logo.png";
import NPM from "../assets/technical/npm-logo.png";
import VITEJS from "../assets/technical/vitejs-logo.png";
import WEBPACK from "../assets/technical/webpack-logo.png";
import WORDPRESS from "../assets/technical/wordpress-logo.png";
import XD from "../assets/technical/xd-logo.png";

const skillsData = [
	{ name: "JavaScript", logo: JS, alt: "JavaScript Logo" },
	{ name: "TypeScript", logo: TS, alt: "TypeScript Logo" },
	{ name: "HTML5", logo: HTML, alt: "HTML5 Logo" },
	{ name: "CSS3", logo: CSS, alt: "CSS3 Logo" },
	{ name: "React", logo: REACT, alt: "React Logo" },
	{ name: "PHP", logo: PHP, alt: "PHP Logo" },
	{ name: "Photoshop", logo: PS, alt: "Adobe Photoshop Logo" },
	{ name: "NodeJS", logo: NODEJS, alt: "Node JS Logo" },
	{ name: "AWS", logo: AWS, alt: "AWS Logo" },
	{ name: "MYSQL", logo: MYSQL, alt: "MYSQL Logo" },
	{ name: "Figma", logo: FIGMA, alt: "FIGMA Logo" },
	{ name: "NPM", logo: NPM, alt: "NPM Logo" },
	{ name: "ViteJS", logo: VITEJS, alt: "VITEJS Logo" },
	{ name: "Webpack", logo: WEBPACK, alt: "WEBPACK Logo" },
	{ name: "WordPress", logo: WORDPRESS, alt: "WORDPRESS Logo" },
	{ name: "Adobe XD", logo: XD, alt: "Adobe XD Logo" },
];

const TechnicalSkills = () => {
	return (
		<section id="section2" className="technical-skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<span className="technical-skills__top-title align-centre">Dev Toolkit</span>
						<h2 className="align-centre">Technical Skills.</h2>
						<div className="hexagon-grid skills">
							{skillsData.map((skill, index) => (
								<div key={index} className="skills__container">
									<div className="hexagon default__gradient--background">
										<img
											src={skill.logo}
											alt={skill.alt}
											loading="lazy"
										/>
									</div>
									<span className="skills__name">{skill.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechnicalSkills;