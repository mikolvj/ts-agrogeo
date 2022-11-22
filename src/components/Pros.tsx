import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Badges from 'components/Badges';
import { home } from 'data/data';

const Pros: React.FC = () => {
	return (
		<Paper
			square
			className='bg-sectionMobile sm:bg-section bg-no-repeat bg-cover bg-center sm:bg-fixed w-full'
		>
			<Container className=' w-full mt-0 py-12'>
				<Stack className='justify-center items-center my-12 text-white'>
					<Typography
						variant='h4'
						component='h2'
						className='font-bold max-w-2xl text-center'
						gutterBottom
					>
						{home.pros.title}
					</Typography>
					<Typography className='text-slate-100'>{home.pros.copy}</Typography>
				</Stack>
				<Badges />
			</Container>
		</Paper>
	);
};

export default Pros;
