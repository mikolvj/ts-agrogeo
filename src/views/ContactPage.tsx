import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const ContactPage: React.FC = () => {
	return (
		<>
			<Navigation isTransparent={false} />
			<div className='min-h-[calc(100vh-9rem)]'>
				<Contact bgGreen={false} />
			</div>
			<Footer />
		</>
	);
};

export default ContactPage;
