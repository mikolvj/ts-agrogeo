import { Grid, Stack, Avatar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { badges, Icons } from 'data/data';

const chooseIcon = (n: Icons) => {
	switch (n) {
		case 'favorite':
			return <FavoriteIcon fontSize='large' />;
		case 'watch':
			return <WatchLaterIcon fontSize='large' />;
		case 'star':
			return <StarIcon fontSize='large' />;
	}
};

const Badges: React.FC = () => {
	return (
		<Grid container className='max-w-5xl mx-auto'>
			{badges.map((badge, index) => (
				<Grid item xs={10} md={4} key={index} className='mx-auto'>
					<Stack
						direction='column'
						justifyContent='center'
						alignItems='center'
						className='p-4 mb-12'
					>
						<Avatar className='bg-primary h-16 w-16'>
							{chooseIcon(badge.icon)}
						</Avatar>
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
							{badge.description}
						</Typography>
					</Stack>
				</Grid>
			))}
		</Grid>
	);
};

export default Badges;
