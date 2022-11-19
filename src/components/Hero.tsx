import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { home } from 'data/data';
import { NavLink } from 'react-router-dom';

const Hero: React.FC = () => {

	return (
		<Paper
			square
			className='bg-heroMobile sm:bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen w-full -mt-[7.2rem] md:-mt-[6.6rem]'
		>
			<Stack className='flex-column justify-center items-center sm:items-start h-full w-full sm:w-4/5 max-w-7xl mx-auto p-4 sm:p-16 text-center'>
				{home.hero.map((copy: string, index) => (
					<Typography
						color='white'
						gutterBottom
						variant='h4'
						component='h2'
						key={index}
					>
						{copy}
					</Typography>
				))}

				<NavLink to='/kontakt'>
					<Button
						variant='contained'
						className='bg-primary text-white mt-5 max-w-[100px] mx-auto sm:ml-0'
					>
						kontakt
					</Button>
				</NavLink>
			</Stack>
		</Paper>
	);
};
export default Hero;
