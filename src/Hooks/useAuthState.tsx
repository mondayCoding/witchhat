import { useState, useEffect } from 'react';
import { firebase } from '../Firebase/index';

export const useAuthState = () => {
	const [userAuth, setAuthUser] = useState(null as firebase.User);

	useEffect(() => {
		console.log('Add Listener');
		firebase.onAuthStateChanged((auth) => {
			console.log('current auth');
			console.log(userAuth);
			console.log('new auth');
			console.log(auth);
			auth ? setAuthUser(auth) : setAuthUser(null);
		});
		return () => {
			console.log('need to remove listener here');
		};
	}, []);
	return { userAuth };
};
