import { AuthReducer } from './AuthReducer';
import { EconomyReducer } from './EconomyReducer';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
	auth: AuthReducer,
	economy: EconomyReducer
});
