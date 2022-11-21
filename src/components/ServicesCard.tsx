import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ServicesCards } from 'data/data';

interface ServicesCardProps {
	mirror?: boolean;
	data: ServicesCards;
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
	data: { title, copy },
	imgIndex,
}) => {
	return (
		<Box className='text-left m-6 max-w-full sm:max-w-[60rem] p-6 mx-auto'>
			<Card className='md:min-h-[10rem] lg:min-h-[13rem] flex flex-col sm:flex-row items-start justify-start bg-slate-50 mb-8'>
				<>
					<ImgBox
						imgIndex={imgIndex}
						addStyles={`hidden ${mirror && 'sm:block'}`}
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
							{copy.map((item) => (
								<Typography
									gutterBottom
									variant='body2'
									className={`${item.isBold && 'font-bold'}`}
								>
									{item.content}
								</Typography>
							))}
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
