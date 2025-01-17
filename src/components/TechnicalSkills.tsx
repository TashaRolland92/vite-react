import JS from "../assets/technical/javascript-logo.png"
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


const TechnicalSkills = () => {
	return (
		<section id="section2" className="technical-skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="align-centre uppercase">Technical Skills</h2>
						<div className="hexagon-grid skills">
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={JS} alt="JavaScript Logo" loading="lazy" />
								</div>
								<span className="skills__name">JavaScript</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={TS} alt="TypeScript Logo" loading="lazy" />
								</div>
								<span className="skills__name">TypeScript</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={HTML} alt="HTML5 Logo" loading="lazy" />
								</div>
								<span className="skills__name">HTML5</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={CSS} alt="CSS3 Logo" loading="lazy" />
								</div>
								<span className="skills__name">CSS3</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={REACT} alt="React Logo" loading="lazy" />
								</div>
								<span className="skills__name">React</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={PHP} alt="PHP Logo" loading="lazy" />
								</div>
								<span className="skills__name">PHP</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={PS} alt="Adobe Photoshop Logo" loading="lazy" />
								</div>
								<span className="skills__name">Photoshop</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={NODEJS} alt="Node JS Logo" loading="lazy" />
								</div>
								<span className="skills__name">NodeJS</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={AWS} alt="AWS Logo" loading="lazy" />
								</div>
								<span className="skills__name">AWS</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={MYSQL} alt="MYSQL Logo" loading="lazy" />
								</div>
								<span className="skills__name">MYSQL</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={FIGMA} alt="FIGMA Logo" loading="lazy" />
								</div>
								<span className="skills__name">FIGMA</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={NPM} alt="NPM Logo" loading="lazy" />
								</div>
								<span className="skills__name">NPM</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={WEBPACK} alt="WEBPACK Logo" loading="lazy" />
								</div>
								<span className="skills__name">WEBPACK</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={VITEJS} alt="VITEJS Logo" loading="lazy" />
								</div>
								<span className="skills__name">VITEJS</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={WORDPRESS} alt="WORDPRESS Logo" loading="lazy" />
								</div>
								<span className="skills__name">WORDPRESS</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={XD} alt="Adobe XD Logo" loading="lazy" />
								</div>
								<span className="skills__name">Adobe XD</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default TechnicalSkills;