import Landing from './components/Landing';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import ProfessionalExperience from './components/ProfessionalExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
	<>
		{process.env.NODE_ENV === "development" ? (
			<>
				<Header />
				<Hero />
				<About />
				<TechnicalSkills />
				<ProfessionalExperience />
				<Contact />
				<Footer />
			</>
		) : (
			<Landing />
		)}
	</>
);

export default App