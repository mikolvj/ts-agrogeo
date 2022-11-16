import { useState, useEffect } from 'react';
import { Typography, Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderLogo from './HeaderLogo';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
	isHero: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isHero }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScroll, setIsScroll] = useState(false);

	useEffect(() => {
		const scrollHandler = () => {
			let offset = window.scrollY;
			if (offset > 0) setIsScroll(true);
			else setIsScroll(false);
		};

		window.addEventListener('scroll', scrollHandler);
	}, []);

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setIsOpen(open);
		};

	return (
		<Stack
			className={`sticky top-0 px-8 sm:px-16 z-50 py-8 duration-300 delay-100  ${
				isHero && !isScroll
					? 'bg-transparent text-white'
					: isHero && isScroll
					? 'bg-white text-black py-3 shadow-md'
					: !isHero && !isScroll
					? 'bg-white text-black'
					: !isHero && isScroll
					? 'bg-white text-black py-3 shadow-md'
					: ''
			}`}
		>
			<Stack className='hidden sm:flex flex-row items-center justify-between w-full max-w-7xl mx-auto'>
				<HeaderLogo isScroll={isScroll} isHero={isHero} />
				<ul className='flex flex-row items-center justify-beetwen'>
					<NavLink to='/'>
						<li className='menuItem'>
							<Typography variant='button'>start</Typography>
						</li>
					</NavLink>
					<li className='menuItem'>
						<Typography variant='button'>usługi</Typography>
					</li>
					<li className='menuItem'>
						<Typography variant='button'>o mnie</Typography>
					</li>
					<NavLink to='/kontakt'>
						<Button variant='contained' component='li' className='ml-4'>
							kontakt
						</Button>
					</NavLink>
				</ul>
			</Stack>
			<Stack className='flex flex-row items-center justify-between sm:hidden h-full'>
				<HeaderLogo isScroll={isScroll} isHero={isHero} />
				<Button
					onClick={toggleDrawer(true)}
					className='hover:bg-transparent p-4 -mt-4 -mr-4'
				>
					<MenuIcon
						fontSize='large'
						className={`${
							// isScroll || !isHero ? 'text-black mt-2' : 'text-white'
							isHero && !isScroll
								? 'text-white'
								: isHero && isScroll
								? 'text-black mt-2'
								: !isHero && !isScroll
								? 'text-black'
								: !isHero && isScroll
								? 'text-black mt-2'
								: ''
						}`}
					/>
				</Button>
				<SwipeableDrawer
					anchor='right'
					open={isOpen}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
				>
					<Box
						sx={{ width: 300 }}
						role='presentation'
						onClick={toggleDrawer(false)}
						onKeyDown={toggleDrawer(false)}
					>
						<CloseIcon
							fontSize='large'
							className={`absolute right-8 text-black z-1000 ${
								isScroll ? 'top-5' : 'top-8'
							}`}
						/>
						<List className='mt-40 ml-4 uppercase'>
							<NavLink to='/'>
								<ListItem disablePadding>
									<ListItemButton className='hover:bg-white mb-4'>
										<Typography
											gutterBottom
											variant='h5'
											align='center'
											className='w-full'
										>
											start
										</Typography>
									</ListItemButton>
								</ListItem>
							</NavLink>
							<ListItem disablePadding>
								<ListItemButton className='hover:bg-white mb-4'>
									<Typography
										gutterBottom
										variant='h5'
										align='center'
										className='w-full'
									>
										usługi
									</Typography>
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton className='hover:bg-white mb-4'>
									<Typography
										gutterBottom
										variant='h5'
										align='center'
										className='w-full'
									>
										o mnie
									</Typography>
								</ListItemButton>
							</ListItem>
							<NavLink to='/kontakt'>
								<ListItem disablePadding>
									<ListItemButton className='hover:bg-white mb-4'>
										<Typography
											gutterBottom
											variant='h5'
											align='center'
											className='w-full'
										>
											kontakt
										</Typography>
									</ListItemButton>
								</ListItem>
							</NavLink>
						</List>
					</Box>
				</SwipeableDrawer>
			</Stack>
		</Stack>
	);
};

export default Navigation;
