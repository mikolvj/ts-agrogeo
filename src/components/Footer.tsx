import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { contact } from 'data/data';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
	return (
		<Paper className={`h-10 text-white bg-primary `}>
			<Stack className='flex-row items-center w-full lg:w-3/5 justify-center sm:justify-between h-full mx-auto px-8 lg:px-0 max-w-4xl'>
				<Typography variant='subtitle2' className='hidden sm:flex'>
					&#169; {currentYear} {contact.nameLine1} {contact.nameLine2}
				</Typography>
				<Stack className='flex-row items-center gap-2 h-full'>
					<Link
						href={`mailto:${contact.email}`}
						underline='none'
						variant='subtitle2'
						className='text-inherit'
					>
						<EmailIcon fontSize='small' className='mr-2' />
						{contact.email}
					</Link>

					<Divider orientation='vertical' variant='middle' flexItem />
					<Link
						href={`tel:+48${contact.phone}`}
						underline='none'
						variant='subtitle2'
						className='text-inherit'
					>
						<LocalPhoneIcon fontSize='small' className='mr-2' />
						{contact.phone}
					</Link>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default Footer;
