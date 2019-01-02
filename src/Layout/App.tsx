import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { ThemeManager } from '../Library/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from '../Hooks/useAuthState';
import { LoginLayout } from './Login/LoginLayout';
import { SiteLayout } from './Site/SiteLayout';

const App: React.SFC = () => {
	const { userAuth } = useAuthState();

	return userAuth ? <SiteLayout user={userAuth} /> : <LoginLayout />;
};

export const ThemedApp = () => {
	return (
		<ThemeManager>
			<GlobalStyle />
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<ToastContainer
				draggablePercent={40}
				hideProgressBar={true}
				toastClassName={'TOAST'}
			/>
		</ThemeManager>
	);
};
