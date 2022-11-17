import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

interface ServicesCardProps {
	mirror?: boolean;
	title: string;
	copyLine1: string;
	isLine1Bold?: boolean;
	copyLine2?: string;
	isLine2Bold?: boolean;
	copyLine3?: string;
	isLine3Bold?: boolean;
	copyLine4?: string;
	isLine4Bold?: boolean;
	imgIndex: number;
}

interface ImgBoxProps {
	addStyles?: string;
	imgIndex: number;
}

const ImgBox: React.FC<ImgBoxProps> = ({ addStyles, imgIndex }) => {
	return (
		<>
			<div className='bg-service1 hidden' />
			<div className='bg-service2 hidden' />
			<div className='bg-service3 hidden' />
			<div className='bg-service4 hidden' />
			<CardMedia
				component='div'
				className={`bg-no-repeat bg-cover bg-center w-full sm:w-1/3 min-h-[16rem] sm:self-stretch ${addStyles} bg-service${
					imgIndex + 1
				}`}
			/>
		</>
	);
};

const ServicesCard: React.FC<ServicesCardProps> = ({
	mirror,
	title,
	copyLine1,
	copyLine2,
	copyLine3,
	copyLine4,
	isLine1Bold,
	isLine2Bold,
	isLine3Bold,
	isLine4Bold,
	imgIndex,
}) => {
	return (
		<Box className='text-left m-4 mb-16 max-w-full sm:max-w-[60rem] p-4 mx-auto'>
			<Card className='md:min-h-[10rem] lg:min-h-[13rem] flex flex-col sm:flex-row items-start justify-start bg-slate-50'>
				<>
					<ImgBox
						imgIndex={imgIndex}
						addStyles={`hidden ${mirror ? 'sm:block' : ''}`}
					/>
					<CardContent className='flex justify-between sm:w-2/3 gap-16 self-stretch p-4'>
						<Box className='w-full h-full'>
							<Typography
								variant='subtitle1'
								component='h3'
								className='font-bold'
							>
								{title}
							</Typography>
							<Divider variant='fullWidth' className='my-4' />
							<Typography
								gutterBottom
								variant='body2'
								className={`${isLine1Bold ? 'font-bold' : ''}`}
							>
								{copyLine1}
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								className={`${isLine2Bold ? 'font-bold' : ''}`}
							>
								{copyLine2}
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								className={`${isLine3Bold ? 'font-bold' : ''}`}
							>
								{copyLine3}
							</Typography>
							<Typography
								variant='body2'
								className={`${isLine4Bold ? 'font-bold' : ''}`}
							>
								{copyLine4}
							</Typography>
						</Box>
					</CardContent>
					<ImgBox
						imgIndex={imgIndex}
						addStyles={mirror ? 'block sm:hidden' : ''}
					/>
				</>
			</Card>
		</Box>
	);
};

export default ServicesCard;
