import React from 'react';
import ReactDOM from 'react-dom';
import { ThemedApp } from './Layout/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './Store/Reducers/RootReducer';

const store = createStore(RootReducer);

ReactDOM.render(
	<Provider store={store}>
		<ThemedApp />
	</Provider>,
	document.getElementById('root')
);
