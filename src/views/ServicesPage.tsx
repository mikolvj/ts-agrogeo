import Navigation from 'components/Navigation';
import ServicesCard from 'components/ServicesCard';
import Footer from 'components/Footer';
import { Typography } from '@mui/material';
import { services } from 'data/data';

const ServicesPage: React.FC = () => {
	return (
		<>
			<Navigation isHero={false} />
			<Typography variant='h4' className='mx-auto text-center mt-12 font-bold'>
				Zakres usług
			</Typography>
			{services.cards.map((item, index) => (
				<ServicesCard
					title={item.title}
					copyLine1={item.copyLine1}
					copyLine2={item.copyLine2}
					copyLine3={item.copyLine3}
					copyLine4={item.copyLine4}
					isLine1Bold={item.isLine1Bold}
					isLine2Bold={item.isLine2Bold}
					isLine3Bold={item.isLine3Bold}
					isLine4Bold={item.isLine4Bold}
					mirror={index % 2 !== 0}
					imgIndex={index}
					key={index}
				/>
			))}
			<Footer />
		</>
	);
};

export default ServicesPage;
