import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import { home } from 'data/data';

const ServicesShort: React.FC = () => {
	return (
		<Paper
			elevation={0}
			square
			className='w-full my-0 mb-2 flex flex-col justify-center items-center'
		>
			<Stack className='flex flex-col justify-center items-center mt-24'>
				<Typography
					variant='h4'
					component='h2'
					gutterBottom
					className='font-bold max-w-2xl text-center '
				>
					{home.servicesShort.title}
				</Typography>
				<Typography  className='text-slate-600 mb-12 px-8 max-w-2xl text-center'>
					{home.servicesShort.copy}
				</Typography>
			</Stack>
			<Grid container className='max-w-5xl mx-auto justify-center'>
				{home.servicesShort.cards.map((card, index) => (
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
									<Typography variant='body2'>{card.copy}</Typography>
								</CardContent>
							</Card>
						</Box>
					</Grid>
				))}
			</Grid>
			<NavLink to='/uslugi'>
				<Button
					variant='contained'
					color='primary'
					className='bg-primary text-white mx-auto mb-24'
				>
					zobacz więcej
				</Button>
			</NavLink>
		</Paper>
	);
};

export default ServicesShort;
