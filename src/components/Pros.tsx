import { Container, Paper, Stack, Typography } from '@mui/material';
import Badges from 'components/Badges';
import { pros } from 'data/data';

const Pros: React.FC = () => {
	return (
		<Paper
			square
			className='bg-section bg-no-repeat bg-cover bg-center bg-fixed w-full'
		>
			<Container className=' w-full mt-0 py-12'>
				<Stack
					justifyContent='center'
					alignItems='center'
					className='my-12 text-white'
				>
					<Typography
						variant='h4'
						component='h2'
						className='font-bold max-w-2xl text-center'
						gutterBottom
					>
						{pros.heading}
					</Typography>
					<Typography className='text-slate-100'>{pros.description}</Typography>
				</Stack>
				<Badges />
			</Container>
		</Paper>
	);
};

export default Pros;
