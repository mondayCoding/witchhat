import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
const config = {
	apiKey: '123123123',
	authDomain: 'witchbase.firebaseapp2.com',
	databaseURL: 'https://witchbase.firebaseio2.com',
	projectId: 'witchbase',
	storageBucket: 'witchbase.appspot2.com',
	messagingSenderId: '123123123'
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });

// database
// 	.collection('events')
// 	.get()
// 	.then((collection) =>
// 		collection.docs.forEach((document) => console.log(document.data()))
// 	);

export { auth, database };
