import { Paper, Link, Typography, Button, Stack } from '@mui/material';
import { hero } from 'data/data';
import Navigation from 'components/Navigation';

const Hero: React.FC = () => {
	return (
		<Paper
			square
			className='bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen w-full mt-0'
		>
			<Stack direction='row' justifyContent='center' alignItems='center'>
				<Link href='#' underline='none' className='text-5xl font-bold'>
					<img
						src={require('assets/img/logo.png')}
						alt='logo'
						className='h-10 mt-12 mx-auto'
					/>
				</Link>
				<Navigation />
			</Stack>
			<Stack
				direction='column'
				justifyContent='center'
				alignItems='center'
				className='h-4/5'
			>
				<Typography gutterBottom color='white' variant='h3' component='h1'>
					{hero.heading}
				</Typography>
				<Typography color='white' gutterBottom>
					{hero.description}
				</Typography>
				<Button variant='contained' className='bg-primary mt-5'>
					{hero.cta}
				</Button>
			</Stack>
		</Paper>
	);
};
export default Hero;
