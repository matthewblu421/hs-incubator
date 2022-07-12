import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDa0bkrU28Tiw4ZwjIcDdKBF7OuLJ4UjDo',

	authDomain: 'headstarterincubator.firebaseapp.com',

	projectId: 'headstarterincubator',

	storageBucket: 'headstarterincubator.appspot.com',

	messagingSenderId: '914853499749',

	appId: '1:914853499749:web:da7409f3f25b14d091c78c',

	measurementId: 'G-9ECRN8KENJ'
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

