import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderLogo from './HeaderLogo';
import { NavLink } from 'react-router-dom';
import { desktopNavItems, mobileNavItems } from 'data/data';

interface NavigationProps {
	isTransparent: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isTransparent }) => {
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
			className={`sticky top-0 px-8 sm:px-16 z-50 py-8 duration-300 delay-100 ${
				isTransparent ? 'bg-transparent text-white' : 'bg-white text-black'
			} ${isScroll && 'bg-slate-50 text-black py-3 shadow-md'}`}
		>
			<Stack className='hidden md:flex flex-row items-center justify-between w-full max-w-7xl mx-auto'>
				<HeaderLogo isScroll={isScroll} />
				<ul className='flex flex-row items-center justify-beetwen'>
					{desktopNavItems.map((item) => (
						<NavLink to={item.url} key={item.title}>
							<li className='menuItem'>
								<Typography variant='button'>{item.title}</Typography>
							</li>
						</NavLink>
					))}
					<NavLink to='/kontakt'>
						<Button
							variant='contained'
							component='li'
							className='ml-4 text-white'
						>
							kontakt
						</Button>
					</NavLink>
				</ul>
			</Stack>
			<Stack className='flex flex-row items-center justify-between md:hidden h-full'>
				<HeaderLogo isScroll={isScroll} />
				<Button
					onClick={toggleDrawer(true)}
					className='hover:bg-transparent p-4 -mt-4 -mr-4'
				>
					<MenuIcon
						fontSize='large'
						className={`pt-2 text-black ${isTransparent && 'text-white/100'} ${
							isScroll && 'text-black/100 mt-2'
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
							className={`absolute pt-2 right-8 text-black z-1000 ${
								isScroll ? 'top-5' : 'top-8'
							}`}
						/>
						<List className='mt-40 ml-4 uppercase'>
							{mobileNavItems.map((item) => (
								<NavLink to={item.url} key={item.title}>
									<ListItem disablePadding>
										<ListItemButton className='hover:bg-white mb-4'>
											<Typography
												gutterBottom
												variant='h5'
												align='center'
												className='w-full font-bold'
											>
												{item.title}
											</Typography>
										</ListItemButton>
									</ListItem>
								</NavLink>
							))}
						</List>
					</Box>
				</SwipeableDrawer>
			</Stack>
		</Stack>
	);
};

export default Navigation;
