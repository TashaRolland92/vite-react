import HeroContent from "./HeroContent";
import HeroImage from "../assets/svgs/hero_image.svg";

const Hero = () => (
    <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <HeroContent />
                </div>
                <div className="col-12 col-md-6">
                    <img
                        src={HeroImage}
                        alt="Diamonds, stars, hearts, music notes in pastel, lilac and pink tones"
                        className="hero__image"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;