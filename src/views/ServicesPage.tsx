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
			{services.cards.map((data, index) => (
				<ServicesCard
					data={data}
					mirror={index % 2 !== 0}
					imgIndex={index}
					key={index}
				/>
			))}
			<div className='h-6' />
			<Footer />
		</>
	);
};

export default ServicesPage;
