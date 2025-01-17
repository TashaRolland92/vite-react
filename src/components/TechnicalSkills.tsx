import JS from "../assets/technical/javascript-logo.png"
console.log(JS);
import TS from "../assets/technical/typescript-logo.png";
console.log(TS);
import HTML from "../assets/technical/html-logo.png";
console.log(HTML);
import CSS from "../assets/technical/css-logo.png";
console.log(CSS);
import REACT from "../assets/technical/react-logo.png";
console.log(REACT);
import PHP from "../assets/technical/php-logo.png";
console.log(PHP);
import PS from "../assets/technical/photoshop-logo.png";
console.log(PS);
import NODEJS from "../assets/technical/nodejs-logo.png";
console.log(NODEJS);

const TechnicalSkills = () => {
	return (
		<section id="section2" className="technical-skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="align-centre uppercase">Technical Skills</h2>
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
								<img src={PS} alt="MySQL Logo" />
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