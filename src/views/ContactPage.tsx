import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const ContactPage: React.FC = () => {
	return (
		<>
			<Navigation isHero={false} />
			<Contact bgGreen={false} />
			<Footer />
		</>
	);
};

export default ContactPage;
