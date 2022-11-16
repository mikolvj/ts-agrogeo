import { StyledEngineProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'assets/theme';
import HomePage from 'views/HomePage';
import ContactPage from 'views/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<Router>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/kontakt' element={<ContactPage />} />
					</Routes>
				</ThemeProvider>
			</StyledEngineProvider>
		</Router>
	);
};

export default App;
