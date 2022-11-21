import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { home } from 'data/data';

const Badges: React.FC = () => {
	return (
		<Grid container className='max-w-5xl mx-auto'>
			{home.pros.cards.map((badge, index) => (
				<Grid item xs={10} md={4} key={index} className='mx-auto'>
					<Stack className='p-4 mb-8 flex flex-col justify-center items-center'>
						<Avatar className='bg-primary h-16 w-16'>{badge.icon}</Avatar>
						<Typography
							variant='button'
							component='h3'
							align='center'
							className='text-white font-bold mt-4'
						>
							{badge.title}
						</Typography>
						<Typography
							variant='subtitle1'
							align='center'
							className='mt-4 text-slate-100'
						>
							{badge.copy}
						</Typography>
					</Stack>
				</Grid>
			))}
		</Grid>
	);
};

export default Badges;
