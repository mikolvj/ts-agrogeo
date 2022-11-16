import { Divider, Paper, Stack, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from 'react';

const Footer: React.FC = () => {
	const [isHigherThanScreen, setIsHigherThanScreen] = useState<boolean>();

	useEffect(() => {
		document.body.scrollHeight > window.innerHeight
			? setIsHigherThanScreen(true)
			: setIsHigherThanScreen(false);
	}, []);

	return (
		<Paper
			className={`h-10 text-white bg-emerald-500 ${
				isHigherThanScreen ? '' : 'absolute bottom-0 w-full'
			}`}
		>
			<Stack
				direction='row'
				alignItems='center'
				className='w-full lg:w-3/5 justify-center sm:justify-between h-full mx-auto px-8 lg:px-0 max-w-4xl'
			>
				<Typography variant='subtitle2' className='hidden sm:flex'>
					&#169; 2022 AgroGeo Grzegorz Stasiak
				</Typography>
				<Stack direction='row' alignItems='center' gap={2} className='h-full'>
					<Typography variant='subtitle2'>
						<EmailIcon fontSize='small' className='mr-2' />
						kontakt@agrogeo.pl
					</Typography>

					<Divider orientation='vertical' variant='middle' flexItem />
					<Typography variant='subtitle2'>
						<LocalPhoneIcon fontSize='small' className='mr-2' />
						607 375 574
					</Typography>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default Footer;
