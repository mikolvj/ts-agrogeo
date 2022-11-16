import {
	Button,
	Paper,
	Stack,
	Grid,
	Typography,
	Card,
	CardContent,
	Box,
	Divider,
} from '@mui/material';
import { services, servicesCards } from 'data/data';

const Services: React.FC = () => {
	return (
		<Paper
			elevation={0}
			square
			className='w-full mt-0 mb-16 flex flex-col justify-center items-center'
		>
			<Stack direction='column' justifyContent='center' alignItems='center'>
				<Typography
					variant='h4'
					component='h2'
					className='font-bold max-w-2xl text-center mt-24'
				>
					{services.heading}
				</Typography>
				<Typography className='text-slate-600 mt-2 mb-12 px-8 max-w-2xl text-center'>
					{services.description}
				</Typography>
			</Stack>
			<Grid container className='max-w-5xl mx-auto justify-center'>
				{servicesCards.map((card, index) => (
					<Grid item xs={10} md={5} lg={3} className='mx-auto' key={index}>
						<Box className='text-left m-4 mb-16'>
							<Card className='md:min-h-[10rem] lg:min-h-[13rem] flex flex-column items-start justify-start bg-slate-50'>
								<CardContent>
									<Box>
										<Typography
											variant='subtitle1'
											component='h3'
											className='font-bold'
										>
											{card.title}
										</Typography>
									</Box>
									<Divider className='my-4' />
									<Typography variant='body2'>{card.content}</Typography>
								</CardContent>
							</Card>
						</Box>
					</Grid>
				))}
			</Grid>
			<Button
				variant='contained'
				color='primary'
				className='bg-primary mx-auto'
			>
				zobacz więcej
			</Button>
		</Paper>
	);
};

export default Services;
