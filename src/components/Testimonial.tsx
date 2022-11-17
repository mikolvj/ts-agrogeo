import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface TestimonialProps {
	copy: string,
	author: string
}


const Testimonial: React.FC<TestimonialProps> = ({copy, author}) => {
	return (
		<Box className='text-left m-4 max-w-full sm:max-w-[40rem] p-4 mx-auto'>
			<Card className='md:min-h-[10rem] lg:min-h-[13rem] flex flex-col sm:flex-row items-center justify-center bg-slate-200 text-center relative overflow-visible mt-12'>
				<CardContent>
					<Avatar className='bg-primary h-20 w-20 absolute left-1/2 -top-10 -translate-x-1/2 border-white border-8'>
						<FormatQuoteIcon fontSize='large' className='scale-150' />
					</Avatar>
					<Typography
						variant='body2'
						className='text-slate-600 italic mb-4 mt-8'
					>
						{copy}
					</Typography>
					<Typography variant='subtitle2' className='text-black w-3/5 mx-auto'>
						{author}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Testimonial;
