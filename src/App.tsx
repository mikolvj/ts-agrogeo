import { StyledEngineProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'assets/theme';
import Home from 'views/Home';

const App: React.FC = () => {
	return (
		<>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Home />
				</ThemeProvider>
			</StyledEngineProvider>
		</>
	);
};

export default App;
