import React, { Suspense } from 'react';
import { StyledEngineProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import theme from 'assets/theme';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import { useLayoutEffect } from 'react';

const HomePage = React.lazy(() => import('views/HomePage'));
const ServicesPage = React.lazy(() => import('views/ServicesPage'));
const AboutPage = React.lazy(() => import('views/AboutPage'));
const ContactPage = React.lazy(() => import('views/ContactPage'));

interface WrapperProps {
	children: JSX.Element;
}

const ScrollToTop = ({ children }: WrapperProps) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};

const App: React.FC = () => {
	return (
		<Router>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<ScrollToTop>
						<Suspense
							fallback={
								<div className='w-screen h-screen flex items-center justify-center'>
									<HourglassBottomIcon />
								</div>
							}
						>
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/kontakt' element={<ContactPage />} />
								<Route path='/uslugi' element={<ServicesPage />} />
								<Route path='/o-mnie' element={<AboutPage />} />
							</Routes>
						</Suspense>
					</ScrollToTop>
				</ThemeProvider>
			</StyledEngineProvider>
		</Router>
	);
};

export default App;
