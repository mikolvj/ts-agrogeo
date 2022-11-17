import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { contact } from 'data/data';

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
					? 'bg-gradient-to-bl from-primary to-secondary w-full mt-0 mb-auto'
					: 'bg-white h-full'
			}`}
		>
			<Container className=' w-full mt-0 pt-12 pb-24'>
				<Stack
					className={`flex justify-center items-center my-12 ${
						bgGreen ? 'text-white' : 'text-black mt-0'
					}`}
				>
					<Typography
						variant='h4'
						component='h2'
						className='max-w-2xl text-center font-bold'
						gutterBottom
					>
						{contact.title}
					</Typography>
					<Typography
						className={`text-center ${
							bgGreen ? 'text-slate-100' : 'text-slate-600'
						}`}
					>
						{contact.copy}
					</Typography>
				</Stack>
				<Stack
					className={`justify-center items-center gap-4 flex-col md:flex-row w-4/5 lg:w-3/5 mx-auto h-full ${
						bgGreen ? 'text-slate-100' : 'text-slate-600'
					}`}
				>
					<Stack className='text-center md:text-left w-full, md:w-1/2 h-full'>
						<Typography variant='h5' className='font-bold'>
							{contact.nameLine1}
						</Typography>
						<Typography variant='h5' className='font-bold'>
							{contact.nameLine2}
						</Typography>
						<Typography variant='subtitle2' className='mt-8'>
							{contact.addressLine1}
						</Typography>
						<Typography variant='subtitle2'>{contact.addressLine2}</Typography>
						<Typography variant='subtitle2'>NIP {contact.taxId}</Typography>
						<Link
							href={`tel:+48${contact.phone}`}
							underline='none'
							variant='h6'
							className='mt-8 break-keep whitespace-nowrap text-inherit'
						>
							<LocalPhoneIcon fontSize='medium' className='mr-2' />
							{contact.phone}
						</Link>
						<Link
							href={`mailto:${contact.email}`}
							underline='none'
							variant='h6'
							className='mt-4 break-keep whitespace-nowrap text-inherit'
						>
							<EmailIcon fontSize='medium' className='mr-2' />
							{contact.email}
						</Link>
					</Stack>
					<Stack
						className={`${bgGreen && 'hidden'} sm:block w-full lg:w-1/2 h-full`}
					>
						<iframe
							title='map'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.1778055163218!2d18.06220691546172!3d51.27104607959694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471075a14a707a9f%3A0xf87f6a3c41de20a4!2sDonabor%C3%B3w%2089%2C%2063-604%20Donabor%C3%B3w!5e0!3m2!1spl!2spl!4v1668543402062!5m2!1spl!2spl'
							className='border-none w-full h-60 shadow-lg mt-8 md:mt-0'
							loading='lazy'
						></iframe>
					</Stack>
				</Stack>
			</Container>
		</Paper>
	);
};

export default Contact;
