import { Container, Stack, Typography } from '@mui/material';
import { pros } from 'data/data';

const Logos: React.FC = () => {
	return (
		<Container className='w-full mt-24'>
			<Stack
				justifyContent='center'
				alignItems='center'
				className=' text-black'
			>
				<Typography
					variant='h4'
					component='h2'
					className='font-bold max-w-2xl text-center'
					gutterBottom
				>
					Zaufali nam
				</Typography>
				<Typography className='text-slate-600 mb-12'>
					{pros.description}
				</Typography>
				<Stack
					justifyContent='center'
					alignItems='center'
					direction='row'
					sx={{ flexWrap: 'wrap' }}
					gap={4}
					className='max-w-full overflow-hidden mb-12'
				>
					<img
						src={require('assets/img/logo-1.png')}
						alt='logo powiatu kępińskiego'
						className='h-20 sm:h-40 opacity-50 mx-2 sm:mx-4 mb-12'
					/>
					<img
						src={require('assets/img/logo-1.png')}
						alt='logo powiatu kępińskiego'
						className='h-20 sm:h-40 opacity-50 mx-2 sm:mx-4 mb-12'
					/>
					<img
						src={require('assets/img/logo-1.png')}
						alt='logo powiatu kępińskiego'
						className='h-20 sm:h-40 opacity-50 mx-2 sm:mx-4 mb-12'
					/>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Logos;
