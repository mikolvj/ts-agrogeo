import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface HeaderLogoProps {
	isScroll: boolean;
	isHero: boolean;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ isScroll, isHero }) => {
	return (
		<NavLink to='/'>
			<Stack className='text-5xl font-bold'>
				<img
					src={
						isScroll || !isHero
							? require('assets/img/logo-b.png')
							: require('assets/img/logo.png')
					}
					alt='logo'
					className={`${
						isScroll ? 'mt-0' : '-mt-3'
					} sm:mt-0 h-10 mx-auto my-auto`}
				/>
			</Stack>
		</NavLink>
	);
};

export default HeaderLogo;
