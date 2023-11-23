import React, {type ReactElement} from 'react';
import {Header} from '@/components';
import {createTheme, ThemeProvider} from '@mui/material';
import './Layout.scss';

interface LayoutProps {
	children: ReactElement;
}

const Layout = ({children}: LayoutProps): ReactElement => {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#c24b5a'
			}
		},
		typography: {
			fontFamily: 'Roboto, sans-serif',
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Header/>
			<main>{children}</main>
		</ThemeProvider>
	);
};

export default Layout;
