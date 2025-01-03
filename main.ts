import { getAuth, onAuthSateChanged, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth();
const button = document. querySelector('button');

onAuthSateChanged(auth, user => {
    if (user == null ) { return; }
    console.log(user);
})

button?.addEventListener('click', clickEvent => {
    signInWithRedirect(auth, new GoogleAuthProvider());
})