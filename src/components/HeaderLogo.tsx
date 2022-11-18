import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

interface HeaderLogoProps {
	isScroll: boolean;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ isScroll }) => {
	return (
		<NavLink to='/'>
			<Stack className='text-5xl font-bold cursor-pointer duration-200 hover:opacity-80'>
				<img
					src={require('assets/img/agrogeo.png')}
					alt='logo'
					className={`${
						isScroll ? '-mt-0' : '-mt-3'
					} sm:mt-0 h-10 mx-auto my-auto`}
				/>
			</Stack>
		</NavLink>
	);
};

export default HeaderLogo;
