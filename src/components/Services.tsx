import {
	Paper,
	Stack,
	Grid,
	Typography,
	Card,
	CardContent,
	CardActionArea,
	Box,
} from '@mui/material';
import { services, servicesCards } from 'data/data';

const Services: React.FC = () => {
	return (
		<Paper
			elevation={0}
			square
			className='bg-section bg-no-repeat bg-cover bg-center bg-fixed  w-full mt-0'
		>
			<Stack direction='column' justifyContent='center' alignItems='center'>
				<Typography
					variant='h4'
					component='h2'
					color='white'
					className='font-bold max-w-2xl text-center mt-24'
				>
					{services.heading}
				</Typography>
				<Typography className='text-slate-200 mt-4 mb-24 max-w-2xl text-center'>
					{services.description}
				</Typography>
			</Stack>
			<Grid container className='max-w-5xl mx-auto justify-center'>
				{servicesCards.map((card) => (
					<Grid item xs={10} lg={4} className='mx-auto'>
						<Box className='text-center mb-32 p-4'>
							<Card className='h-[24rem] p-2'>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h3'
										className='my-8'
									>
										{card.title}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{card.content}
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Grid>
				))}
			</Grid>
		</Paper>
	);
};

export default Services;
