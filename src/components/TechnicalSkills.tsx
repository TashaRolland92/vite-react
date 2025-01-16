import JS from "../assets/technical/JavaScript-logo.png";
import TS from "../assets/technical/Typescript-logo.png";
import HTML from "../assets/technical/HTML5-logo.png";
import CSS from "../assets/technical/CSS3-logo.png";
import REACT from "../assets/technical/React-logo.png";
import PHP from "../assets/technical/PHP-logo.png";
import MYSQL from "../assets/technical/mysql-logo.png";
import NODEJS from "../assets/technical/nodejs-logo.png";

const TechnicalSkills = () => {
	return (
		<section id="section2" className="technical-skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="align-centre">Technical Skills</h2>
						<div className="hexagon-grid">
							<div className="hexagon">
								<img src={JS} alt="JavaScript Logo" />
							</div>
							<div className="hexagon">
								<img src={TS} alt="TypeScript Logo" />
							</div>
							<div className="hexagon">
								<img src={HTML} alt="HTML5 Logo" />
							</div>
							<div className="hexagon">
								<img src={CSS} alt="CSS3 Logo" />
							</div>
							<div className="hexagon">
								<img src={REACT} alt="React Logo" />
							</div>
							<div className="hexagon">
								<img src={PHP} alt="PHP Logo" />
							</div>
							<div className="hexagon">
								<img src={MYSQL} alt="MySQL Logo" />
							</div>
							<div className="hexagon">
								<img src={NODEJS} alt="Node JS Logo" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default TechnicalSkills;