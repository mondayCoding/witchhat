import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyCxyZ0lK6cdS6b1vAjHk0SXQZ8Y4CcW43M',
	authDomain: 'witchbase.firebaseapp.com',
	databaseURL: 'https://witchbase.firebaseio.com',
	projectId: 'witchbase',
	storageBucket: 'witchbase.appspot.com',
	messagingSenderId: '289822157105'
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
