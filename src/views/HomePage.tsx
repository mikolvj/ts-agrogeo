import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Logos from 'components/Logos';
import Navigation from 'components/Navigation';
import Pros from 'components/Pros';
import Services from 'components/Services';

const HomePage: React.FC = () => {
	return (
		<>
			<Navigation isHero={true}/>
			<Hero />
			<Services />
			<Pros />
			<Logos />
			<Contact bgGreen={true} />
			<Footer />
		</>
	);
};

export default HomePage;
