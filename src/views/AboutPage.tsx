import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Footer from 'components/Footer';
import Testimonial from 'components/Testimonial';
import Navigation from 'components/Navigation';
import AboutMe from 'components/AboutMe';
import { about } from 'data/data';

const AboutPage: React.FC = () => {
	return (
		<>
			<Navigation isHero={false} />
			<Stack className='flex flex-col items-center w-full mt-12'>
				<Typography variant='h4' className='mb-12 font-bold'>
					{about.cv.title}
				</Typography>
				<AboutMe />
				<Typography variant='h4' className='font-bold'>{about.testimonials.title}</Typography>
				{about.testimonials.quotes.map((item, index) => (
					<Testimonial copy={item.copy} author={item.author} key={index} />
				))}
				<Typography
					variant='subtitle2'
					className='max-w-xl text-center mt-4 mb-24 px-4 '
				>
					{about.disclaimer}
				</Typography>
			</Stack>
			<Footer />
		</>
	);
};

export default AboutPage;
