import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Layout/GlobalStyles';
import { ThemeManager } from './Library/theme';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { App } from './Layout/App';
import { createStore } from 'redux';
import { RootReducer } from './Store/Reducers/RootReducer';
import './Translation/Translation.ts';
import 'react-toastify/dist/ReactToastify.css';

export const reduxStore = createStore(RootReducer);

export const Application = () => {
	return (
		<ThemeManager>
			<GlobalStyle />

			<BrowserRouter>
				<Provider store={reduxStore}>
					<App />
				</Provider>
			</BrowserRouter>

			<ToastContainer
				draggablePercent={40}
				hideProgressBar={true}
				toastClassName={'TOAST'}
			/>
		</ThemeManager>
	);
};

ReactDOM.render(<Application />, document.getElementById('root'));
