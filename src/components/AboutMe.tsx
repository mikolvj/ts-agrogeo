import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { about } from 'data/data';

const AboutMe: React.FC = () => {
	return (
		<Stack className='flex lg:flex-row items-center justify-center flex-wrap mx-auto w-full max-w-7xl gap-4 mb-24'>
			<Box className='h-full w-full lg:w-1/5 lg:min-w-[15rem]'>
				<Box className='mx-auto rounded-full bg-profile bg-center bg-cover h-40 w-40 md:h-60 md:w-60 max-w-full'></Box>
			</Box>
			<Card className='w-4/5 lg:w-3/5 min-h-[16rem] shrink p-4'>
				<CardContent className='flex justify-between w-full gap-16 self-stretch p-4'>
					<Box className='w-full h-full'>
						<Typography
							variant='subtitle1'
							component='h3'
							className='font-bold'
						>
							{about.cv.name}
						</Typography>

						<Divider variant='fullWidth' className='my-4' />
						<Typography gutterBottom variant='body2'>
							{about.cv.copyLine1}
						</Typography>
						<Typography gutterBottom variant='body2'>
							{about.cv.copyLine2}
						</Typography>
						<Typography variant='body2'>{about.cv.copyLine3}</Typography>
					</Box>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default AboutMe;
