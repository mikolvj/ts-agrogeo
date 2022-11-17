import { StyledEngineProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'assets/theme';
import HomePage from 'views/HomePage';
import ContactPage from 'views/ContactPage';
import ServicesPage from 'views/ServicesPage';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import AboutPage from 'views/AboutPage';
import { useLayoutEffect } from 'react';

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
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/kontakt' element={<ContactPage />} />
							<Route path='/uslugi' element={<ServicesPage />} />
							<Route path='/o-mnie' element={<AboutPage />} />
						</Routes>
					</ScrollToTop>
				</ThemeProvider>
			</StyledEngineProvider>
		</Router>
	);
};

export default App;
