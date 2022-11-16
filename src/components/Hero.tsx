import { Paper, Typography, Button, Stack } from '@mui/material';
import { hero } from 'data/data';
import { NavLink } from 'react-router-dom';

const Hero: React.FC = () => {
	return (
		<Paper
			square
			className='bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen w-full -mt-[7.2rem] sm:-mt-[6.6rem]'
		>
			<Stack className='flex-column justify-center items-center sm:items-start h-full w-full sm:w-4/5 max-w-7xl mx-auto p-4 sm:p-16 text-center'>
				<Typography color='white' gutterBottom variant='h4' component='h2'>
					{hero.headingFirstLine}
				</Typography>
				<Typography color='white' gutterBottom variant='h4' component='h2'>
					{hero.headingSecondLine}
				</Typography>
				<Typography color='white' gutterBottom variant='h4' component='h2'>
					{hero.headingThirdLine}
				</Typography>
				<NavLink to='/kontakt'>
					<Button
						variant='contained'
						className='bg-primary mt-5 max-w-[100px] mx-auto sm:ml-0'
					>
						{hero.cta}
					</Button>
				</NavLink>
			</Stack>
		</Paper>
	);
};
export default Hero;
