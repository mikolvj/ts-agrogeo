import { Container, Stack, Typography } from '@mui/material';
import Badges from 'components/Badges';
import { pros } from 'data/data';

const Pros: React.FC = () => {
	return (
		<Container className=' w-full mt-0 py-20'>
			<Stack justifyContent='center' alignItems='center' className='my-12'>
				<Typography
					variant='h4'
					component='h2'
					className='font-bold max-w-2xl text-center'
					gutterBottom
				>
					{pros.heading}
				</Typography>
				<Typography className='text-gray-600'>{pros.description}</Typography>
			</Stack>
			<Badges />
		</Container>
	);
};

export default Pros;
