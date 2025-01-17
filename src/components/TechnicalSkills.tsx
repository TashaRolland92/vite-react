import JS from "../assets/technical/javascript-logo.png"
import TS from "../assets/technical/typescript-logo.png";
import HTML from "../assets/technical/html-logo.png";
import CSS from "../assets/technical/css-logo.png";
import REACT from "../assets/technical/react-logo.png";
import PHP from "../assets/technical/php-logo.png";
import PS from "../assets/technical/photoshop-logo.png";
import NODEJS from "../assets/technical/nodejs-logo.png";

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
									<img src={JS} alt="JavaScript Logo" />
								</div>
								<span className="skills__name">JavaScript</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={TS} alt="TypeScript Logo" />
								</div>
								<span className="skills__name">TypeScript</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={HTML} alt="HTML5 Logo" />
								</div>
								<span className="skills__name">HTML5</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={CSS} alt="CSS3 Logo" />
								</div>
								<span className="skills__name">CSS3</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={REACT} alt="React Logo" />
								</div>
								<span className="skills__name">React</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={PHP} alt="PHP Logo" />
								</div>
								<span className="skills__name">PHP</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={PS} alt="Adobe Photoshop Logo" />
								</div>
								<span className="skills__name">Adobe Photoshop</span>
							</div>
							<div className="skills__container">
								<div className="hexagon default__gradient--background">
									<img src={NODEJS} alt="Node JS Logo" />
								</div>
								<span className="skills__name">NodeJS</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default TechnicalSkills;