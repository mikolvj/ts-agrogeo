import { Container, Paper, Stack, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

interface ContactProps {
	bgGreen: boolean;
}

const Contact: React.FC<ContactProps> = ({ bgGreen }) => {
	return (
		<Paper
			square
			elevation={0}
			className={`${
				bgGreen
					? 'bg-gradient-to-bl from-emerald-600 to-emerald-400 w-full mt-0 mb-auto'
					: 'bg-white h-full'
			}`}
		>
			<Container className=' w-full mt-0 pt-12 pb-24'>
				<Stack
					justifyContent='center'
					alignItems='center'
					className={`my-12 ${bgGreen ? 'text-white' : 'text-black mt-0'}`}
				>
					<Typography
						variant='h4'
						component='h2'
						className='font-bold max-w-2xl text-center'
						gutterBottom
					>
						Kontakt
					</Typography>
					<Typography
						className={`text-center ${
							bgGreen ? 'text-slate-100' : 'text-slate-600'
						}`}
					>
						Zapraszamy do kontaktu w celu ustalenia szczegółów.
					</Typography>
				</Stack>
				<Stack
					justifyContent='center'
					alignItems='center'
					gap={4}
					className={`flex-col md:flex-row w-4/5 lg:w-3/5 mx-auto h-full ${
						bgGreen ? 'text-slate-100' : 'text-slate-600'
					}`}
				>
					<Stack className='text-center md:text-left w-full, md:w-1/2 h-full'>
						<Typography variant='h5'>AgroGeo</Typography>
						<Typography variant='h5'>Grzegorz Stasiak</Typography>
						<Typography variant='subtitle2' className='mt-8'>
							Donaborów 89C
						</Typography>
						<Typography variant='subtitle2'>63-604 Baranów</Typography>
						<Typography variant='subtitle2'>NIP 619-199-49-18</Typography>
						<Typography
							variant='h5'
							className='mt-8 break-keep whitespace-nowrap'
						>
							<LocalPhoneIcon fontSize='large' className='mr-2' />
							607 375 574
						</Typography>
						<Typography
							variant='h5'
							className='mt-4 break-keep whitespace-nowrap'
						>
							<EmailIcon fontSize='large' className='mr-2' />
							kontakt@agrogeo.pl
						</Typography>
					</Stack>
					<Stack className='hidden sm:block w-full lg:w-1/2 h-full'>
						<iframe
							title='map'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.1778055163218!2d18.06220691546172!3d51.27104607959694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471075a14a707a9f%3A0xf87f6a3c41de20a4!2sDonabor%C3%B3w%2089%2C%2063-604%20Donabor%C3%B3w!5e0!3m2!1spl!2spl!4v1668543402062!5m2!1spl!2spl'
							className='border-none w-full h-60 shadow-lg'
							loading='lazy'
						></iframe>
					</Stack>
				</Stack>
			</Container>
		</Paper>
	);
};

export default Contact;
